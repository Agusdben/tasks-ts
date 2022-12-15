import React from 'react'
import useTasks from '../../hooks/useTasks'
import TasksList from '../TasksList'

const Tasks: React.FC = () => {
  const { tasks } = useTasks()
  return (
    <section>
      <TasksList tasks={tasks} />
    </section>
  )
}

export default Tasks
