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
    editor = request.GET.get("editor")
    category = request.GET.get("category")
    num = 0
    store_list = []
    for i in editor :
        num = num + 1
        
        if i =='1' :
            
            user = Users.objects.get(user_num = num)
            
            stores = Stores.objects.filter(user = user)
            print(stores)
            obj_num = stores.count() 
            
            for x in range(obj_num) :
                store = StoreSerializer(stores[x])
                store_list.append(store.data)
    num = 0 
    for i in category :
        num = num + 1
        if i == '1':
            
            if num == 1 :
                category = "한식"
            elif num ==2 : 
                category = "중식"
            
            elif num ==3 : 
                category = "일식"
            elif num ==4 : 
                category = "양식"
            # elif num ==5 : 
            #     category = "카페"
            # else : 
            #     category = "술집"          

            stores = Stores.objects.filter(category = category)
            obj_num = stores.count() 
            i = 0
            for x in range(obj_num) :
                store = StoreSerializer(stores[x])
                if store.data not in store_list :
                    store_list.append(store.data)
           
    return Response({"stores" : store_list})