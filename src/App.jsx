import React from 'react'
import { useState, useEffect } from 'react'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import ProgressTracker from './components/ProgressTracker'
import './style.css'

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const updateTask = (updatedTask, index) => {
    // setTasks(tasks.map(task => (task === updatedTask ? updatedTask : task)));
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Delete All Tasks
  const deleteAllTasks = () => {
    if (tasks.length === 0) {
      alert('No tasks to delete!');
      return;
    }

    const confirmDelete = window.confirm(
      'Are you sure you want to delete all tasks?'
    );

    if (confirmDelete) {
      setTasks([]);
    }
  };
  
  return (
    <div>
      <header>
        <h1>TaskBuddy</h1>
        <p>Your friendly Task Manager</p>
      </header>
      <TaskForm addTask={addTask} />

      <div className="task-header">
        <h2>My Tasks</h2>
        <button
          className="delete-all-btn"
          onClick={deleteAllTasks}
          disabled={tasks.length === 0}
        >
          Delete All Tasks
        </button>
      </div>

      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
      <ProgressTracker tasks={tasks} />
    </div>
  )
}

export default App