import React from 'react'
import FormTask from './components/FormTask'
import Tasks from './components/Tasks'
import TasksContextProvider from './contexts/TasksContext'

const App: React.FC = () => {
  return (
    <TasksContextProvider>
      <div className='app'>
        <header>
          <h1>Tasky</h1>
          <FormTask />
        </header>
        <main>
          <Tasks />
        </main>
      </div>
    </TasksContextProvider>
  )
}

export default App
