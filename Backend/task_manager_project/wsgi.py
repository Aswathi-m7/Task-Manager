"""
WSGI config for task_manager_project project.

Author: Aswathi
Project: Full Stack Task Manager CRUD Application
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'task_manager_project.settings')

application = get_wsgi_application()
