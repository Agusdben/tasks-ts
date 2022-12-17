import React from 'react'
import { Task } from '../../types/Task'
import TaskCard from '../TaskCard'
import './TasksList.css'

interface Props {
  tasks: Task[]
}

const TasksList: React.FC<Props> = ({ tasks }) => {
  return (
    <ul className='task-list'>
      {tasks.map(task => (
        <li className='task-list__item' key={task.id}>
          <TaskCard task={task} />
        </li>
      ))}
    </ul>
  )
}

export default TasksList
