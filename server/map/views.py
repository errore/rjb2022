
import os
from django.http import Http404, HttpRequest, HttpResponse
from .nn_manager import ModelManager
from PIL import Image
import time

interval = 1
model = ModelManager()

def bit(request:HttpRequest):
    if request.method == 'POST':      
        stamp = time.time()
   
        Image.open(request.FILES['t1']).save(f"map/temp/{stamp}_t1.png")
        Image.open(request.FILES['t2']).save(f"map/temp/{stamp}_t2.png")

        res = model.bit_model(f"map/temp/{stamp}_t1.png", f"map/temp/{stamp}_t2.png")
        os.system(f"rm -rf ./map/temp/{stamp}*")
        response = HttpResponse(content_type='image/png')
        Image.fromarray(res).save(response, "PNG")
        
        return response
    
    if request.method == 'GET':
        return Http404()

def road(request:HttpRequest):
    if request.method == 'POST':
        stamp = time.time()

        temp_file = f"map/temp/{stamp}_road.png"
        Image.open(request.FILES['img']).save(temp_file)

        res = model.road_model(temp_file)
        os.system(f"rm -rf ./map/temp/{stamp}*")
        
        response = HttpResponse(content_type='image/png')
        Image.fromarray(res).save(response, "PNG")

        return response
    
    if request.method == 'GET':
        return Http404()

def classify(request:HttpRequest):
    if request.method == 'POST':
        stamp = time.time()

        temp_file = f"map/temp/{stamp}_cls.png"
        Image.open(request.FILES['img']).save(temp_file)

        res = model.classify_model(temp_file)
        os.system(f"rm -rf ./map/temp/{stamp}*")
        res = res.__str__().replace('\'', '\"')
        response = HttpResponse(res, content_type="text/json")

        return response
    
    if request.method == 'GET':
        return Http404()

def divide(request:HttpRequest):
    if request.method == 'POST':
        stamp = time.time()

        temp_file = f"map/temp/{stamp}_divide.png"
        Image.open(request.FILES['img']).save(temp_file)

        res = model.divide_model(temp_file)
        os.system(f"rm -rf ./map/temp/{stamp}*")
        
        response = HttpResponse(content_type='image/png')
        Image.fromarray(res).save(response, "PNG")

        return response
    
    if request.method == 'GET':
        return Http404()

def map(request:HttpRequest):
    with open('map/post_test.html') as f:
        html = f.readlines()
    html = ''.join(html)
    return HttpResponse(html)
