from django.shortcuts import render
# Create your views here.

def add(request):
    return render(request, 'todo/home.html')