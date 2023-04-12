import React from "react"
import './Header.css'

export default function Header({ black }) {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png" alt="" />
        </a>        
      </div>
      <div className="header--user">
          <a href="#">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
          </a>
        </div>
    </header>
  )
}