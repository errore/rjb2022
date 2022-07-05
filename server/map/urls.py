from django.urls import path
from . import views

urlpatterns = [
    path('bit/', views.bit, name='bit'),
    path('road/', views.road),
    path('classify/', views.classify),
    path('divide/', views.divide),
    path('', views.map)
]