from rest_framework import serializers
from .models import Souscription
from authentication.models import Entreprise
from datetime import date
from dateutil.relativedelta import relativedelta

class SouscriptionSerializer(serializers.ModelSerializer):
    entreprise_nom = serializers.CharField(source='entreprise.nom', read_only=True)
    entreprise_email = serializers.CharField(source='entreprise.email', read_only=True)
    annees = serializers.IntegerField(write_only=True, required=False, default=1, min_value=0)
    mois = serializers.IntegerField(write_only=True, required=False, default=0, min_value=0)

    class Meta:
        model = Souscription
        fields = ['id', 'entreprise', 'entreprise_nom', 'entreprise_email', 'abonnement', 'debut', 'fin', 'acces_templates', 'annees', 'mois']

    def validate(self, data):
        if data.get('abonnement') == 'premium' and not data.get('acces_templates'):
            raise serializers.ValidationError("Un abonnement premium doit activer acces_templates.")
        if data.get('abonnement') == 'basic' and data.get('acces_templates'):
            raise serializers.ValidationError("Un abonnement basic ne peut pas activer acces_templates.")
        if data.get('annees', 0) == 0 and data.get('mois', 0) == 0:
            raise serializers.ValidationError("La durée doit inclure au moins 1 mois ou 1 an.")
        return data

    def create(self, validated_data):
        annees = validated_data.pop('annees', 1)
        mois = validated_data.pop('mois', 0)
        if 'fin' not in validated_data or validated_data['fin'] is None:
            validated_data['fin'] = date.today() + relativedelta(years=annees, months=mois)
        return super().create(validated_data)

    def update(self, validated_data):
        annees = validated_data.pop('annees', None)
        mois = validated_data.pop('mois', None)
        if annees is not None or mois is not None:
            instance = self.instance
            instance.fin = instance.debut + relativedelta(years=annees or 0, months=mois or 0)
        return super().update(instance, validated_data)