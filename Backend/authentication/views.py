from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import SignupSerializer, AdminSerializer, ProfessionnelSerializer, EntrepriseSerializer
from .models import Admin, Professionnel, Entreprise
from django.contrib.auth.hashers import make_password
   

class SignupView(APIView):
    def post(self, request):
        serializer = SignupSerializer(data=request.data)
        if serializer.is_valid():
            try:
                user = serializer.create(serializer.validated_data)
                if user.__class__.__name__ == 'Admin':
                    response_serializer = AdminSerializer(user)
                elif user.__class__.__name__ == 'Professionnel':
                    response_serializer = ProfessionnelSerializer(user)
                elif user.__class__.__name__ == 'Entreprise':
                    response_serializer = EntrepriseSerializer(user)
                return Response(response_serializer.data, status=status.HTTP_201_CREATED)
            except Exception as e:
                return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)