# Generated by Django 5.0.4 on 2024-04-21 14:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('App', '0007_alter_employeedetails_emp_id_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='employeedetails',
            name='photo',
            field=models.ImageField(default='default_photo.jpg', upload_to=''),
        ),
    ]
