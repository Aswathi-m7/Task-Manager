/**
 * Main App Component
 * 
 * Author: Aswathi
 * Project: Full Stack Task Manager CRUD Application
 * Description: Main React component managing task state and CRUD operations
 */
import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import StatisticsPanel from './components/StatisticsPanel';
import { taskService } from './services/taskService';
import './index.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [stats, setStats] = useState({
    total_tasks: 0,
    completed_tasks: 0,
    in_progress_tasks: 0,
    pending_tasks: 0,
    completion_rate: 0,
  });
  const [editingTask, setEditingTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [filters, setFilters] = useState({
    status: '',
    priority: '',
  });

  // Fetch tasks on component mount and when filters change
  useEffect(() => {
    fetchTasks();
  }, [filters]);

  // Fetch statistics
  useEffect(() => {
    fetchStatistics();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await taskService.getAllTasks(filters);
      setTasks(response.results || response);
    } catch (error) {
      showMessage('error', 'Failed to load tasks. Make sure the backend is running.');
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchStatistics = async () => {
    try {
      const stats = await taskService.getStatistics();
      setStats(stats);
    } catch (error) {
      console.error('Error fetching statistics:', error);
    }
  };

  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage({ type: '', text: '' }), 3000);
  };

  const handleCreateTask = async (taskData) => {
    try {
      if (editingTask) {
        await taskService.updateTask(editingTask.id, taskData);
        showMessage('success', 'Task updated successfully!');
      } else {
        await taskService.createTask(taskData);
        showMessage('success', 'Task created successfully!');
      }
      setEditingTask(null);
      await fetchTasks();
      await fetchStatistics();
    } catch (error) {
      showMessage('error', 'Failed to save task. Please try again.');
      console.error('Error saving task:', error);
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    window.scrollTo(0, 0);
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  const handleDeleteTask = async (taskId) => {
    if (confirm('Are you sure you want to delete this task?')) {
      try {
        await taskService.deleteTask(taskId);
        showMessage('success', 'Task deleted successfully!');
        await fetchTasks();
        await fetchStatistics();
      } catch (error) {
        showMessage('error', 'Failed to delete task. Please try again.');
        console.error('Error deleting task:', error);
      }
    }
  };

  const handleStatusChange = async (taskId, newStatus) => {
    try {
      await taskService.partialUpdateTask(taskId, { status: newStatus });
      showMessage('success', 'Task status updated!');
      await fetchTasks();
      await fetchStatistics();
    } catch (error) {
      showMessage('error', 'Failed to update task status.');
      console.error('Error updating task status:', error);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <header>
        <h1>📋 Task Manager</h1>
        <p>Full Stack CRUD Application with React, Django & MySQL</p>
      </header>

      {message.text && (
        <div className={message.type === 'error' ? 'error-message' : 'success-message'}>
          {message.text}
        </div>
      )}

      <StatisticsPanel stats={stats} />

      <TaskForm
        onSubmit={handleCreateTask}
        editingTask={editingTask}
        onCancel={handleCancelEdit}
      />

      <div className="filters">
        <select 
          name="status"
          value={filters.status}
          onChange={handleFilterChange}
        >
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="in_progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <select 
          name="priority"
          value={filters.priority}
          onChange={handleFilterChange}
        >
          <option value="">All Priorities</option>
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>

        {(filters.status || filters.priority) && (
          <button 
            className="btn-secondary"
            onClick={() => setFilters({ status: '', priority: '' })}
          >
            Clear Filters
          </button>
        )}
      </div>

      <TaskList
        tasks={tasks}
        onEdit={handleEditTask}
        onDelete={handleDeleteTask}
        onStatusChange={handleStatusChange}
        loading={loading}
      />
    </div>
  );
}

export default App;
