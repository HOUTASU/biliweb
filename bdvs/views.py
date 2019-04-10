from django.shortcuts import render, get_object_or_404
from .models import UP, VIDEO
from django.core.paginator import Paginator
from django.conf import settings
from .forms import AddUpForm, AddVideoForm
from kit.mongoConnect import MongoConnect
import json


# Create your views here.
def get_list_common_data(request, all_list):
    paginator = Paginator(all_list, settings.EACH_PAGE_UPS_NUMBER)
    page_num = request.GET.get('page', 1)  # 获取url的页面参数（GET请求）
    page_of_lists = paginator.get_page(page_num)
    current_page_num = page_of_lists.number  # 获取当前页码
    # 获取当前页码前后各2页的页码范围
    page_range = list(range(max(current_page_num - 2, 1), current_page_num)) + list(
        range(current_page_num, min(current_page_num + 2, paginator.num_pages) + 1))

    # 加上省略页码标记
    if page_range[0] - 1 >= 2:
        page_range.insert(0, '...')
    if paginator.num_pages - page_range[-1] >= 2:
        page_range.append('...')
    # 加上首页和尾页
    if page_range[0] != 1:
        page_range.insert(0, 1)
    if page_range[-1] != paginator.num_pages:
        page_range.append(paginator.num_pages)

    content = dict()
    content['lists'] = page_of_lists.object_list
    content['page_of_lists'] = page_of_lists
    content['page_range'] = page_range
    return content


def index(request):
    content = dict()
    return render(request, 'index.html', content)


def up_trace(request):
    add_form = AddUpForm()
    ups_all_list = UP.objects.all()
    content = get_list_common_data(request, ups_all_list)
    content['add_form'] = add_form
    return render(request, 'up_trace.html', content)


def video_trace(request):
    add_form = AddVideoForm()
    videos_all_list = VIDEO.objects.all()
    content = get_list_common_data(request, videos_all_list)
    content['add_form'] = add_form
    return render(request, 'video_trace.html', content)


def add_up(request):
    add_form = AddUpForm(request.POST)
    ups_all_list = UP.objects.all()
    content = get_list_common_data(request, ups_all_list)
    content['add_form'] = add_form
    return render(request, 'up_trace.html', content)


def add_video(request):
    add_form = AddVideoForm(request.POST)
    videos_all_list = VIDEO.objects.all()
    content = get_list_common_data(request, videos_all_list)
    content['add_form'] = add_form
    return render(request, 'video_trace.html', content)


def up_data(request, mid):
    content = dict()
    mongo = MongoConnect()
    db = mongo.get_connection()
    up = db['up_data'].find_one({'_id': mid})
    del up['_id']
    archive, fans, trace_time = [], [], []
    for once in up.values():
        archive.append(once['archive'])
        fans.append(once['fans'])
        trace_time.append(once['trace_time'])
    res = {'archive': archive, 'fans': fans, 'trace_time': trace_time}

    up_info = get_object_or_404(UP, mid=mid)

    content['up_info'] = up_info
    content['up_data'] = res
    return render(request, 'up_data.html', content)
