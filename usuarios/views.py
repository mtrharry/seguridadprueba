from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import redirect, render
import json
from django.contrib.auth import get_user_model
from django.shortcuts import render, redirect

# Vista para la página de inicio de sesión
def iniciosesion(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        # Aquí puedes implementar lógica para autenticar al usuario
        # Ejemplo básico:
        if username == "admin" and password == "admin123":
            return redirect('home')  # Redirige a la página principal

        # Si la autenticación falla, puedes mostrar un mensaje de error
        return render(request, 'core/index.html', {'error': 'Credenciales incorrectas'})

    return render(request, 'core/index.html')

# Vista para la página principal (home)
def home(request):
    return render(request, 'core/home.html')
