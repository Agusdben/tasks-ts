import React from 'react'
import { Task } from '../../types/Task.model'

interface Props {
  tasks: Task[]
}

const TasksList: React.FC<Props> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <span>{task.description}</span>
        </li>
      ))}
    </ul>
  )
}

export default TasksList
