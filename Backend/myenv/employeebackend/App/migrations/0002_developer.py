# Generated by Django 5.0.4 on 2024-04-20 17:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('App', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Developer',
            fields=[
                ('user', models.CharField(max_length=70, primary_key=True, serialize=False)),
                ('password', models.CharField(max_length=70)),
            ],
        ),
    ]
