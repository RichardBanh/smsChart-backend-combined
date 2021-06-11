# Generated by Django 3.2.3 on 2021-05-27 21:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('doctors', '0003_doctorschedules'),
    ]

    operations = [
        migrations.AlterField(
            model_name='doctorschedules',
            name='date_end',
            field=models.CharField(max_length=32),
        ),
        migrations.AlterField(
            model_name='doctorschedules',
            name='date_submit',
            field=models.CharField(max_length=32),
        ),
        migrations.AlterField(
            model_name='doctorschedules',
            name='drid',
            field=models.CharField(max_length=32),
        ),
        migrations.AlterField(
            model_name='doctorschedules',
            name='patient_name',
            field=models.CharField(max_length=32),
        ),
        migrations.AlterField(
            model_name='doctorschedules',
            name='phone_number',
            field=models.CharField(max_length=20),
        ),
        migrations.AlterField(
            model_name='doctorschedules',
            name='reminder_freq',
            field=models.CharField(max_length=20),
        ),
    ]
