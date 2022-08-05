from genericpath import exists
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
    if request.method == "GET":
        try:
            editors = Users.objects.filter(role=True)
            serialized_editors = InformationSerializer(editors, many=True)

            return Response({"editors": serialized_editors.data})
        except:
            return Response({"message": "Cannot find categories"})

        # print(categories)
        # obj_num = categories.count()

        # for x in range(obj_num):
        #     category = InformationSerializer(categories[x])
        #     categories_list.append(category.data)

        # if editors is :

        # else:
        #     return Response({"message": "editors does not exist"})
