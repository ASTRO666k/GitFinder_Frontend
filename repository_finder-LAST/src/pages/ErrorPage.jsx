import React from 'react'
import { Link } from 'react-router-dom'
import style from '../styles/errorPage.module.css'

const ErrorPage = () => {
  return (
    <div className={style.container}>
      <h1>404: Page not found.</h1>
      <Link to={'/'} className={style.link}>Go to Home</Link>
    </div>
  )
}

export default ErrorPage