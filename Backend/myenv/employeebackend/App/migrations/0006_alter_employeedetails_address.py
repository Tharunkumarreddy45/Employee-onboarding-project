# Generated by Django 5.0.4 on 2024-04-21 12:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('App', '0005_employeedetails'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employeedetails',
            name='Address',
            field=models.TextField(max_length=150),
        ),
    ]
