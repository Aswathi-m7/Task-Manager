/**
 * StatisticsPanel Component - Displays task statistics
 */
import React from 'react';

const StatisticsPanel = ({ stats }) => {
  return (
    <div className="stats">
      <div className="stat-card">
        <h3>Total Tasks</h3>
        <div className="value">{stats.total_tasks || 0}</div>
      </div>
      <div className="stat-card">
        <h3>Completed</h3>
        <div className="value">{stats.completed_tasks || 0}</div>
      </div>
      <div className="stat-card">
        <h3>In Progress</h3>
        <div className="value">{stats.in_progress_tasks || 0}</div>
      </div>
      <div className="stat-card">
        <h3>Pending</h3>
        <div className="value">{stats.pending_tasks || 0}</div>
      </div>
      <div className="stat-card">
        <h3>Completion Rate</h3>
        <div className="value">{stats.completion_rate || 0}%</div>
      </div>
    </div>
  );
};

export default StatisticsPanel;
