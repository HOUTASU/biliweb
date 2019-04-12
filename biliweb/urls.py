"""biliweb URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from bdvs import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('index.html', views.index, name='index'),
    path('up_trace.html', views.up_trace, name='up_trace'),
    path('video_trace.html', views.video_trace, name='video_trace'),
    path('add_up', views.add_up, name='add_up'),
    path('add_video', views.add_video, name='add_video'),
    path('chart_1', views.chart_1, name='chart_1'),
    path('up_data/<str:mid>', views.up_data, name='up_data'),
    path('video_data/<str:aid>', views.video_data, name='video_data')
]
