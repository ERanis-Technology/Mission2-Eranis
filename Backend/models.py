# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Abonnement(models.Model):
    id_abonnement = models.AutoField(primary_key=True)
    type = models.CharField(max_length=255, blank=True, null=True)
    prix = models.IntegerField(blank=True, null=True)
    description = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'abonnement'


class Admin(models.Model):
    id_admin = models.AutoField(primary_key=True)
    nom = models.CharField(max_length=255, blank=True, null=True)
    mdp = models.CharField(max_length=255, blank=True, null=True)
    email = models.CharField(max_length=255, blank=True, null=True)
    annee_arrivee = models.DateField(blank=True, null=True)
    statut = models.CharField(max_length=255, blank=True, null=True)
    photo = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'admin'


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class Blog(models.Model):
    id_blog = models.AutoField(primary_key=True)
    id_admin = models.ForeignKey(Admin, models.DO_NOTHING, db_column='id_admin', blank=True, null=True)
    titre = models.CharField(max_length=255, blank=True, null=True)
    contenu = models.CharField(max_length=1024, blank=True, null=True)
    date_publication = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'blog'


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class Entreprise(models.Model):
    id_entreprise = models.AutoField(primary_key=True)
    siret = models.CharField(max_length=255, blank=True, null=True)
    nom = models.CharField(max_length=255, blank=True, null=True)
    email = models.CharField(max_length=255, blank=True, null=True)
    annee_arrivee = models.DateField(blank=True, null=True)
    statut = models.CharField(max_length=255, blank=True, null=True)
    acces_templates = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'entreprise'


class Evaluation(models.Model):
    id_evaluation = models.AutoField(primary_key=True)
    id_pro = models.ForeignKey('Professionnel', models.DO_NOTHING, db_column='id_pro', blank=True, null=True)
    id_mission = models.ForeignKey('Mission', models.DO_NOTHING, db_column='id_mission', blank=True, null=True)
    type = models.CharField(max_length=255, blank=True, null=True)
    commentaire = models.CharField(max_length=1024, blank=True, null=True)
    date = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'evaluation'


class Mission(models.Model):
    id_mission = models.AutoField(primary_key=True)
    id_admin = models.ForeignKey(Admin, models.DO_NOTHING, db_column='id_admin', blank=True, null=True)
    titre = models.CharField(max_length=255, blank=True, null=True)
    description = models.CharField(max_length=255, blank=True, null=True)
    date_publication = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'mission'


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


class Rapport(models.Model):
    id_rapport = models.AutoField(primary_key=True)
    id_pro = models.ForeignKey(Professionnel, models.DO_NOTHING, db_column='id_pro', blank=True, null=True)
    date = models.DateField(blank=True, null=True)
    contenu = models.CharField(max_length=1024, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'rapport'


class Souscription(models.Model):
    id_souscription = models.AutoField(primary_key=True)
    id_entreprise = models.ForeignKey(Entreprise, models.DO_NOTHING, db_column='id_entreprise', blank=True, null=True)
    id_abonnement = models.ForeignKey(Abonnement, models.DO_NOTHING, db_column='id_abonnement', blank=True, null=True)
    statut = models.CharField(max_length=255, blank=True, null=True)
    date_debut = models.DateField(blank=True, null=True)
    date_fin = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'souscription'
