import React from 'react'
import { Link } from 'react-router-dom'

import './pagesStyle.css'

const Error = () => {
  return (
    <div className="container-error">
      <img src="/not-found.png" alt="page-not-found"  />
      <h1>Page not found for the page</h1>
      <Link to='/'> Back to Home</Link>
    </div>
  )
}

export default Error