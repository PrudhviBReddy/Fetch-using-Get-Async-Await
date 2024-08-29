import React from 'react'
import { NavLink } from 'react-router-dom'

function TopNavigation() {
  return (
    <nav>

    <NavLink className="underline" to="/Products">Products</NavLink>
    <NavLink className="underline" to="/Jewelery">Jewelery</NavLink>
    <NavLink className="underline" to="/Movies">Movies</NavLink>
    <NavLink className="underline" to="/Cars">Cars</NavLink>
    <NavLink className="underline" to="/Animals">Animals</NavLink>

    </nav>
  )
}

export default TopNavigation