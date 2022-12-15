import React, { useContext } from 'react'
import { TasksContext } from '../contexts/TasksContext'
import { Task } from '../types/Task.model'

const useTasks = () => {
  const { tasks, setTasks } = useContext(TasksContext)

  const addNewTask = (task: Task): void => {
    setTasks([...tasks, task])
  }

  return {
    tasks,
    addNewTask
  }
}

export default useTasks
