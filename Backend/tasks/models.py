"""
Django models for Task Manager application.

Author: Aswathi
Project: Full Stack Task Manager CRUD Application
Description: Task model for managing tasks with status, priority, and due dates
"""
from django.db import models


class Task(models.Model):
    """Model representing a task in the task manager application."""
    
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('in_progress', 'In Progress'),
        ('completed', 'Completed'),
    ]
    
    PRIORITY_CHOICES = [
        ('low', 'Low'),
        ('medium', 'Medium'),
        ('high', 'High'),
    ]
    
    title = models.CharField(
        max_length=255,
        help_text="Title of the task"
    )
    description = models.TextField(
        blank=True,
        null=True,
        help_text="Detailed description of the task"
    )
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='pending',
        help_text="Current status of the task"
    )
    priority = models.CharField(
        max_length=20,
        choices=PRIORITY_CHOICES,
        default='medium',
        help_text="Priority level of the task"
    )
    due_date = models.DateField(
        blank=True,
        null=True,
        help_text="Due date for the task"
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
        help_text="Timestamp when task was created"
    )
    updated_at = models.DateTimeField(
        auto_now=True,
        help_text="Timestamp when task was last updated"
    )
    
    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Task'
        verbose_name_plural = 'Tasks'
        indexes = [
            models.Index(fields=['status', '-created_at']),
            models.Index(fields=['priority', '-created_at']),
        ]
    
    def __str__(self):
        return self.title
