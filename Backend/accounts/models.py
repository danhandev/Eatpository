
from django.db import models

# Create your models here.
from django.contrib.auth.models import User, AbstractUser

# 사용자
class Users(AbstractUser):
    phone_number = models.CharField(max_length=12, null = False, unique= True)
    role = models.BooleanField(null = True) # 역할
    user_num = models.IntegerField(blank=True,null=True) # 인덱스 순서
    nickname = models.CharField(max_length=30, null=True) # 닉네임
    emoji = models.IntegerField(null=True) # 이모지
    user_information = models.CharField(max_length=100,null=True) # 한줄 소개
    
