import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <h1>Distribuidora</h1>
        </Link>
        <ul className="nav-links">
        <li>
            <Link to="/">
              <FaHome />
            </Link>
          </li>
          <li>
            <Link to="/carrito">
              <FaShoppingCart />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
