from django.shortcuts import render, redirect
from .models import Users
from django.contrib.auth import login, logout
from django.contrib import auth
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework import status
from django.http import JsonResponse
import json
from datetime import datetime, timedelta
from Eatpository.settings import JWT_ALGORITHM, JWT_SECRET_KEY
import jwt
# Create your views here.


@api_view(['POST'])
def signup(request):

    if request.method == "POST":
        data = json.loads(request.body.decode('utf-8'))
        username = data.get("user_id")
        password = data.get("password")
        phone_number = data.get("phone_number")
        user = Users.objects.create_user(
            username=username,
            password=password,
            phone_number=phone_number,
            role=False)
        user.save()
        payload = {"username": username}
        access_token = jwt.encode(
            payload, JWT_SECRET_KEY, algorithm=JWT_ALGORITHM).decode("utf-8")
        # login(request,user)
        ##token = Token.objects.get_or_create(user=user)
        return Response({"Token": access_token})
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


# @api_view(['POST'])
# def user_login(request):
#     # authenticate 사용해서 auth의 User 인증
#     user = authenticate(username=request.data['user_id'], password=request.data['password'])
#     if user is None:
#         return Response(status=status.HTTP_401_UNAUTHORIZED) # 권한 없음
#     try:
#         # user를 통해 token get
#         token = Token.objects.get(user=user)
#     except:
#         # [FIX]: token이 없는 경우 (token 생성 이후 기간이 지나 token이 만료되어 사라진 경우) token 재생성
#         token = Token.objects.create(user=user)
#     return Response({"Token": token.key})
@api_view(['POST'])
def user_login(request):
    if request.method == "POST":
        data = json.loads(request.body.decode('utf-8'))
        username = data.get("user_id")  # user_id에 해당하는 값 받아오기
        password = data.get("password")  # password에 해당하는 값 받아오기
        try:
            # 사용자가 입력한 user_id 를 Users 모델 내 username filed로
            user = Users.objects.get(username=username)
        except:
            return Response({"message": "error"})
        if user.password == password:
            login(request, user)
            token = Token.objects.get_or_create(user=user)
            return Response({"Token": token[0].key})
        else:
            return Response({"message": "not correct password"})
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

            # return redirect('home')
        # user = auth.authenticate(request, username = user_id, password = password)
        # if user is not None :
        #     login(request, user)
        #     return redirect('home')
        # return render(request,'login.html',{"error" : "로그인 실패. 다시 시도해 주세요"})


def user_logout(request):
    logout(request)
    return redirect('home')


# 아이디 찾기!!
@api_view(['GET'])
def user_id(request):
    if request.method == "GET":
        try:
            phone_number = request.GET.get("phone_number")
            user_id = Users.objects.get(phone_number=phone_number).username
        except:
            return Response({"message": "error"})

        if user_id is not None:
            return Response({"user_id": user_id})
        else:
            return Response({"message": "user does not exist"})

# 비밀번호 찾기!!!!!!!!!!!!!!!!!!!!!!!!!!


@api_view(['GET'])
def user_password(request):
    if request.method == "GET":
        try:
            user_id = request.GET.get("user_id")
            phone_number = request.GET.get("phone_number")
            user = Users.objects.get(username=user_id)
        except:
            return Response({"message": "user does not exist : except occurs"})
        if user is not None:
            if user.phone_number == phone_number:
                return Response({"password": user.password})
            else:
                return Response({"message": "user does not exist : phone_num not correct"})
        else:
            return Response({"message": "user does not exist : user_id not correct"})

# 비밀번호 재설정!!!!


@api_view(['PATCH'])
def new_password(request):
    if request.method == "PATCH":
        data = json.loads(request.body.decode("utf-8"))
        username = data.get("user_id")
        password = data.get("password")
        re_password = data.get("re_password")
        try:
            user = Users.objects.get(username=username)
        except:
            return Response({"message": "user does not exist"})
        if user.password == password:
            user.password = re_password
            user.save()
            return Response({"message": "password changed"})
        else:
            return Response({"message": "user does not exist"})
