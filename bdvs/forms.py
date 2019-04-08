# encoding: utf-8

"""
@author: sw
@contact: 2372980622qq.com
@software: PyCharm
@time: 2019/4/3 10:17
"""

from django import forms
from django.contrib import auth
from django.contrib.auth.models import User
from datetime import timedelta, datetime
import json
import requests
from .models import UP, VIDEO


class AddUpForm(forms.Form):
    mid = forms.IntegerField(label='mid',
                             widget=forms.TextInput(attrs={'class': 'form-control add-new-up col-sm-3',
                                                           'placeholder': '请输入mid',
                                                           }))

    def clean_mid(self):
        mid = self.cleaned_data['mid']

        if int(mid) > 0:
            if UP.objects.filter(mid=mid).exists():
                raise forms.ValidationError('Mid已存在')
            else:
                if self.insert_up(mid) is False:
                    raise forms.ValidationError('Mid查询失败')
                return mid
        else:
            raise forms.ValidationError('请填写正确的Mid')

    @staticmethod
    def insert_up(mid):
        r = requests.get('https://api.bilibili.com/x/web-interface/card?mid={}'.format(mid))
        data = json.loads(r.text)
        code = data['code']
        if code != 0:
            return False
        name = data['data']['card']['name']
        pic = data['data']['card']['face']
        img = requests.get(pic).content
        face_dir = str(mid) + '.' + pic.split('.')[-1]
        with open(f'static/img/faces/{face_dir}', 'wb') as f:
            f.write(img)
        up = {
            'pic': face_dir,
            'name': name,
            'mid': mid,
            'keep_on': True,
            'mini_mode': True
        }
        UP.objects.create(**up)
        return True


class AddVideoForm(forms.Form):
    aid = forms.IntegerField(label='mid',
                             widget=forms.TextInput(attrs={'class': 'form-control add-new-up col-sm-3',
                                                           'placeholder': '请输入aid',
                                                           }))

    def clean_aid(self):
        aid = self.cleaned_data['aid']

        if int(aid) > 0:
            if VIDEO.objects.filter(aid=aid).exists():
                raise forms.ValidationError('Aid已存在')
            else:
                if self.insert_video(aid) is False:
                    raise forms.ValidationError('Aid查询失败')
                return aid
        else:
            raise forms.ValidationError('请填写正确的Aid')

    @staticmethod
    def insert_video(aid):
        r = requests.get('https://api.bilibili.com/x/article/archives?ids={}'.format(aid))
        data = json.loads(r.text)
        code = data['code']
        if code != 0:
            return False
        title = data['data'][str(aid)]['title']
        pic = data['data'][str(aid)]['pic']
        img = requests.get(pic).content
        pic_dir = str(aid) + '.' + pic.split('.')[-1]
        with open(f'static/img/pic/{pic_dir}', 'wb') as f:
            f.write(img)
        video = {
            'title': title,
            'pic': pic_dir,
            'aid': aid,
            'end_time': datetime.today() + timedelta(days=7),
            'tracing': True
        }
        VIDEO.objects.create(**video)
        return True
