from logging import NullHandler
from django.shortcuts import render

from stores.serializers import StoreSerializer
from .models import Stores
from accounts.models import Users

from django.shortcuts import render,redirect
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework import status
from django.http  import JsonResponse
import json
# Create your views here.
@api_view(['GET'])
def selected_stores(request) :
    selected_editor = request.GET.get("editor")
    selected_category = request.GET.get("category")
    editor_num = 0
    store_list = []

    for i in selected_editor :
        editor_num = editor_num + 1
        if i == '1':
            
            user = Users.objects.get(user_num = editor_num)
            category_num = 0 
            for j in selected_category :
                category_num = category_num + 1
                if j == '1':
                    
                    if category_num == 1 :
                        category = "한식"
                    elif category_num ==2 : 
                        category = "중식"
            
                    elif category_num ==3 : 
                        category = "일식"
                    elif category_num ==4 : 
                        category = "양식"

                    
                    stores = Stores.objects.filter(user = user,category = category)
                    obj_num = stores.count() 
                    
                    for x in range(obj_num) :
                        store = StoreSerializer(stores[x])
                        store_list.append(store.data)
            
    return Response({"stores" : store_list})