import React from 'react'
import "../style.css"

function ProgressTracker({tasks}) {
  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const percentage = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;
  return (
    <div className='progress-tracker'>
      <h2>Progress</h2>
      <p>Completed: {completedTasks}/{totalTasks}</p>
      <p>Percentage: {percentage.toFixed(2)}%</p>

      <div className='progress-bar'>
        <div className='progress'>
          <div style={{ width: `${percentage}%`, backgroundColor: 'green', height: '20px' }}></div>
        </div>
      </div>
    </div>
  )
}

export default ProgressTracker