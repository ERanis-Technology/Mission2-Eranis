from django.shortcuts import render,HttpResponse
from .models import Professionnel


def createProfessionnel(request,*args,**kwargs):
    if request.method == "POST":
        id_pro = request.POST.id_pro
        nom = request.POST.nom
        photo = request.FILES.photo
        email = request.POST.email
        statut = request.POST.status
        score = request.POST.score
        classement = request.POST.classement
        annee_arrivee = request.POST.annee_arrivee
        mdp = request.POST.mdp # Mot de passe
        
        professionnel = Professionnel(
                id_pro=id_pro,
                nom=nom,
                photo=photo,
                email=email,
                statut=statut,
                score=score,
                classement=classement,
                annee_arrivee=annee_arrivee,
                mdp=mdp
            )
        professionnel.save()
        
        if professionnel:
            return HttpResponse("Nouveau professionnel ajouté avec succès.")
        else:
            return HttpResponse((f"Erreur lors de l'enregistrement du professionnel."))
        

