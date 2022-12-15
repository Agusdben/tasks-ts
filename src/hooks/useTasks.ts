import React, { useContext } from 'react'
import { TasksContext } from '../contexts/TasksContext'
import { Task } from '../types/Task'

const useTasks = () => {
  const { tasks, setTasks } = useContext(TasksContext)

  const addNewTask = (task: Task): void => {
    setTasks([...tasks, task])
  }

  const removeTask = (id: number): void => {
    setTasks(tasks.filter((t: Task): Boolean => t.id !== id))
  }

  const handleDone = (id: number): void => {
    setTasks(
      tasks.map((t: Task): Task => (t.id === id ? { ...t, done: !t.done } : t))
    )
  }

  const handleEdit = (id: number, description: string): void => {
    setTasks(
      tasks.map((t: Task): Task => (t.id === id ? { ...t, description } : t))
    )
  }

  return {
    tasks,
    addNewTask,
    removeTask,
    handleDone,
    handleEdit
  }
}

export default useTasks
