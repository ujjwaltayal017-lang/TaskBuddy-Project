import React from 'react'
import "../style.css"

function TaskList({tasks, updateTask, deleteTask}) {
  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    updateTask(updatedTasks[index], index);
  }
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index}>
          <div>
            <span>{task.task}</span>
            <small>{task.priority}, {task.category}</small>
            <span>Status: {task.completed ? 'Completed' : 'Incomplete'}</span>
          </div>

          <div>
            <button onClick={()=>toggleComplete(index)}>{task.completed ? "Undo" : "Complete"}</button>
            <button onClick={()=>deleteTask(index)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TaskList