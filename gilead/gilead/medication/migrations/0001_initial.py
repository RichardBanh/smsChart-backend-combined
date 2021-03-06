# Generated by Django 3.2.3 on 2021-05-27 13:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('patients', '0003_patients_doctor_id'),
        ('doctors', '0002_auto_20210523_1321'),
    ]

    operations = [
        migrations.CreateModel(
            name='Medication',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('medication_1', models.CharField(max_length=50, null=True)),
                ('medication_2', models.CharField(max_length=50, null=True)),
                ('medication_3', models.CharField(max_length=50, null=True)),
                ('medication_4', models.CharField(max_length=50, null=True)),
                ('medication_5', models.CharField(max_length=50, null=True)),
                ('doctor_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='doctors.doctors')),
                ('patient_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='patients.patients')),
            ],
        ),
    ]
