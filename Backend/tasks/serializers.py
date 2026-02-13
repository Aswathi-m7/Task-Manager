"""
Serializers for Task model - converts model instances to JSON and vice versa.

Author: Aswathi
Project: Full Stack Task Manager CRUD Application
Description: DRF serializers with validation for Task CRUD operations
"""
from rest_framework import serializers
from .models import Task


class TaskSerializer(serializers.ModelSerializer):
    """Serializer for Task model."""
    
    class Meta:
        model = Task
        fields = [
            'id',
            'title',
            'description',
            'status',
            'priority',
            'due_date',
            'created_at',
            'updated_at',
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']
    
    def validate_title(self, value):
        """Validate that title is not empty."""
        if not value or not value.strip():
            raise serializers.ValidationError("Title cannot be empty.")
        return value
    
    def validate(self, data):
        """Validate that status and priority are valid choices."""
        if 'status' in data and data['status'] not in dict(Task.STATUS_CHOICES):
            raise serializers.ValidationError(
                {"status": "Invalid status choice."}
            )
        if 'priority' in data and data['priority'] not in dict(Task.PRIORITY_CHOICES):
            raise serializers.ValidationError(
                {"priority": "Invalid priority choice."}
            )
        return data
