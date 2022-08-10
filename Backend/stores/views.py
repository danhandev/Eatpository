from stores.serializers import Stores_Information
from .models import Stores
from rest_framework.decorators import api_view
from rest_framework.response import Response

import json
# Create your views here.

def selected_stores() :
    pass

#가게정보
@api_view(['GET'])
def stores_information(request,store_id):

    if request.method=="GET":
        try : 
            store = Stores.objects.get(id = store_id)
            store = Stores_Information(store)
            print(store)
            return Response({"store_information": store.data})
        except : 
            return Response({"message": "error"})
    