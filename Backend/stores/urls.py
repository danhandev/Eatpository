


from django.contrib import admin
from django.urls import path,include
from stores import views
# urlpatterns = [
#     path('/stores?editor={{selected-editor}}&category={{selected-category}}', views.selected_stores, name = "selected"),
# ]

urlpatterns = [
    path('selected/',views.selected_stores, name = "selected"),
]


