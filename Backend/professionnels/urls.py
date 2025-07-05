from django.urls import path
from .views import createProfessionnel

app_name = 'professionnel'

urlpatterns = [
    path('create_pro', createProfessionnel,name='create_pro'),
]
