# Generated by Django 2.1.7 on 2019-04-08 06:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bdvs', '0002_auto_20190222_1515'),
    ]

    operations = [
        migrations.AlterField(
            model_name='up',
            name='record_time',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
