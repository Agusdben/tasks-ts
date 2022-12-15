import React, { createContext, useState } from 'react'
import { Task } from '../types/Task'
import { TasksContext as ContextValue } from '../types/TasksContext'

export const TasksContext = createContext<ContextValue>({
  tasks: [],
  setTasks: () => {}
})

interface Props {
  children: React.ReactNode
}

const TasksContextProvider: React.FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([])
  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  )
}

export default TasksContextProvider
