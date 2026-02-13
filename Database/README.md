-- Aswathi's Task Manager Database Setup Instructions

-- Option 1: Direct execution
-- 1. Open MySQL command line or MySQL Workbench
-- 2. Run: SOURCE schema.sql;
-- 3. Verify with: SHOW DATABASES; and USE task_manager_db; SHOW TABLES;

-- Option 2: Using command line
-- mysql -u root -p < schema.sql
-- mysql -u root -p task_manager_db < schema.sql

-- For the Django application to work:
-- 1. Make sure MySQL server is running
-- 2. Create .env file in Backend directory with:
--    DB_NAME=task_manager_db
--    DB_USER=root
--    DB_PASSWORD=your_password
--    DB_HOST=localhost
--    DB_PORT=3306

-- After creating the database, run Django migrations:
-- cd Backend
-- python manage.py migrate
