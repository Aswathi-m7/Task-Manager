# File Structure Reference

**Aswathi's Full Stack CRUD Application**  
**Complete Project Directory Tree and File Guide**

## Complete Project Directory Tree

```
Full_Stack_CRUD_Application/
│
├── README.md                          # Main project documentation
├── QUICKSTART.md                      # 5-minute setup guide
├── DEVELOPMENT.md                     # Development notes and checklist
├── API_DOCUMENTATION.md               # Complete API reference
├── SETUP_GIT.sh                       # Git initialization script
├── .gitignore                         # Git ignore rules
│
├── Backend/                           # Django REST Backend
│   ├── manage.py                      # Django CLI tool
│   ├── requirements.txt               # Python dependencies
│   ├── README.md                      # Backend documentation
│   ├── .env.example                   # Environment template
│   ├── .gitignore                     # Backend git ignore
│   │
│   ├── task_manager_project/          # Django project config
│   │   ├── __init__.py                # Python package
│   │   ├── settings.py                # Django settings
│   │   ├── urls.py                    # URL routing
│   │   └── wsgi.py                    # WSGI config
│   │
│   └── tasks/                         # Django task app
│       ├── migrations/                # Database migrations
│       │   └── __init__.py
│       ├── __init__.py                # Package init
│       ├── admin.py                   # Django admin config
│       ├── apps.py                    # App config
│       ├── models.py                  # Task database model
│       ├── serializers.py             # DRF serializers
│       ├── views.py                   # API views/ViewSets
│       ├── urls.py                    # App URL routing
│       └── tests.py                   # Unit tests
│
├── Frontend/                          # React Frontend
│   ├── package.json                   # Node dependencies
│   ├── vite.config.js                 # Vite configuration
│   ├── index.html                     # HTML entry point
│   ├── README.md                      # Frontend documentation
│   ├── .env.example                   # Environment template
│   ├── .eslintrc.json                 # ESLint config
│   ├── .gitignore                     # Frontend git ignore
│   │
│   └── src/                           # Source code
│       ├── main.jsx                   # React entry point
│       ├── App.jsx                    # Main App component
│       ├── index.css                  # Global styles
│       │
│       ├── components/                # React components
│       │   ├── TaskCard.jsx           # Task card display
│       │   ├── TaskForm.jsx           # Create/edit form
│       │   ├── TaskList.jsx           # Task list container
│       │   └── StatisticsPanel.jsx    # Statistics dashboard
│       │
│       └── services/                  # API communication
│           └── taskService.js         # Task API service
│
└── Database/                          # MySQL Database
    ├── schema.sql                     # Database schema
    ├── README.md                      # Database documentation
    └── .env.example                   # Database env template
```

## File Descriptions

### Root Files

| File | Purpose |
|------|---------|
| README.md | Complete project documentation, setup guide, deployment |
| QUICKSTART.md | Quick 5-minute setup guide |
| DEVELOPMENT.md | Development notes, testing checklist, future features |
| API_DOCUMENTATION.md | Complete API reference with examples |
| SETUP_GIT.sh | Git initialization and first commit |
| .gitignore | Git version control ignore patterns |

### Backend Files

| File | Purpose |
|------|---------|
| manage.py | Django management command tool |
| requirements.txt | Python package dependencies |
| settings.py | Django configuration settings |
| urls.py | URL routing configuration |
| wsgi.py | WSGI application entry point |
| models.py | Database models (Task model) |
| serializers.py | DRF serializers for JSON conversion |
| views.py | API views and ViewSets for CRUD |
| admin.py | Django admin interface configuration |

### Frontend Files

| File | Purpose |
|------|---------|
| package.json | Node.js dependencies and scripts |
| vite.config.js | Vite bundler configuration |
| index.html | HTML template |
| main.jsx | React application entry point |
| App.jsx | Main application component |
| index.css | Global CSS styles |
| TaskCard.jsx | Individual task display component |
| TaskForm.jsx | Task creation/editing form component |
| TaskList.jsx | Task list container component |
| StatisticsPanel.jsx | Statistics dashboard component |
| taskService.js | API communication service layer |

### Database Files

| File | Purpose |
|------|---------|
| schema.sql | MySQL database schema and sample data |
| README.md | Database setup instructions |

## Key Directories Explained

### Backend (Django Project)
- **task_manager_project/** - Contains Django project settings and configuration
- **tasks/** - Main Django app containing models, views, serializers for task management
- **migrations/** - Database migration files (auto-generated by Django)

### Frontend (React Application)
- **src/components/** - Reusable React UI components
- **src/services/** - API communication layer
- **src/** - Main React application files

### Database
- **Database/** - SQL scripts for database setup and initialization

## Configuration Files

### Backend Configuration
- `.env.example` - Environment variable template for backend
- `settings.py` - Django project configuration
- `requirements.txt` - Python package versions

### Frontend Configuration
- `.env.example` - Environment variable template for frontend
- `vite.config.js` - Development server and build configuration
- `.eslintrc.json` - Code quality and linting rules
- `package.json` - Node.js dependencies and scripts

## Environment Files

### Backend (.env)
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

### Frontend (.env)
```
VITE_API_BASE_URL=http://localhost:8000/api
VITE_DEBUG=false
```

### Database (.env)
```
DB_NAME=task_manager_db
DB_USER=root
DB_PASSWORD=
DB_HOST=localhost
DB_PORT=3306
```

## Important Notes

1. **Environment Files**: Never commit `.env` files to Git - use `.env.example` templates
2. **Node Modules**: Frontend `node_modules/` is gitignored - run `npm install` after cloning
3. **Python Virtual Environment**: Backend `venv/` is gitignored - create new one after cloning
4. **Database**: Run `Database/schema.sql` to initialize database
5. **Migrations**: Run `python manage.py migrate` to apply Django migrations

## File Sizes (Approximate)

- Backend setup files: ~5MB (with dependencies)
- Frontend setup files: ~200MB (with node_modules)
- Database schema: ~5KB
- Documentation: ~50KB

## Naming Conventions

### Python Files
- Snake_case for files: `task_manager_project`
- Classes: PascalCase: `class TaskViewSet`
- Functions: snake_case: `def get_tasks()`

### JavaScript/React Files
- Components: PascalCase: `TaskCard.jsx`
- Variables: camelCase: `taskList`
- Functions: camelCase: `fetchTasks()`
- CSS classes: kebab-case: `task-card`

## Related Documentation

- **Backend Details**: See [Backend/README.md](Backend/README.md)
- **Frontend Details**: See [Frontend/README.md](Frontend/README.md)
- **Database Details**: See [Database/README.md](Database/README.md)
- **API Reference**: See [API_DOCUMENTATION.md](API_DOCUMENTATION.md)
- **Setup Guide**: See [QUICKSTART.md](QUICKSTART.md)
- **Development**: See [DEVELOPMENT.md](DEVELOPMENT.md)

---

Last Updated: February 7, 2026
