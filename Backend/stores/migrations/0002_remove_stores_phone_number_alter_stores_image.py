# Generated by Django 4.0.6 on 2022-08-15 12:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stores', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='stores',
            name='phone_number',
        ),
        migrations.AlterField(
            model_name='stores',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]