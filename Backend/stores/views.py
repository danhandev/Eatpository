import random
from stores.serializers import StoreSerializer,StoreRandomSerializer
from .models import Stores
from accounts.models import Users
from rest_framework.decorators import api_view
from rest_framework.response import Response
from stores.serializers import Stores_Information


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

                    try : 
                        stores = Stores.objects.filter(user = user,category = category)
                    except:
                        pass
                    obj_num = stores.count() 
                    
                    for x in range(obj_num) :
                        store = StoreSerializer(stores[x])
                        store_list.append(store.data)
            
    return Response({"stores" : store_list})


@api_view(['GET'])
def random_store(request):

    store_num = Stores.objects.count() +1
    random_num = random.randrange(1,store_num)
    store = Stores.objects.get(id = random_num)
    store = StoreRandomSerializer(store)
    return Response({"random_sotre" : store.data})

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