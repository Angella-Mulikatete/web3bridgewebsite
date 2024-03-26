# Generated by Django 4.2 on 2024-03-26 13:51

import dapp.helpers.model.base
from django.db import migrations, models
import utils.helpers.models.base


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Dapp',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250, verbose_name='dapp name')),
                ('url', models.URLField(max_length=1000, verbose_name='dapp url')),
                ('description', models.TextField(verbose_name='description')),
                ('picture', models.ImageField(upload_to=dapp.helpers.model.base.dapp_image_location)),
            ],
            bases=(utils.helpers.models.base.BaseModelBaseMixin, models.Model),
        ),
    ]
