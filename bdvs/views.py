from django.shortcuts import render


# Create your views here.
def index(request):
    content = dict()
    return render(request, 'index.html', content)
