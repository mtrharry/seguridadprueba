from django.urls import path
from .views import iniciosesion, home

urlpatterns = [
    path('', iniciosesion, name='index'),  # Cambia el nombre de la ruta a 'index'
    path('home/', home, name='home'),      # Ruta para la página principal
]
