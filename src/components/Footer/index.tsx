import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import './Footer.css'
const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <section>
        <p className='footer__credits'>
          Created by{' '}
          <span className='footer__author'>Agustin Di Benedetto</span>
        </p>
      </section>
      <section className='footer__links'>
        <a
          className='icon'
          href='https://www.linkedin.com/in/agustin-di-benedetto-7509071ba/'
          target='_BLANK'
          rel='noreferrer'
        >
          <AiFillLinkedin />
        </a>
        |
        <a
          className='icon'
          href='https://github.com/Agusdben'
          target='_BLANK'
          rel='noreferrer'
        >
          <AiFillGithub />
        </a>
      </section>
    </footer>
  )
}

export default Footer
