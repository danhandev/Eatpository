"""
Django settings for Eatpository project.

Generated by 'django-admin startproject' using Django 4.0.6.

For more information on this file, see
https://docs.djangoproject.com/en/4.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.0/ref/settings/
"""
import os
import json
from django.core.exceptions import ImproperlyConfigured
from pathlib import Path
import datetime
from .secrets import MY_SECRET_KEY
import pymysql
pymysql.install_as_MySQLdb()

import pymysql
pymysql.install_as_MySQLdb()

import pymysql

try:
		import pymysql
		pymysql.install_as_MySQLdb()
except:
		pass

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent
ROOT_DIR = os.path.dirname(BASE_DIR)
# Eatpository/backend/eatpository/settings.py
# BASE_DIR=Eatpository/backend

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!

SECRET_KEY = MY_SECRET_KEY

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['*']


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # CORS
    'corsheaders',

    # DRF
    'rest_framework',
    'rest_framework.authtoken',

    # rest_auth
    'rest_auth',

    # apps
    'accounts',
    'stores',
    'information',
]

# Auth 유저 모델로 accounts의 User를 쓰겠다는 의미
AUTH_USER_MODEL = 'accounts.User'

# DRF auth settings - Token으로 User 찾아오기
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        # 'rest_framework.authentication.TokenAuthentication',
        'rest_framework_simplejwt.authentication.JWTAuthentication',

    ]
}

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': datetime.timedelta(seconds=10),
    'REFRESH_TOKEN_LIFETIME': datetime.timedelta(seconds=45),
    'SIGNING_KEY': SECRET_KEY,
    'ALGORITHM': 'HS256',
    'AUTH_HEADER_TYPES': ('JWT',),
}


MIDDLEWARE = [
    # CORS 세팅
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',

]

# CORS 세팅 (CORS_ORIGIN_WHITELIST, CORS_ALLOW_CREDENTIALS)
CORS_ORIGIN_WHITELIST = ['http://localhost:3000', 'http://127.0.0.1:3000']
CORS_ALLOW_CREDENTIALS = True

CORS_ALLOW_METHODS = (
    'DELETE',
    'GET',
    'PATCH',
    'POST',
    'PUT',
)

ROOT_URLCONF = 'Eatpository.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'Eatpository.wsgi.application'


# Database
# https://docs.djangoproject.com/en/4.0/ref/settings/#databases
'''
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'stores_stores',
        'USER': 'root',
        'PASSWORD': '1234', #유저랑 패스워드는 mysql workbench에서 사용하는 개인것
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
'''
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'eatdb',
        'USER': 'sujin',
        'PASSWORD': 'sujin123', #유저랑 패스워드는 mysql workbench에서 사용하는 개인것
        'HOST': 'eatpositoryinstance.chldu2nftn04.us-west-1.rds.amazonaws.com',
        'PORT': '3306',
    }
}

# Password validation
# https://docs.djangoproject.com/en/4.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.0/topics/i18n/

# 언어 시간 - 한국 세팅 (LANGUAGE_CODE, TIME_ZONE)
LANGUAGE_CODE = 'ko-kr'

TIME_ZONE = 'Asia/Seoul'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.0/howto/static-files/

# STATIC_URL = '/static/'
# STATICFILES_DIRS=[
#     os.path.join(BASE_DIR,'static','images')
# ]
# # STATIC_ROOT 세팅
# STATIC_ROOT = os.path.join(BASE_DIR, 'static') ## 모든 정적 파일들을 한 곳으로 모아둘 경로

STATIC_URL = '/static/'
STATIC_DIR = os.path.join(BASE_DIR, 'static')
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static/', 'selenium_images'),
    # os.path.join(BASE_DIR, 'static', 'images'),
]
# Default primary key field type
# https://docs.djangoproject.com/en/4.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


AUTH_USER_MODEL = "accounts.Users"

ROOT_URLCONF = 'Eatpository.urls'
