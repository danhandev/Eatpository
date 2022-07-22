from django.shortcuts import render,redirect
from .models import Users
from django.contrib.auth import authenticate,login,logout
from django.contrib import auth
# Create your views here.

def signup(request):
    if request.method == "GET":
        return render(request, 'signup.html')

    if request.method == "POST":
        user_id = request.POST.get("username")
        password = request.POST.get("password")
        phone_number = request.POST.get("phone_number")
        user = Users.objects.create(
            username= user_id, 
            password = password, 
            phone_number = phone_number,
            role = False)
        auth.login(request,user)
        return render(request,'index.html')

def home(request):
    return render(request, 'index.html')

# def login(request):
#     if request.method == "GET":
#         return render(request, "login.html")
    
#     if request.method == "POST": 
#         username = request.POST.get("username")
#         password = request.POST.get
#         user = authenticate(username = )