# Task Manager

I built this project to practice full stack development by creating a simple task tracking app from scratch.

## What It Does

- Create, view, edit, and delete tasks
- Set task status (`pending`, `in_progress`, `completed`)
- Set priority (`low`, `medium`, `high`)
- View basic task statistics

## Tech Stack

- Frontend: React + Vite
- Backend: Django + Django REST Framework
- Database: MySQL
- Deployment: Netlify (frontend), Render (backend), Aiven (MySQL)

## Live Links

- Frontend: https://task77manager.netlify.app
- Backend API: https://task-manager-1-tazf.onrender.com/api/tasks/

## Run Locally

### Backend

```bash
cd Backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend

```bash
cd Frontend
npm install
npm run dev
```

## Notes

- Environment variables are required for DB and API URLs.
- Render free tier may take 30-60 seconds to wake up after inactivity.
