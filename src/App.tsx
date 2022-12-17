import React from 'react'
import Tasks from './components/Tasks'
import Header from './components/Header'
import TasksContextProvider from './contexts/TasksContext'
import './App.css'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <TasksContextProvider>
      <div className='app'>
        <Header />
        <main className='app__main'>
          <Tasks />
        </main>
        <Footer />
      </div>
    </TasksContextProvider>
  )
}

export default App
