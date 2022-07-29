from django.shortcuts import render,redirect
from .models import Users
from django.contrib.auth import authenticate,login,logout
from django.contrib import auth
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework import status
from django.http  import JsonResponse
import json
from datetime import datetime, timedelta
from Eatpository.settings import JWT_ALGORITHM,JWT_SECRET_KEY
# Create your views here.

@api_view(['POST'])
def signup(request):

    if request.method == "POST":
        data =  json.loads(request.body.decode('utf-8'))
        username = data.get("user_id")
        password = data.get("password")
        phone_number = data.get("phone_number")
        user = Users.objects.create(
            username= username, 
            password = password, 
            phone_number = phone_number,
            role = False)
        user.save()
        #login(request,user)
        token = Token.objects.get_or_create(user=user)
        return Response({"Token": token[0].key})
# def signup(request):
#     if request.method == "GET":
#         return render(request, 'signup.html')

#     if request.method == "POST":
#         # user_id = request.POST.get("user_id")
#         # password = request.POST.get("password")
#         # phone_number = request.POST.get("phone_number")
#         data =  json.loads(request.body.decode('utf-8'))
#         username = data.get("user_id")
#         password = data.get("password")
#         phone_number = data.get("phone_number")
#         user = Users.objects.create(
#             username= username, 
#             password = password, 
#             phone_number = phone_number,
#             role = False)
#         login(request,user)
#         payload = {"username" : username}
#         access_token = jwt.encode(payload, JWT_SECRET_KEY , algorithm = JWT_ALGORITHM).decode("utf-8")
#         return JsonResponse({"messages" : "LOGIN SUCCESS", "JWT" : access_token}, status = 201)

def home(request):
    return render(request, 'index.html')

@api_view(['GET'])
def user_login(request):
    if request.method == "GET":
        user_id = request.META.get("HTTP_USER_ID")
        password = request.META.get("HTTP_PASSWORD")
        if Users.objects.filter(username = user_id).exists():
            user = Users.objects.get(username =user_id)
            if user.password == password:
                #login(request,user)
                token = Token.objects.get_or_create(user=user)
                return Response({"Token": token[0].key})
            else :
                return Response({"message" : "not correct password"})       
        else :
            return Response({"messages" : "error"})
# def user_login(request):
#     if request.method == "GET":
#         return render(request, "login.html")
    
#     if request.method == "POST": 

#         username = request.POST.get('user_id')
#         password = request.POST.get('password')

#         if Users.objects.filter(username = username).exists():
#             user = Users.objects.get(username =username)
#             if user.password == password:

#                 login(request,user)
#                 payload = {"username" : username}
#                 access_token = jwt.encode(payload, JWT_SECRET_KEY , algorithm = JWT_ALGORITHM).decode("utf-8")
#                 return JsonResponse({"message" : "LOGIN SUCCESS" , "JWT" : access_token},status = 201)
#             else :
#                 return JsonResponse({"message" : "비밀번호 불일치"}, status = 404)       
#         else :
#             return JsonResponse({"message" : "회원 정보 없음"}, status = 404)  
            

                ##return redirect('home')
        # user = auth.authenticate(request, username = user_id, password = password)
        # if user is not None :
        #     login(request, user)
        #     return redirect('home')
        ## return render(request,'login.html',{"error" : "로그인 실패. 다시 시도해 주세요"})
        
def user_logout(request):
    logout(request)
    return redirect('home')
