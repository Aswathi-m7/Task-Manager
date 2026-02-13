# Quick Start Guide

**Aswathi's Full Stack CRUD Application**  
**Task Manager - Quick Setup**

## 5-Minute Setup

### Prerequisites
- Python 3.8+
- Node.js 14+
- MySQL Server 8.0+

### Step 1: Setup Database (MySQL)

```bash
# Open MySQL command line
mysql -u root -p

# Execute the database schema
SOURCE Database/schema.sql;
```

### Step 2: Setup Backend (Django)

```bash
cd Backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Setup environment
copy .env.example .env

# Run migrations
python manage.py migrate

# Start server
python manage.py runserver
```

Backend: http://localhost:8000

### Step 3: Setup Frontend (React)

```bash
# In new terminal, go to Frontend
cd Frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend: http://localhost:3000

### Step 4: Test the Application

1. Open http://localhost:3000
2. Create a task in the form
3. See it appear in the task list
4. Edit or delete the task
5. Check statistics update

Done! 🎉

## Troubleshooting

**Backend won't start:**
- Check MySQL is running
- Verify .env database credentials
- Run: `python manage.py migrate`

**Frontend won't connect to backend:**
- Ensure backend is running on port 8000
- Check browser console for CORS errors
- Verify API_BASE_URL in taskService.js

**Database errors:**
- Verify MySQL is running
- Check: `mysql -u root -p task_manager_db`
- Re-run: `python manage.py migrate`

## Next Steps

- Read main [README.md](README.md) for full documentation
- Check [Backend/README.md](Backend/README.md) for API details
- Check [Frontend/README.md](Frontend/README.md) for frontend details
- Check [Database/README.md](Database/README.md) for database info

## Commands Reference

### Backend
```bash
cd Backend
source venv/bin/activate      # Activate environment
python manage.py runserver     # Start server
python manage.py migrate       # Run migrations
python manage.py createsuperuser  # Create admin user
```

### Frontend
```bash
cd Frontend
npm run dev                    # Start dev server
npm run build                  # Build for production
npm run lint                   # Check code style
```

## Admin Panel

Create superuser and access Django admin:

```bash
python manage.py createsuperuser
# Navigate to http://localhost:8000/admin
```
