# Backend - README

## Aswathi's Django Task Manager Backend

This is the Django REST Framework backend for Aswathi's Full Stack Task Manager CRUD application.

### Quick Start

```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file from template
copy .env.example .env
# Edit .env with your MySQL credentials

# Apply migrations
python manage.py migrate

# Create superuser (optional)
python manage.py createsuperuser

# Start development server
python manage.py runserver
```

Server runs on `http://localhost:8000`

### Project Structure

```
Backend/
├── task_manager_project/        # Django project
│   ├── __init__.py
│   ├── settings.py              # Project configuration
│   ├── urls.py                  # URL routing
│   └── wsgi.py                  # WSGI configuration
├── tasks/                        # Task application
│   ├── migrations/              # Database migrations
│   ├── admin.py                 # Django admin interface
│   ├── apps.py                  # App configuration
│   ├── models.py                # Task database model
│   ├── serializers.py           # DRF serializers
│   ├── views.py                 # API views
│   ├── urls.py                  # App URL routing
│   └── tests.py                 # Unit tests
├── manage.py                    # Django CLI
├── requirements.txt             # Python dependencies
└── .env.example                 # Environment template
```

### API Endpoints

**List/Create Tasks**
- `GET /api/tasks/` - List all tasks
- `POST /api/tasks/` - Create new task

**Task Details**
- `GET /api/tasks/{id}/` - Get task details
- `PUT /api/tasks/{id}/` - Update task
- `PATCH /api/tasks/{id}/` - Partial update
- `DELETE /api/tasks/{id}/` - Delete task

**Filters & Statistics**
- `GET /api/tasks/statistics/` - Get task statistics
- `GET /api/tasks/by_status/?status=pending` - Filter by status
- `GET /api/tasks/by_priority/?priority=high` - Filter by priority

### Environment Variables

Create a `.env` file with:

```
SECRET_KEY=your-secret-key
DEBUG=True
DB_NAME=task_manager_db
DB_USER=root
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=3306
ALLOWED_HOSTS=localhost,127.0.0.1
```

### Database Setup

```bash
# Create database using MySQL
mysql -u root -p < ../Database/schema.sql

# Or use Django migrations
python manage.py migrate
```

### Available Commands

- `python manage.py runserver` - Start dev server
- `python manage.py migrate` - Apply database migrations
- `python manage.py createsuperuser` - Create admin user
- `python manage.py test` - Run tests
- `python manage.py shell` - Django shell

### Admin Interface

Access Django admin at `http://localhost:8000/admin` after creating a superuser.

### Dependencies

- **Django** - Web framework
- **djangorestframework** - REST API
- **django-cors-headers** - CORS support
- **mysql-connector-python** - MySQL driver
- **python-dotenv** - Environment variables

### Deployment

For production deployment:

1. Set `DEBUG=False` in .env
2. Update `ALLOWED_HOSTS` with your domain
3. Use production-grade server (Gunicorn/uWSGI)
4. Configure proper database backups
5. Set up SSL/HTTPS
