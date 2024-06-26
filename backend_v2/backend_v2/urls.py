"""
URL configuration for backend_v2 project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path, include
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions
from django.conf import settings
from django.conf.urls.static import static


schema_view = get_schema_view(
   openapi.Info(
      title="WEB3Bridge API",
      default_version='v2',
      description="WEB3Bridge backend app",
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)
urlpatterns = [
    path('admin/', admin.site.urls),
    path(f'api/{settings.API_VERSION}/cohort/', include('cohort.urls', namespace=settings.API_VERSION), name='cohort'),
    path(f'api/{settings.API_VERSION}/dapp/', include('dapp.urls', namespace=settings.API_VERSION), name='dapp'),
    path(f'api/{settings.API_VERSION}/operation/', include('operation.urls', namespace=settings.API_VERSION), name='operation'),
    path(f'api/{settings.API_VERSION}/event/', include('event.urls'), namespace=settings.API_VERSION, name='event'),
    path('swagger<format>/', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)