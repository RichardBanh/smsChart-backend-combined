# Generated by Django 3.2.3 on 2021-05-27 02:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('patients', '0010_rename_patientchart_patientchartmodel'),
    ]

    operations = [
        migrations.AddField(
            model_name='patientchartmodel',
            name='date',
            field=models.CharField(default='', editable=False, max_length=32),
        ),
    ]
