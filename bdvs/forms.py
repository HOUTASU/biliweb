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
import re


class AddUpForm(forms.Form):
    mid = forms.IntegerField(label='mid',
                             widget=forms.TextInput(attrs={'class': 'form-control add-new-up col-sm-3',
                                                           'placeholder': '请输入mid',

                                                           })
                             )

    def clean(self):
        # TODO:  检查mid是否重复

        return self.cleaned_data
