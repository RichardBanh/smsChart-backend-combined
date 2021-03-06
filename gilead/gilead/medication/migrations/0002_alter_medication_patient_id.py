# Generated by Django 3.2.3 on 2021-05-27 14:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('patients', '0003_patients_doctor_id'),
        ('medication', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='medication',
            name='patient_id',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='medication', to='patients.patients'),
        ),
    ]
