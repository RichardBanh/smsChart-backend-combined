# Generated by Django 3.2.3 on 2021-05-27 20:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hiv_stats', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='hivstats',
            name='patient_uuid',
            field=models.CharField(default='hello', max_length=50, unique=True),
            preserve_default=False,
        ),
    ]
