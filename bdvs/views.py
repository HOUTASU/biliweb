from django.shortcuts import render


# Create your views here.
def index(request):
    content = dict()
    return render(request, 'index.html', content)


def up_trace(request):
    content = dict()
    return render(request, 'up_trace.html', content)


def video_trace(request):
    content = dict()
    return render(request, 'video_trace.html', content)
