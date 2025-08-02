import { useState } from "react";
import TaskData from "./TaskData";

function TaskList({tasks}) {

  return (
    <div className="container my-5">
  <h2 className="text-center mb-4 fw-bold" style={{fontSize:"40px", color:"black"}}>Task List</h2>
  <div className="table-responsive shadow rounded">
    <table className="table table-bordered table-hover table-striped align-middle">
      <thead className="table-dark text-center">
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Due Date</th>
          <th>Priority</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={index}>
            <td className="text-center">{task.id}</td>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.dueDate}</td>
            <td>
              <span className={`badge 
                ${task.priority === 'High' ? 'bg-danger' : 
                  task.priority === 'Medium' ? 'bg-warning text-dark' : 
                  'bg-success'}`}>
                {task.priority}
              </span>
            </td>
            <td>
              <span className={`badge 
                ${task.status === 'Completed' ? 'bg-success' : 
                  task.status === 'In Progress' ? 'bg-info text-dark' : 
                  'bg-secondary'}`}>
                {task.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
}

export default TaskList;
