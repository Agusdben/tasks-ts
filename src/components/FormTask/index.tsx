import React from 'react'
import useInputText from '../../hooks/useInputText'
import useTasks from '../../hooks/useTasks'
import { Task } from '../../types/Task.model'
import InputText from '../InputText'

const FormTask: React.FC = () => {
  const { addNewTask } = useTasks()

  const taskInput = useInputText({
    initialValue: '',
    required: true,
    placeholder: 'Type a task here'
  })

  const handleAddTask = (event: React.FormEvent) => {
    event.preventDefault()

    const task: string = taskInput.value

    if (!task) {
      return
    }

    const newTasks: Task = {
      id: Date.now(),
      description: task,
      done: false
    }

    addNewTask(newTasks)
    taskInput.resetValue()
  }

  return (
    <form onSubmit={handleAddTask}>
      <InputText input={taskInput} />
      <button type='submit'>+</button>
    </form>
  )
}

export default FormTask
