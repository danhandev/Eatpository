# Generated by Django 4.0.6 on 2022-08-16 07:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stores', '0005_remove_stores_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='images',
            name='image4',
        ),
        migrations.AddField(
            model_name='stores',
            name='comment',
            field=models.CharField(max_length=200, null=True),
        ),
    ]