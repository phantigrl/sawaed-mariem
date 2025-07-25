from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('content/', views.content, name='content'),
    path('intro/', views.introduction, name='introduction'),
    path('team/', views.team, name='team'),
    path('services/', views.services, name='services'),
    path('whyus/', views.whyus, name='whyus'),
    path('whatwedo/', views.whatwedo, name='whatwedo'),
    path('project/', views.project, name='project'),
    path('casestudy/', views.case, name='case'),
    path('message/', views.message, name='message'),
    path('vision/', views.vision, name='vision'),
    path('strategy/', views.strategy, name='strategy'),
    path('contact/', views.contact, name='contact'),
]
