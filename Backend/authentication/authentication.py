from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.exceptions import AuthenticationFailed
from authentication.models import Admin, Professionnel, Entreprise

class CustomJWTAuthentication(JWTAuthentication):
    def get_user(self, validated_token):
        try:
            user_id = validated_token['user_id']
            user_type = validated_token['user_type']
        except KeyError:
            raise AuthenticationFailed('Token invalide : user_id ou user_type manquant')

        if user_type == 'admin':
            try:
                user = Admin.objects.get(id_admin=user_id)
            except Admin.DoesNotExist:
                raise AuthenticationFailed('User not found', code='user_not_found')
        elif user_type == 'professionnel':
            try:
                user = Professionnel.objects.get(id_pro=user_id)
            except Professionnel.DoesNotExist:
                raise AuthenticationFailed('User not found', code='user_not_found')
        elif user_type == 'entreprise':
            try:
                user = Entreprise.objects.get(id_entreprise=user_id)
            except Entreprise.DoesNotExist:
                raise AuthenticationFailed('User not found', code='user_not_found')
        else:
            raise AuthenticationFailed('Type d’utilisateur non valide', code='user_not_found')

        class CustomUser:
            def __init__(self, user_id, user_type):
                self.user_id = user_id
                self.user_type = user_type
                self.is_authenticated = True

        return CustomUser(user_id, user_type)