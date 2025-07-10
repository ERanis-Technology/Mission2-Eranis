from django.contrib import admin
from .models import Souscription

@admin.register(Souscription)
class SouscriptionAdmin(admin.ModelAdmin):
    list_display = ('entreprise', 'abonnement', 'debut', 'fin', 'acces_templates')
    search_fields = ('entreprise', 'abonnement')
    list_filter = ('debut', 'fin', 'abonnement')