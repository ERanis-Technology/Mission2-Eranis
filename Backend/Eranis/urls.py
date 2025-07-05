from django.contrib import admin
from django.urls import path,include
from ..professionnels import urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('pro',include(urls))
]
