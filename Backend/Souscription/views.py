# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from authentication.models import Entreprise
from .models import Souscription
from .serializers import SouscriptionSerializer

class SubscriptionView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user_id = request.user.user_id
        user_type = request.user.user_type

        if user_type == 'entreprise':
            try:
                entreprise = Entreprise.objects.get(id_entreprise=user_id)
                souscriptions = Souscription.objects.filter(entreprise=entreprise)
                serializer = SouscriptionSerializer(souscriptions, many=True)
                return Response(serializer.data, status=status.HTTP_200_OK)
            except Entreprise.DoesNotExist:
                return Response({'error': 'Entreprise non trouvée'}, status=status.HTTP_404_NOT_FOUND)

        elif user_type == 'admin':
            souscriptions = Souscription.objects.all()
            serializer = SouscriptionSerializer(souscriptions, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response({'error': 'Accès réservé aux entreprises ou administrateurs'}, status=status.HTTP_403_FORBIDDEN)

    def post(self, request):
        user_id = request.user.user_id
        user_type = request.user.user_type

        if user_type != 'entreprise':
            return Response({'error': 'Seules les entreprises peuvent créer un abonnement'}, status=status.HTTP_403_FORBIDDEN)

        try:
            entreprise = Entreprise.objects.get(id_entreprise=user_id)
            data = request.data.copy()
            data['entreprise'] = entreprise.id_entreprise
            serializer = SouscriptionSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        except Entreprise.DoesNotExist:
            return Response({'error': 'Entreprise non trouvée'}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request):
        user_id = request.user.user_id
        user_type = request.user.user_type

        if user_type not in ['entreprise', 'admin']:
            return Response({'error': 'Accès réservé aux entreprises ou administrateurs'}, status=status.HTTP_403_FORBIDDEN)

        try:
            souscription_id = request.data.get('id')
            if not souscription_id:
                return Response({'error': 'ID de souscription requis'}, status=status.HTTP_400_BAD_REQUEST)

            souscription = Souscription.objects.get(id=souscription_id)

            if user_type == 'entreprise':
                entreprise = Entreprise.objects.get(id_entreprise=user_id)
                if souscription.entreprise != entreprise:
                    return Response({'error': 'Vous ne pouvez modifier que vos propres abonnements'}, status=status.HTTP_403_FORBIDDEN)

            serializer = SouscriptionSerializer(souscription, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        except Souscription.DoesNotExist:
            return Response({'error': 'Souscription non trouvée'}, status=status.HTTP_404_NOT_FOUND)
        except Entreprise.DoesNotExist:
            return Response({'error': 'Entreprise non trouvée'}, status=status.HTTP_404_NOT_FOUND)