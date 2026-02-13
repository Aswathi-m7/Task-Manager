-- Task Manager Database Schema
-- This script creates the MySQL database and tables for the Task Manager application

-- Create Database
CREATE DATABASE IF NOT EXISTS task_manager_db;
USE task_manager_db;

-- Create Tasks Table
CREATE TABLE IF NOT EXISTS tasks_task (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description LONGTEXT,
    status VARCHAR(20) NOT NULL DEFAULT 'pending',
    priority VARCHAR(20) NOT NULL DEFAULT 'medium',
    due_date DATE NULL,
    created_at DATETIME AUTO_ON_DEFAULTS CURRENT_TIMESTAMP,
    updated_at DATETIME AUTO_ON_UPDATE CURRENT_TIMESTAMP,
    INDEX idx_status_created (status, created_at),
    INDEX idx_priority_created (priority, created_at),
    CONSTRAINT check_status CHECK (status IN ('pending', 'in_progress', 'completed')),
    CONSTRAINT check_priority CHECK (priority IN ('low', 'medium', 'high'))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert sample tasks (optional)
INSERT INTO tasks_task (title, description, status, priority, due_date) VALUES
('Complete Project Documentation', 'Write comprehensive documentation for the project', 'in_progress', 'high', '2026-02-14'),
('Setup React Frontend', 'Initialize React project and configure Vite', 'completed', 'high', '2026-02-07'),
('Configure Django Backend', 'Set up Django project with REST API', 'completed', 'high', '2026-02-07'),
('Test API Endpoints', 'Write tests for all API endpoints', 'pending', 'medium', '2026-02-15'),
('Deploy Application', 'Deploy frontend and backend to production', 'pending', 'high', '2026-02-21');
