"""
Views for Task API endpoints.

Author: Aswathi
Project: Full Stack Task Manager CRUD Application
Description: DRF ViewSet providing complete CRUD operations for tasks with filtering and statistics
"""
from rest_framework import viewsets, status, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Task
from .serializers import TaskSerializer


class TaskViewSet(viewsets.ModelViewSet):
    """
    ViewSet for Task model.
    Provides CRUD operations for tasks.
    
    Available endpoints:
    - GET /api/tasks/ - List all tasks
    - POST /api/tasks/ - Create a new task
    - GET /api/tasks/{id}/ - Retrieve a specific task
    - PUT /api/tasks/{id}/ - Update a task
    - PATCH /api/tasks/{id}/ - Partial update of a task
    - DELETE /api/tasks/{id}/ - Delete a task
    - GET /api/tasks/by_status/{status}/ - Filter tasks by status
    """
    
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title', 'description']
    ordering_fields = ['created_at', 'priority', 'due_date']
    ordering = ['-created_at']
    
    def get_queryset(self):
        """Filter queryset based on query parameters."""
        queryset = Task.objects.all()
        
        # Filter by status if provided
        status_param = self.request.query_params.get('status', None)
        if status_param:
            queryset = queryset.filter(status=status_param)
        
        # Filter by priority if provided
        priority_param = self.request.query_params.get('priority', None)
        if priority_param:
            queryset = queryset.filter(priority=priority_param)
        
        return queryset
    
    def create(self, request, *args, **kwargs):
        """Create a new task."""
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(
            serializer.data,
            status=status.HTTP_201_CREATED
        )
    
    def update(self, request, *args, **kwargs):
        """Update an existing task."""
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(
            instance,
            data=request.data,
            partial=partial
        )
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)
    
    def destroy(self, request, *args, **kwargs):
        """Delete a task."""
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(
            {"detail": "Task deleted successfully."},
            status=status.HTTP_204_NO_CONTENT
        )
    
    @action(detail=False, methods=['get'])
    def by_status(self, request):
        """Get tasks filtered by status."""
        status_param = request.query_params.get('status', None)
        if not status_param:
            return Response(
                {"error": "Status parameter is required."},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        tasks = Task.objects.filter(status=status_param)
        serializer = self.get_serializer(tasks, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def by_priority(self, request):
        """Get tasks filtered by priority."""
        priority_param = request.query_params.get('priority', None)
        if not priority_param:
            return Response(
                {"error": "Priority parameter is required."},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        tasks = Task.objects.filter(priority=priority_param)
        serializer = self.get_serializer(tasks, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def statistics(self, request):
        """Get task statistics."""
        total_tasks = Task.objects.count()
        completed_tasks = Task.objects.filter(status='completed').count()
        pending_tasks = Task.objects.filter(status='pending').count()
        in_progress_tasks = Task.objects.filter(status='in_progress').count()
        
        return Response({
            'total_tasks': total_tasks,
            'completed_tasks': completed_tasks,
            'pending_tasks': pending_tasks,
            'in_progress_tasks': in_progress_tasks,
            'completion_rate': round(
                (completed_tasks / total_tasks * 100) if total_tasks > 0 else 0, 2
            ),
        })
