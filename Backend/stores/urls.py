from django.contrib import admin
from django.urls import path,include
from stores import views
from stores import views

urlpatterns = [
    path('selected/',views.selected_stores, name = "selected"),
    path('random/',views.random_store, name = "random"),
    #path('imformation/',views.stores_imformation, name = "stores_imformation"),
    path('<int:store_id>/',views.stores_information, name="information"),
]
