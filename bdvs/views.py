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
    return render(request, 'tracer/up_trace.html', content)


def video_trace(request):
    add_form = AddVideoForm()
    videos_all_list = VIDEO.objects.all()
    content = get_list_common_data(request, videos_all_list)
    content['add_form'] = add_form
    return render(request, 'tracer/video_trace.html', content)


def add_up(request):
    add_form = AddUpForm(request.POST)
    ups_all_list = UP.objects.all()
    content = get_list_common_data(request, ups_all_list)
    content['add_form'] = add_form
    return render(request, 'tracer/up_trace.html', content)


def add_video(request):
    add_form = AddVideoForm(request.POST)
    videos_all_list = VIDEO.objects.all()
    content = get_list_common_data(request, videos_all_list)
    content['add_form'] = add_form
    return render(request, 'tracer/video_trace.html', content)


def up_data(request, mid):
    content = dict()
    mongo = MongoConnect()
    db = mongo.get_connection()
    up = db['up_data'].find_one({'_id': mid})
    if up is not None:
        del up['_id']
        archive, fans, trace_time = [], [], []
        for once in up.values():
            archive.append(once['archive'])
            fans.append(once['fans'])
            trace_time.append(once['trace_time'])

        res = {'archive': archive, 'fans': fans, 'trace_time': trace_time}
        content['up_data'] = res
    up_info = get_object_or_404(UP, mid=mid)

    content['up_info'] = up_info

    return render(request, 'tracer/up_data.html', content)


def video_data(request, aid):
    content = dict()
    mongo = MongoConnect()
    db = mongo.get_connection()
    video = db['video_data'].find_one({'_id': aid})
    del video['_id']
    view, danmaku, reply, favorite = [], [], [], []
    coin, share, like, trace_time = [], [], [], []
    for once in video.values():
        view.append(once['view'])
        danmaku.append(once['danmaku'])
        reply.append(once['reply'])
        favorite.append(once['favorite'])
        coin.append(once['coin'])
        share.append(once['share'])
        like.append(once['like'])
        trace_time.append(once['trace_time'])
    trace_time = trace_time[::int(len(trace_time)/10)]
    res = {'view': view, 'danmaku': danmaku, 'reply': reply, 'favorite': favorite,
           'coin': coin, 'share': share, 'like': like, 'trace_time': trace_time}

    video_info = get_object_or_404(VIDEO, aid=aid)

    content['video_info'] = video_info
    content['video_data'] = res
    return render(request, 'tracer/video_data.html', content)


def chart_1(request):
    content = dict()
    with open('data/tid.json', encoding='utf-8') as f:
        data = json.load(f)
    content['data'] = data['data']
    return render(request, 'charts/chart_1.html', content)


def chart_2(request, year):
    content = dict()
    with open('data/wordCloud/201{}.json'.format(year)) as f:
        data = json.load(f)
    content['data'] = data['data']
    return render(request, 'charts/chart_2.html', content)


def chart_3(request):
    content = dict()
    return render(request, 'charts/chart_3.html', content)


def chart_4(request):
    content = dict()
    return render(request, 'charts/chart_4.html', content)
