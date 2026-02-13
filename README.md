# Full Stack Task Manager CRUD Application

**Created by: Aswathi** 👨‍💻  
**Project Version:** 1.0.0  
**Last Updated:** February 7, 2026  

![Status](https://img.shields.io/badge/status-active-success.svg)
![Python](https://img.shields.io/badge/python-3.8+-blue.svg)
![Django](https://img.shields.io/badge/django-4.2-green.svg)
![React](https://img.shields.io/badge/react-18.2-61dafb.svg)
![MySQL](https://img.shields.io/badge/mysql-8.0-00758f.svg)

## 📋 Project Overview

A complete Full Stack CRUD (Create, Read, Update, Delete) Application demonstrating modern web development practices. This application provides a task management system where users can create, view, update, and delete tasks with various features like priority levels, status tracking, and task statistics.

### Technology Stack

**Frontend:**
- React 18.2 - UI Library
- Vite - Build tool and dev server
- Axios - HTTP client
- CSS3 - Styling with responsive design

**Backend:**
- Django 4.2 - Web framework
- Django REST Framework 3.14 - REST API
- Django CORS Headers - Cross-Origin Resource Sharing
- MySQL Connector Python - Database driver

**Database:**
- MySQL 8.0 - Relational database

## 🎯 Features

### Core CRUD Operations
- ✅ **Create** - Add new tasks with title, description, priority, and due date
- ✅ **Read** - View all tasks with filtering and search capabilities
- ✅ **Update** - Edit existing tasks and mark them complete
- ✅ **Delete** - Remove tasks from the system

### Additional Features
- 📊 Task Statistics Dashboard (total, completed, pending, in-progress)
- 🏷️ Priority Levels (Low, Medium, High)
- 📅 Status Tracking (Pending, In Progress, Completed)
- 📅 Due Dates for task management
- 🔍 Filter tasks by status and priority
- 📱 Responsive Design - Works on desktop and mobile
- 🎨 Modern UI with gradient design
- ⚡ Real-time updates and validations
- 📝 Form validation and error handling

## 📁 Project Structure

```
Full_Stack_CRUD_Application/
├── Backend/                          # Django Backend
│   ├── task_manager_project/        # Django project settings
│   │   ├── __init__.py
│   │   ├── settings.py              # Django configuration
│   │   ├── urls.py                  # Project URL routing
│   │   └── wsgi.py                  # WSGI configuration
│   ├── tasks/                        # Django app for tasks
│   │   ├── migrations/              # Database migrations
│   │   ├── __init__.py
│   │   ├── admin.py                 # Django admin configuration
│   │   ├── apps.py                  # App configuration
│   │   ├── models.py                # Task model
│   │   ├── serializers.py           # DRF serializers
│   │   ├── views.py                 # API views and viewsets
│   │   ├── urls.py                  # App URL routing
│   │   └── tests.py                 # Unit tests
│   ├── manage.py                    # Django management script
│   ├── requirements.txt             # Python dependencies
│   └── .env.example                 # Environment variables template
│
├── Frontend/                         # React Frontend
│   ├── src/
│   │   ├── components/              # React components
│   │   │   ├── TaskCard.jsx         # Individual task display
│   │   │   ├── TaskForm.jsx         # Task form component
│   │   │   ├── TaskList.jsx         # Task list container
│   │   │   └── StatisticsPanel.jsx  # Statistics display
│   │   ├── services/
│   │   │   └── taskService.js       # API service layer
│   │   ├── App.jsx                  # Main app component
│   │   ├── main.jsx                 # Entry point
│   │   └── index.css                # Global styles
│   ├── public/                      # Static assets
│   ├── index.html                   # HTML template
│   ├── package.json                 # Node dependencies
│   ├── vite.config.js               # Vite configuration
│   └── .eslintrc.json               # ESLint configuration
│
├── Database/                         # Database Setup
│   ├── schema.sql                   # Database schema
│   ├── README.md                    # Database instructions
│   └── .env.example                 # Database env template
│
├── .gitignore                        # Git ignore file
└── README.md                         # This file
```

## 🚀 Getting Started

### Prerequisites
- Python 3.8+ ([Download](https://www.python.org/downloads/))
- Node.js 14+ ([Download](https://nodejs.org/))
- MySQL Server 8.0+ ([Download](https://dev.mysql.com/downloads/mysql/))
- Git ([Download](https://git-scm.com/))

### Installation Steps

#### 1. Clone or Download the Repository

```bash
# If using git
git clone <repository-url>
cd Full_Stack_CRUD_Application

# Or navigate to the project directory if already downloaded
```

#### 2. Setup Database

```bash
# Open MySQL Command Line or MySQL Workbench
# Execute the database schema

# Option A: Using MySQL command line
mysql -u root -p < Database/schema.sql

# Option B: In MySQL Workbench
# 1. Open Database > Execute SQL Script
# 2. Select Database/schema.sql
# 3. Click Execute

# Verify the database creation
mysql -u root -p
> SHOW DATABASES;
> USE task_manager_db;
> SHOW TABLES;
```

#### 3. Setup Django Backend

```bash
cd Backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file (copy from .env.example)
# Update database credentials as needed
copy .env.example .env
# Edit .env with your MySQL credentials

# Run migrations
python manage.py migrate

# Create superuser for admin panel (optional)
python manage.py createsuperuser

# Start Django development server
python manage.py runserver
# Server runs on http://localhost:8000
```

#### 4. Setup React Frontend

```bash
# In a new terminal, navigate to Frontend directory
cd Frontend

# Install dependencies
npm install

# Create .env file if needed
# The default API URL is http://localhost:8000/api

# Start React development server
npm run dev
# Frontend runs on http://localhost:3000
```

#### 5. Access the Application

- **Frontend**: Open browser and navigate to `http://localhost:3000`
- **Backend API**: `http://localhost:8000/api`
- **Django Admin**: `http://localhost:8000/admin` (if superuser created)

## 🔌 API Endpoints

### Task Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks/` | List all tasks with optional filters |
| POST | `/api/tasks/` | Create a new task |
| GET | `/api/tasks/{id}/` | Retrieve a specific task |
| PUT | `/api/tasks/{id}/` | Update a complete task |
| PATCH | `/api/tasks/{id}/` | Partially update a task |
| DELETE | `/api/tasks/{id}/` | Delete a task |
| GET | `/api/tasks/statistics/` | Get task statistics |
| GET | `/api/tasks/by_status/` | Filter tasks by status |
| GET | `/api/tasks/by_priority/` | Filter tasks by priority |

### Query Parameters

```bash
# Filter by status
GET /api/tasks/?status=pending

# Filter by priority
GET /api/tasks/?priority=high

# Search in title and description
GET /api/tasks/?search=project

# Combine filters
GET /api/tasks/?status=completed&priority=high
```

### Example API Requests

```bash
# Create a task
curl -X POST http://localhost:8000/api/tasks/ \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Finish project",
    "description": "Complete the CRUD application",
    "status": "in_progress",
    "priority": "high",
    "due_date": "2026-02-14"
  }'

# Get all tasks
curl http://localhost:8000/api/tasks/

# Update a task
curl -X PUT http://localhost:8000/api/tasks/1/ \
  -H "Content-Type: application/json" \
  -d '{
    "status": "completed"
  }'

# Delete a task
curl -X DELETE http://localhost:8000/api/tasks/1/
```

## 📝 Task Model Schema

```python
Task:
  - id (Integer): Primary key, auto-increment
  - title (String, max 255): Task title (required)
  - description (Text): Detailed task description
  - status (String): pending, in_progress, completed
  - priority (String): low, medium, high
  - due_date (Date): Due date for the task
  - created_at (DateTime): Auto-generated creation timestamp
  - updated_at (DateTime): Auto-updated modification timestamp
```

## 🎨 Frontend Components

### TaskCard.jsx
Displays individual task with all details, action buttons for editing, deleting, and marking complete.

### TaskForm.jsx
Reusable form component for creating new tasks and editing existing ones with full validation.

### TaskList.jsx
Container component that displays collection of tasks with loading state and empty state handling.

### StatisticsPanel.jsx
Shows dashboard with key metrics: total tasks, completed, in progress, pending, and completion rate.

### taskService.js
API service layer that handles all HTTP communication with Django backend.

## 🧪 Testing the Application

### Test Creating a Task
1. Open http://localhost:3000
2. Fill in the task form with:
   - Title: "Test Task"
   - Description: "This is a test task"
   - Priority: "High"
   - Due Date: Select a date
3. Click "Create Task"
4. Verify task appears in the task list

### Test Updating a Task
1. Click "Edit" button on any task
2. Modify the task details
3. Click "Update Task"
4. Verify changes are reflected

### Test Deleting a Task
1. Click "Delete" button on any task
2. Confirm the deletion
3. Verify task is removed from list

### Test Filtering
1. Select a status from the "All Status" dropdown
2. Tasks should be filtered accordingly
3. Select a priority filter
4. Click "Clear Filters" to reset

## 🔒 Security Best Practices Implemented

- Environment variables for sensitive data (.env files)
- CORS configuration for frontend-backend communication
- SQL injection prevention through ORM
- CSRF protection in Django forms
- Input validation on both frontend and backend
- Error handling without exposing sensitive information
- Secure password handling for Django admin

## 📦 Dependencies Overview

### Backend (Backend/requirements.txt)
- `Django` - Web framework
- `djangorestframework` - REST API framework
- `django-cors-headers` - CORS support
- `mysql-connector-python` - MySQL database driver
- `python-dotenv` - Environment variable management
- `gunicorn` - Production WSGI server

### Frontend (Frontend/package.json)
- `react` - UI library
- `react-dom` - React DOM rendering
- `axios` - HTTP client
- `vite` - Build tool
- `eslint` - Code linting

## 🚢 Deployment Guide

### Deploy Backend to Heroku

```bash
# Install Heroku CLI
# Login to Heroku
heroku login

# Create Heroku app
heroku create your-app-name

# Add Procfile
echo "web: gunicorn task_manager_project.wsgi --log-file -" > Procfile

# Set environment variables
heroku config:set SECRET_KEY=your-secret-key
heroku config:set DEBUG=False

# Push to Heroku
git push heroku main
```

### Deploy Frontend to Netlify

```bash
# Build the frontend
cd Frontend
npm run build

# Deploy using Netlify CLI or GitHub integration
netlify deploy --prod --dir=dist
```

### Update API URL for Production
Update `Frontend/src/services/taskService.js`:
```javascript
const API_BASE_URL = 'https://your-heroku-app.herokuapp.com/api';
```

## 🐛 Troubleshooting

### Issue: Cannot connect to database
- Verify MySQL server is running
- Check database credentials in .env file
- Ensure database name is correct: `task_manager_db`

### Issue: Frontend cannot reach backend API
- Verify Django server is running on port 8000
- Check CORS settings in `Backend/task_manager_project/settings.py`
- Ensure frontend is trying to connect to correct backend URL

### Issue: CORS errors in browser console
- Update ALLOWED_HOSTS in settings.py with frontend URL
- Ensure CORS_ALLOWED_ORIGINS includes frontend URL

### Issue: 404 on API endpoints
- Verify URL routing in `Backend/task_manager_project/urls.py`
- Check task app URLs in `Backend/tasks/urls.py`

### Issue: Form validation errors
- Check browser console for detailed error messages
- Verify all required fields are filled
- Check input field constraints

## 📚 Useful Commands

### Django Commands
```bash
cd Backend

# Create migrations for model changes
python manage.py makemigrations

# Apply migrations to database
python manage.py migrate

# Create superuser for admin access
python manage.py createsuperuser

# Access Django shell
python manage.py shell

# Run tests
python manage.py test

# Collect static files for production
python manage.py collectstatic
```

### React Commands
```bash
cd Frontend

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix
```

## 📞 Support & Documentation

- [Django Documentation](https://docs.djangoproject.com/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [MySQL Documentation](https://dev.mysql.com/doc/)

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Full Stack CRUD Application - Task Manager  
Created: February 2026  
Last Updated: February 7, 2026

## 👨‍💻 Author

Full Stack CRUD Application - Task Manager  
**Created by:** Aswathi  
**Created:** February 2026  
**Last Updated:** February 7, 2026  

## 🎓 Learning Resources

### User Workflow
1. User opens frontend application
2. Dashboard displays task statistics
3. User can create new tasks with form
4. User views all tasks in a grid layout
5. User can filter tasks by status or priority
6. User can click Edit to modify task details
7. User can Mark Complete to update task status
8. User can Delete to remove task
9. Statistics update in real-time

### Technical Workflow
1. Frontend sends HTTP request to Django API
2. Django processes request in View/ViewSet
3. Request is validated and serialized
4. Database query is executed via ORM
5. Response is serialized to JSON
6. Response is sent back to frontend
7. Frontend updates state and re-renders UI
8. User sees updated information

## 📋 Future Enhancements

- User authentication and authorization
- Task categories/projects
- Task attachments
- Comments on tasks
- Task reminders and notifications
- Advanced search and filtering
- Task history/audit log
- Export tasks to CSV/PDF
- Dark mode theme
- Task templates
- Recurring tasks
- Team collaboration features
- Real-time updates with WebSockets

---

**Happy Task Managing! 🎉**

For questions or issues, please create an issue in the repository or contact the development team.
