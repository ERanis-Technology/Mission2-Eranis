from django.db import models
from authentication.models import Entreprise

class Souscription(models.Model):
    entreprise = models.ForeignKey(Entreprise, on_delete=models.CASCADE, related_name='souscriptions')
    abonnement = models.CharField(max_length=50, choices=[('premium', 'Premium'), ('basic', 'Basic')], default='basic')
    debut = models.DateField(auto_now_add=True)
    fin = models.DateField(null=True, blank=True)
    acces_templates = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.entreprise.nom} - {self.abonnement}"