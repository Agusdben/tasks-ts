import React, { createContext, useState } from 'react'
import { Task } from '../models/Task.model'

interface ContextValue {
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

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
