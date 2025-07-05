from django.db import models

class Professionnel(models.Model):
    id_pro = models.AutoField(primary_key=True)
    nom = models.CharField(max_length=255, blank=True, null=True)
    photo = models.CharField(max_length=255, blank=True, null=True)
    email = models.CharField(max_length=255, blank=True, null=True)
    statut = models.CharField(max_length=255, blank=True, null=True)
    score = models.FloatField()
    classement = models.IntegerField()
    annee_arrivee = models.DateField(blank=True, null=True)
    mdp = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'professionnel'
        
    def __str__(self):
        return self.nom