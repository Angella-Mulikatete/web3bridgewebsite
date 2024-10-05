# Generated by Django 4.2 on 2024-05-06 20:16

from django.db import migrations, models
import operation.helpers.model.base
import utils.helpers.models.base


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Mentor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=1000, verbose_name='full name')),
                ('repo', models.URLField(max_length=1000, verbose_name='repo url')),
                ('extra_info', models.TextField(blank=True, null=True, verbose_name='extra_info')),
                ('picture', models.ImageField(upload_to=operation.helpers.model.base.mentor_image_location)),
            ],
            bases=(utils.helpers.models.base.BaseModelBaseMixin, utils.helpers.models.base.CloudinaryDeleteMixin, models.Model),
        ),
        migrations.CreateModel(
            name='Partner',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=1000, verbose_name='full name')),
                ('url', models.URLField(blank=True, max_length=1000, null=True, verbose_name='repo url')),
                ('extra_info', models.TextField(blank=True, null=True, verbose_name='extra_info')),
                ('picture', models.ImageField(blank=True, null=True, upload_to=operation.helpers.model.base.partner_image_location)),
            ],
            bases=(utils.helpers.models.base.BaseModelBaseMixin, utils.helpers.models.base.CloudinaryDeleteMixin, models.Model),
        ),
        migrations.CreateModel(
            name='Team',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=1000, verbose_name='full name')),
                ('brief', models.TextField(verbose_name='brief')),
                ('extra_info', models.TextField(blank=True, null=True, verbose_name='extra_info')),
                ('picture', models.ImageField(upload_to=operation.helpers.model.base.team_image_location)),
            ],
            bases=(utils.helpers.models.base.BaseModelBaseMixin, utils.helpers.models.base.CloudinaryDeleteMixin, models.Model),
        ),
    ]
