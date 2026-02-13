/**
 * TaskCard Component - Displays a single task
 * 
 * Author: Aswathi
 * Project: Full Stack Task Manager CRUD Application
 */
import React from 'react';

const TaskCard = ({ task, onEdit, onDelete, onStatusChange }) => {
  const formatDate = (dateString) => {
    if (!dateString) return 'No due date';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed':
        return '#51cf66';
      case 'in_progress':
        return '#74c0fc';
      case 'pending':
      default:
        return '#ffd43b';
    }
  };

  return (
    <div className={`task-card ${task.status}`}>
      <div className="task-header">
        <div className="task-title">{task.title}</div>
      </div>

      <div className="task-badges">
        <span className="badge status">{task.status.replace('_', ' ')}</span>
        <span className={`badge priority-${task.priority}`}>
          {task.priority} priority
        </span>
      </div>

      {task.description && (
        <div className="task-description">{task.description}</div>
      )}

      <div className="task-meta">
        <div>Due: {formatDate(task.due_date)}</div>
        <div>Created: {formatDate(task.created_at)}</div>
      </div>

      <div className="task-actions">
        {task.status !== 'completed' && (
          <button 
            className="btn-secondary btn-small"
            onClick={() => onStatusChange(task.id, 'completed')}
          >
            Mark Complete
          </button>
        )}
        <button 
          className="btn-warning btn-small"
          onClick={() => onEdit(task)}
        >
          Edit
        </button>
        <button 
          className="btn-danger btn-small"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
