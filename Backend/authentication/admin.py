from django.contrib import admin
from .models import Admin, Professionnel, Entreprise

@admin.register(Admin)
class AdminAdmin(admin.ModelAdmin):
    list_display = ('id_admin', 'nom', 'email', 'annee_arrivee', 'statut', 'photo')
    search_fields = ('nom', 'email')
    list_filter = ('statut', 'annee_arrivee')

@admin.register(Professionnel)
class ProfessionnelAdmin(admin.ModelAdmin):
    list_display = ('id_pro', 'nom', 'email', 'score', 'statut', 'annee_arrivee', 'ynnovass_account', 'photo')
    search_fields = ('nom', 'email')
    list_filter = ('statut', 'ynnovass_account', 'annee_arrivee')

@admin.register(Entreprise)
class EntrepriseAdmin(admin.ModelAdmin):
    list_display = ('id_entreprise', 'siret', 'nom', 'email', 'annee_arrivee', 'statut', 'acces_templates')
    search_fields = ('siret', 'nom', 'email')
    list_filter = ('statut', 'acces_templates', 'annee_arrivee')