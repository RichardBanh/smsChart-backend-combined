# Generated by Django 3.2.3 on 2021-05-27 21:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('doctors', '0005_auto_20210527_2134'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='doctorschedules',
            name='fri',
        ),
        migrations.RemoveField(
            model_name='doctorschedules',
            name='mon',
        ),
        migrations.RemoveField(
            model_name='doctorschedules',
            name='sat',
        ),
        migrations.RemoveField(
            model_name='doctorschedules',
            name='sun',
        ),
        migrations.RemoveField(
            model_name='doctorschedules',
            name='thu',
        ),
        migrations.RemoveField(
            model_name='doctorschedules',
            name='tue',
        ),
        migrations.RemoveField(
            model_name='doctorschedules',
            name='wed',
        ),
    ]
