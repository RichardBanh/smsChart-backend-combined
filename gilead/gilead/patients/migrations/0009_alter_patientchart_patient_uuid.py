# Generated by Django 3.2.3 on 2021-05-26 21:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('patients', '0008_alter_patientchart_patient_uuid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='patientchart',
            name='patient_uuid',
            field=models.CharField(max_length=50),
        ),
    ]
