import React from 'react'
import FormTask from '../FormTask'

import './Header.css'

const Header: React.FC = () => {
  return (
    <header className='header'>
      <h1>Tasky</h1>
      <FormTask />
    </header>
  )
}

export default Header
