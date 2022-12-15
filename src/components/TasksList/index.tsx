import React from 'react'
import { Task } from '../../types/Task'
import TaskCard from '../TaskCard'

interface Props {
  tasks: Task[]
}

const TasksList: React.FC<Props> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <TaskCard task={task} />
        </li>
      ))}
    </ul>
  )
}

export default TasksList
