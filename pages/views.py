from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')

def content(request):
    return render(request, 'content.html')

def introduction(request):
    return render(request,'introduction.html')

def contact(request):
    return render(request,'contact.html')

def team(request):
    return render(request,'team.html')

def whatwedo(request):
    return render(request,'whatwedo.html')

def message(request):
    return render(request,'message.html')

def strategy(request):
    return render(request,'strategy.html')

def services(request):
    return render(request,'services.html')

def project(request):
    return render(request,'project.html')

def whyus(request):
    return render(request,'whyus.html')

def vision(request):
    return render(request,'vision.html')

def case(request):
    return render(request,'casestudy.html')
