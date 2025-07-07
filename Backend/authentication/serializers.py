from rest_framework import serializers
from django.core.exceptions import ValidationError
from .models import Admin, Professionnel, Entreprise
from django.contrib.auth.hashers import make_password, check_password
from rest_framework_simplejwt.tokens import RefreshToken #Utiliser pour le token lors du login

class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = ['id_admin', 'nom', 'email', 'annee_arrivee', 'statut', 'photo']

class ProfessionnelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Professionnel
        fields = ['id_pro', 'nom', 'email', 'score', 'statut', 'photo', 'classement', 'annee_arrivee', 'ynnovass_account']

class EntrepriseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Entreprise
        fields = ['id_entreprise', 'siret', 'nom', 'email', 'annee_arrivee', 'statut', 'acces_templates']

class SignupSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    mdp = serializers.CharField(required=True, write_only=True)
    nom = serializers.CharField(max_length=255, required=True)
    role = serializers.ChoiceField(choices=['admin', 'professionnel', 'entreprise'], required=True)
    annee_arrivee = serializers.DateField(required=False)
    photo = serializers.ImageField(required=False)
    siret = serializers.CharField(max_length=14, required=False)
    ynnovass_account = serializers.BooleanField(default=False, required=False)

    def validate(self, data):
        role = data.get('role')
        email = data.get('email')
        annee_arrivee = data.get('annee_arrivee')
        photo = data.get('photo')
        siret = data.get('siret')

        # Vérifier l'unicité de l'email dans les trois tables
        if Admin.objects.filter(email=email).exists() or \
           Professionnel.objects.filter(email=email).exists() or \
           Entreprise.objects.filter(email=email).exists():
            raise ValidationError("Cet email est déjà utilisé.")

        # Validations spécifiques par rôle
        if role == 'admin':
            if not annee_arrivee:
                raise ValidationError("L'année d'arrivée est obligatoire pour les administrateurs.")
            if not photo:
                raise ValidationError("La photo est obligatoire pour les administrateurs.")
        elif role == 'professionnel':
            if not annee_arrivee:
                raise ValidationError("L'année d'arrivée est obligatoire pour les professionnels.")
            if not photo:
                raise ValidationError("La photo est obligatoire pour les professionnels.")
        elif role == 'entreprise':
            if not siret:
                raise ValidationError("Le SIRET est obligatoire pour les entreprises.")
            if not siret.isdigit() or len(siret) != 14:
                raise ValidationError("Le SIRET doit contenir exactement 14 chiffres.")

        return data

    def create(self, validated_data):
        role = validated_data.pop('role')
        mdp = validated_data.pop('mdp')
        validated_data['mdp'] = make_password(mdp)  # Hacher le mot de passe

        if role == 'admin':
            return Admin.objects.create(**validated_data)
        elif role == 'professionnel':
            return Professionnel.objects.create(**validated_data)
        elif role == 'entreprise':
            return Entreprise.objects.create(**validated_data)
        


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    mdp = serializers.CharField()

    def validate(self, data):
        email = data.get('email')
        mdp = data.get('mdp')

        # Vérifier si l'utilisateur existe dans l'un des modèles
        user = None
        user_type = None
        user_id = None

        if Admin.objects.filter(email=email).exists():
            user = Admin.objects.get(email=email)
            user_type = 'admin'
            user_id = user.id_admin
        elif Professionnel.objects.filter(email=email).exists():
            user = Professionnel.objects.get(email=email)
            user_type = 'professionnel'
            user_id = user.id_pro
        elif Entreprise.objects.filter(email=email).exists():
            user = Entreprise.objects.get(email=email)
            user_type = 'entreprise'
            user_id = user.id_entreprise
        else:
            raise serializers.ValidationError("Cet email n'existe pas.")

        # Vérifier le mot de passe
        if not check_password(mdp, user.mdp):
            raise serializers.ValidationError("Mot de passe incorrect.")

        # Générer les tokens JWT manuellement
        refresh = RefreshToken()
        refresh['user_id'] = user_id
        refresh['user_type'] = user_type
        access = refresh.access_token

        data = {
            'refresh': str(refresh),
            'access': str(access),
            'user_type': user_type,
            'user_id': user_id,
            'nom': user.nom
        }
        return data