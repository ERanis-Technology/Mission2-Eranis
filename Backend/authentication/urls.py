from django.urls import path
from .views import SignupView

urlpatterns = [
    # path('api/login/', LoginView.as_view(), name='login'),
    path('api/signup/', SignupView.as_view(), name='signup'),
    # Ajoute cet endpoint pour /api/login lorsque tu l'implémenteras
]