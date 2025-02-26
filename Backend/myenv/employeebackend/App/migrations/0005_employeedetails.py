# Generated by Django 5.0.4 on 2024-04-21 12:38

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('App', '0004_rename_user_developer_employee_id_and_more'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Employeedetails',
            fields=[
                ('emp_id', models.CharField(max_length=10, primary_key=True, serialize=False)),
                ('Firstname', models.CharField(max_length=50)),
                ('Lastname', models.CharField(blank=True, max_length=50)),
                ('dateofbirth', models.DateField()),
                ('gender', models.CharField(max_length=10)),
                ('Address', models.TimeField(max_length=150)),
                ('phonenumber', models.CharField(max_length=11)),
                ('email', models.EmailField(max_length=50)),
                ('jobtitle', models.CharField(max_length=15)),
                ('department', models.CharField(blank=True, max_length=50)),
                ('startdate', models.DateField()),
                ('employement_type', models.CharField(blank=True, max_length=50)),
                ('degree_certificate', models.ImageField(upload_to='')),
                ('ssc_certificate', models.ImageField(upload_to='')),
                ('govt_id', models.ImageField(upload_to='')),
                ('resume', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
