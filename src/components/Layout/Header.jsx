import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
        <div>
            <NavLink to="/">Subrat's Home</NavLink>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">FetchRQ</NavLink></li>
            </ul>
        </div>
    </header>
  )
}

export default Header