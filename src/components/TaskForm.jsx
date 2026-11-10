import React from 'react'
import "../style.css"
import { useState } from 'react'

function TaskForm({addTask}) {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('medium');
    const [category, setCategory] = useState('general');

    const handleSubmit = (e) =>{
        e.preventDefault();
        addTask({ task, priority, category, completed: false });
        setTask('');
        setPriority('medium');
        setCategory('general');
    }
  return (
    <form className="task-form" onSubmit={handleSubmit}>
        <div id="inp">
            <input 
            type="text"
            placeholder="Enter your task here"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            />
            <span><button>Add Task</button></span>
        </div>

        <div id="btns">
            <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>

            <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            >
                <option value="general">General</option>
                <option value="work">Work</option>
                <option value="personal">Personal</option>
            </select>
        </div>
    </form>
  )
}

export default TaskForm