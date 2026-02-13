"""
URL configuration for task_manager_project project.

Author: Aswathi
Project: Full Stack Task Manager CRUD Application
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('tasks.urls')),
]
