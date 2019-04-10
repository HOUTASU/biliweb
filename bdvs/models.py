from django.db import models


# Create your models here.
class UP(models.Model):
    mid = models.IntegerField(unique=True, primary_key=True)
    pic = models.CharField(max_length=256)
    name = models.CharField(max_length=40)
    record_time = models.DateTimeField(auto_now_add=True)
    keep_on = models.BooleanField()
    mini_mode = models.BooleanField()
    verify = models.IntegerField(default=-1)
    verify_reason = models.CharField(max_length=256, default='')


class VIDEO(models.Model):
    aid = models.IntegerField(primary_key=True)
    pic = models.CharField(max_length=256)
    title = models.CharField(max_length=40)
    record_time = models.DateTimeField(auto_now_add=True)
    end_time = models.DateTimeField()
    tracing = models.BooleanField()
