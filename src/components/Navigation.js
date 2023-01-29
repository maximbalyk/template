import React from 'react'

export default function Navigation() {
  return (
    <nav className="desktop desktop__menu">
      <ul className="desktop__menu">
        <li className="desktop__menu-item"><a href="#presentation" className="desktop__menu-link">OUR STORY</a></li>
        <li className="desktop__menu-item"><a href="#aboutUS" className="desktop__menu-link">ABOUT US</a></li>
        <li className="desktop__menu-item"><a href="#technology" className="desktop__menu-link">TECHNOLOGY</a></li>
        <li className="desktop__menu-item"><a href="#features" className="desktop__menu-link">FEATURES</a></li>
        <li className="desktop__menu-item"><a href="#questions" className="desktop__menu-link">GET IN TOUCH</a></li>
      </ul>
    </nav>
  )
}
