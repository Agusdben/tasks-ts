import { Task } from './Task'

export interface TasksContext {
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}
