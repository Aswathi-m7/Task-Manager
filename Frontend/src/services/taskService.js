/**
 * API Service for communicating with Django backend
 * 
 * Author: Aswathi
 * Project: Full Stack Task Manager CRUD Application
 * Description: Service layer for all task-related API calls
 */
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Task API service
 */
export const taskService = {
  /**
   * Fetch all tasks with optional filters
   */
  getAllTasks: async (filters = {}) => {
    try {
      let params = '';
      if (filters.status) params += `status=${filters.status}&`;
      if (filters.priority) params += `priority=${filters.priority}&`;
      if (filters.search) params += `search=${filters.search}&`;
      
      const response = await api.get(`/tasks/?${params}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching tasks:', error);
      throw error;
    }
  },

  /**
   * Fetch a single task by ID
   */
  getTask: async (taskId) => {
    try {
      const response = await api.get(`/tasks/${taskId}/`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching task ${taskId}:`, error);
      throw error;
    }
  },

  /**
   * Create a new task
   */
  createTask: async (taskData) => {
    try {
      const response = await api.post('/tasks/', taskData);
      return response.data;
    } catch (error) {
      console.error('Error creating task:', error);
      throw error;
    }
  },

  /**
   * Update an existing task
   */
  updateTask: async (taskId, taskData) => {
    try {
      const response = await api.put(`/tasks/${taskId}/`, taskData);
      return response.data;
    } catch (error) {
      console.error(`Error updating task ${taskId}:`, error);
      throw error;
    }
  },

  /**
   * Partially update a task
   */
  partialUpdateTask: async (taskId, taskData) => {
    try {
      const response = await api.patch(`/tasks/${taskId}/`, taskData);
      return response.data;
    } catch (error) {
      console.error(`Error partially updating task ${taskId}:`, error);
      throw error;
    }
  },

  /**
   * Delete a task
   */
  deleteTask: async (taskId) => {
    try {
      await api.delete(`/tasks/${taskId}/`);
    } catch (error) {
      console.error(`Error deleting task ${taskId}:`, error);
      throw error;
    }
  },

  /**
   * Get task statistics
   */
  getStatistics: async () => {
    try {
      const response = await api.get('/tasks/statistics/');
      return response.data;
    } catch (error) {
      console.error('Error fetching statistics:', error);
      throw error;
    }
  },

  /**
   * Get tasks filtered by status
   */
  getTasksByStatus: async (status) => {
    try {
      const response = await api.get(`/tasks/by_status/?status=${status}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching tasks by status ${status}:`, error);
      throw error;
    }
  },

  /**
   * Get tasks filtered by priority
   */
  getTasksByPriority: async (priority) => {
    try {
      const response = await api.get(`/tasks/by_priority/?priority=${priority}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching tasks by priority ${priority}:`, error);
      throw error;
    }
  },
};
