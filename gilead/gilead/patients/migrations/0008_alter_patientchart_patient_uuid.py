# Generated by Django 3.2.3 on 2021-05-26 21:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('patients', '0007_alter_patientchart_patientnote'),
    ]

    operations = [
        migrations.AlterField(
            model_name='patientchart',
            name='patient_uuid',
            field=models.CharField(default='', max_length=50),
        ),
    ]
