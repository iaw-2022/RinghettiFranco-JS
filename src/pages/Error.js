import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h3>Ups! Algo salió mal.</h3>
        <Link to="/" className="btn-primary">Inicio</Link>
      </div>
    </section>
  )
}

export default Error
