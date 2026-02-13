# Getting Started - Start Here! 👋

**Aswathi's Full Stack CRUD Application**  
**Welcome to the Full Stack Task Manager with React, Django, and MySQL!**

This document will guide you through the project and help you get started quickly.

---

## 🚀 I Want To Get Started RIGHT NOW

**3 Steps to Run the App:**

1. **Setup Database** (2 minutes)
   ```bash
   mysql -u root -p < Database/schema.sql
   ```

2. **Start Backend** (2 minutes)
   ```bash
   cd Backend
   python -m venv venv
   venv\Scripts\activate
   pip install -r requirements.txt
   copy .env.example .env
   python manage.py migrate
   python manage.py runserver
   # Runs on http://localhost:8000
   ```

3. **Start Frontend** (2 minutes)
   ```bash
   cd Frontend
   npm install
   npm run dev
   # Runs on http://localhost:3000
   ```

**That's it!** Open http://localhost:3000 in your browser.

For more details, see [QUICKSTART.md](QUICKSTART.md)

---

## 📚 Documentation Guide

### For Different Questions

| I Want To... | Read This |
|-------------|-----------|
| Get running in 5 minutes | [QUICKSTART.md](QUICKSTART.md) |
| Understand the full project | [README.md](README.md) |
| Learn about API endpoints | [API_DOCUMENTATION.md](API_DOCUMENTATION.md) |
| See file structure | [FILE_STRUCTURE.md](FILE_STRUCTURE.md) |
| Development information | [DEVELOPMENT.md](DEVELOPMENT.md) |
| Project overview | [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) |
| Backend documentation | [Backend/README.md](Backend/README.md) |
| Frontend documentation | [Frontend/README.md](Frontend/README.md) |
| Database documentation | [Database/README.md](Database/README.md) |

---

## 🎯 What This Project Does

**Task Manager Application** - A complete CRUD application where you can:

- ✅ Create tasks with title, description, priority, due date
- ✅ View all tasks in a beautiful grid layout
- ✅ Update task details and status
- ✅ Delete tasks you no longer need
- ✅ Filter tasks by status (Pending, In Progress, Completed)
- ✅ Filter tasks by priority (Low, Medium, High)
- ✅ See real-time statistics (total, pending, completed, etc.)
- ✅ Works on desktop, tablet, and mobile devices

---

## 🏗 What's Inside

### Three Main Components

1. **React Frontend** (`Frontend/`)
   - Beautiful responsive UI
   - Task creation and editing
   - Real-time filtering
   - Statistics dashboard

2. **Django Backend** (`Backend/`)
   - REST API with 9+ endpoints
   - Complete CRUD operations
   - Input validation
   - Statistical calculations

3. **MySQL Database** (`Database/`)
   - Optimized schema
   - Sample data included
   - Performance indexes

---

## ❓ Common Questions

### Q: Do I need to install anything?
**A:** Yes! You need:
- Python 3.8+ ([Download](https://www.python.org/))
- Node.js 14+ ([Download](https://nodejs.org/))
- MySQL 8.0+ ([Download](https://dev.mysql.com/))
- Git (optional, for version control)

### Q: What if I don't have MySQL installed?
**A:** 
1. Download and install from https://dev.mysql.com/downloads/mysql/
2. During installation, remember your root password
3. Start the MySQL service before running the app

### Q: Can I change the username/password?
**A:** Yes! Edit the `.env` file in the Backend folder with your MySQL credentials.

### Q: What ports does the app use?
**A:** 
- Frontend: Port 3000
- Backend: Port 8000
- Database: Port 3306 (MySQL default)

### Q: Can I deploy this to production?
**A:** Yes! See the Deployment section in [README.md](README.md).

### Q: Can I modify the code?
**A:** Absolutely! The code is well-organized and documented for easy customization.

### Q: Is there a test suite?
**A:** The structure for tests is included. See DEVELOPMENT.md for the testing checklist.

---

## 🐛 Troubleshooting Quick Links

### Common Issues

**Error: "Cannot connect to database"**
- Ensure MySQL is running
- Check credentials in `.env` file
- See Backend/README.md for details

**Error: "Frontend can't reach backend"**
- Verify backend is running on port 8000
- Check CORS settings
- See [README.md](README.md) Troubleshooting section

**Error: "Port already in use"**
- Change port in vite.config.js (Frontend)
- Change port with `python manage.py runserver 8001` (Backend)

**Error: "Module not found"**
- Run `npm install` in Frontend folder
- Run `pip install -r requirements.txt` in Backend
- Activate Python virtual environment

See full troubleshooting in [README.md](README.md#troubleshooting)

---

## 🎓 Learning Path

If you're new to full-stack development:

1. **Start here** → [QUICKSTART.md](QUICKSTART.md) - Get it running
2. **Understand** → [README.md](README.md) - Read full documentation
3. **Explore** → Open the code and read comments
4. **Learn** → Check the reference links in docs
5. **Customize** → Modify components to learn

---

## 📋 File Organization

```
Full_Stack_CRUD_Application/
├── START HERE → This file
├── QUICKSTART.md → 5-minute setup
├── README.md → Complete guide
├── API_DOCUMENTATION.md → API reference
├── PROJECT_SUMMARY.md → Project overview
├── FILE_STRUCTURE.md → Directory guide
├── Backend/ → Django REST API
├── Frontend/ → React app
└── Database/ → MySQL schema
```

---

## 🔥 Hot Tips

### Tip 1: Use Virtual Environment
Always activate the Python virtual environment:
```bash
# Windows:
Backend\venv\Scripts\activate
# Linux/Mac:
source Backend/venv/bin/activate
```

### Tip 2: Check Port Availability
Before starting servers, make sure ports are free:
- Port 3000 for Frontend
- Port 8000 for Backend
- Port 3306 for MySQL

### Tip 3: Create Admin User (Optional)
```bash
python manage.py createsuperuser
# Then visit http://localhost:8000/admin
```

### Tip 4: Sample Data
The database includes sample tasks. Delete them and create your own!

### Tip 5: Set DEBUG to False for Production
Edit `.env` and set `DEBUG=False` before deploying.

---

## 📞 Getting Help

### Documentation Available
- 8 comprehensive Markdown files
- Inline code comments
- API documentation with examples
- Troubleshooting guides
- Development notes

### Official Resources
- [Django Docs](https://docs.djangoproject.com/)
- [React Docs](https://react.dev/)
- [MySQL Docs](https://dev.mysql.com/doc/)

### Project Resources
- See [FILE_STRUCTURE.md](FILE_STRUCTURE.md) for file organization
- See [API_DOCUMENTATION.md](API_DOCUMENTATION.md) for API details
- See [README.md](README.md) for comprehensive guide

---

## ✅ Checklist - Before You Start

- [ ] Python 3.8+ installed
- [ ] Node.js 14+ installed
- [ ] MySQL 8.0+ installed and running
- [ ] Read this file
- [ ] Ready to run QUICKSTART.md

---

## 🚀 Let's Get Started!

**Next Step:** Open [QUICKSTART.md](QUICKSTART.md) for 5-minute setup

OR if you want more details first: Open [README.md](README.md) for complete documentation

---

## 💡 What You'll Learn

By exploring this project, you'll understand:

✅ Full-stack web application architecture  
✅ React component design patterns  
✅ Django REST framework best practices  
✅ Database schema optimization  
✅ API design and integration  
✅ Frontend-backend communication  
✅ Responsive web design  
✅ Modern development workflows  
✅ Project documentation  
✅ Deployment strategies  

---

## 🎉 You're All Set!

Everything you need is included. 

**Choose your path:**
- **Express Setup?** → [QUICKSTART.md](QUICKSTART.md)
- **Learn Everything?** → [README.md](README.md)
- **See the Code?** → Start with `Backend/tasks/models.py`
- **API Curious?** → [API_DOCUMENTATION.md](API_DOCUMENTATION.md)

---

**Welcome to your Full Stack CRUD Application! 🚀**

*Happy Coding!*

---

**File Legend:**
- 📄 This file = Getting started guide
- 🚀 QUICKSTART.md = 5-minute setup
- 📚 README.md = Complete documentation
- 🔌 API_DOCUMENTATION.md = API reference
- 📁 FILE_STRUCTURE.md = Directory guide
- 💻 DEVELOPMENT.md = Dev notes
- 📊 PROJECT_SUMMARY.md = Overview

---

Last Updated: February 7, 2026
Always refer to specific README files in each folder for component-specific information.
