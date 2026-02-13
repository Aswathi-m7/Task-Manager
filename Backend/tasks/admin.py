"""
Django admin configuration for Task model.

Author: Aswathi
Project: Full Stack Task Manager CRUD Application
"""
from django.contrib import admin
from .models import Task


@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    """Admin interface for Task model."""
    
    list_display = ('title', 'status', 'priority', 'due_date', 'created_at')
    list_filter = ('status', 'priority', 'created_at')
    search_fields = ('title', 'description')
    readonly_fields = ('created_at', 'updated_at')
    
    fieldsets = (
        ('Task Information', {
            'fields': ('title', 'description')
        }),
        ('Task Status', {
            'fields': ('status', 'priority')
        }),
        ('Dates', {
            'fields': ('due_date', 'created_at', 'updated_at')
        }),
    )
    
    ordering = ('-created_at',)
