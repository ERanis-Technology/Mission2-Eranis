from django.db import models
from django.core.exceptions import ValidationError
from django.contrib.auth.hashers import make_password, check_password


class Admin(models.Model):
    id_admin = models.AutoField(primary_key=True)
    nom = models.CharField(max_length=255)
    mdp = models.CharField(max_length=255)
    email = models.EmailField(unique=True, null=False, blank=False)
    annee_arrivee = models.DateField()
    statut = models.BooleanField(default=True)
    photo = models.ImageField(upload_to='photos/admins/', blank=False, null=False)

    def save(self, *args, **kwargs):
        # Hacher le mot de passe avant sauvegarde si non haché
        if self.mdp and not self.mdp.startswith('pbkdf2_sha256$'):
            self.mdp = make_password(self.mdp)
        super().save(*args, **kwargs)

    def clean(self):
        # Valider le format de l'email (automatique via EmailField)
        # S'assurer que annee_arrivee est défini
        if not self.annee_arrivee:
            raise ValidationError("L'année d'arrivée est obligatoire pour les administrateurs.")
        # Vérifier que la photo est fournie
        if not self.photo:
            raise ValidationError("La photo est obligatoire pour les administrateurs.")
        


    # Ajout pour compatibilité JWT
    @property
    def is_active(self):
        return self.statut

    @property
    def is_authenticated(self):
        return True
    

    def __str__(self):
        return self.nom

    class Meta:
        db_table = 'admin'
        indexes = [models.Index(fields=['email'])]
        ordering = ['nom']

class Professionnel(models.Model):
    id_pro = models.AutoField(primary_key=True)
    nom = models.CharField(max_length=255, blank=False, null=False)
    mdp = models.CharField(max_length=255)
    email = models.EmailField(unique=True, null=False, blank=False)
    score = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    statut = models.BooleanField(default=True)
    photo = models.ImageField(upload_to='photos/professionnels/', blank=False, null=False)
    classement = models.PositiveIntegerField(null=True, blank=True)
    annee_arrivee = models.DateField(blank=False, null=False)
    ynnovass_account = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        # Désactiver le statut si score < 30
        if self.score is not None and self.score < 30:
            self.statut = False
        # Hacher le mot de passe avant sauvegarde si non haché
        if self.mdp and not self.mdp.startswith('pbkdf2_sha256$'):
            self.mdp = make_password(self.mdp)
        super().save(*args, **kwargs)

    def clean(self):
        # S'assurer que nom, annee_arrivee et photo sont définis
        if not self.nom:
            raise ValidationError("Le nom est obligatoire pour les professionnels.")
        if not self.annee_arrivee:
            raise ValidationError("L'année d'arrivée est obligatoire pour les professionnels.")
        if not self.photo:
            raise ValidationError("La photo est obligatoire pour les professionnels.")
        


    # Ajout pour compatibilité JWT
    @property
    def is_active(self):
        return self.statut

    @property
    def is_authenticated(self):
        return True
    

    def __str__(self):
        return self.nom

    class Meta:
        db_table = 'professionnel'
        indexes = [models.Index(fields=['email'])]
        ordering = ['nom']

class Entreprise(models.Model):
    id_entreprise = models.AutoField(primary_key=True)
    siret = models.CharField(max_length=14, blank=False, null=False)
    nom = models.CharField(max_length=255, blank=False, null=False)
    mdp = models.CharField(max_length=255)
    email = models.EmailField(unique=True, null=False, blank=False)
    annee_arrivee = models.DateField(blank=True, null=True)
    statut = models.BooleanField(default=True)
    acces_templates = models.BooleanField(default=False)
    ynnovass_account = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        # Hacher le mot de passe avant sauvegarde si non haché
        if self.mdp and not self.mdp.startswith('pbkdf2_sha256$'):
            self.mdp = make_password(self.mdp)
        super().save(*args, **kwargs)

    def clean(self):
        # Valider le format du SIRET (14 chiffres)
        if self.siret and (not self.siret.isdigit() or len(self.siret) != 14):
            raise ValidationError("Le SIRET doit contenir exactement 14 chiffres.")
        # S'assurer que nom et email sont définis
        if not self.nom:
            raise ValidationError("Le nom est obligatoire pour les entreprises.")
        if not self.email:
            raise ValidationError("L'email est obligatoire pour les entreprises.")
        


    # Ajout pour compatibilité JWT
    @property
    def is_active(self):
        return self.statut

    @property
    def is_authenticated(self):
        return True
    

    def __str__(self):
        return self.nom

    class Meta:
        db_table = 'entreprise'
        indexes = [models.Index(fields=['email'])]
        ordering = ['nom']