from django.shortcuts import render

from information.serializers import InformationSerializer
from accounts.models import Users
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
# import json
# Create your views here.

@api_view(['GET'])
def get_editors(request):
    if request.method == "GET" :
        try:
            editors = Users.objects.filter(role=True)
            print(editors)
            editors_serializer = InformationSerializer(editors, many=True)
            # editors_data = editors_serializer.data
        except:
            return Response({"message":"Cannot find categories"})
        
        # print(categories)
        # obj_num = categories.count()
        
        # for x in range(obj_num):
        #     category = InformationSerializer(categories[x])
        #     categories_list.append(category.data)
            
        if editors is not None:
            return Response({"editors" : editors_serializer})
        else:
            return Response({"message": "editors does not exist"})