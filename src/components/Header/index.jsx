import React, { useState } from "react"
import './Header.css'

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import SearchIcon from '@mui/icons-material/Search'

export default function Header({ black }) {

  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png" alt="" />
        </a> 
        <div class="header--menu">
          <a href="#home">Home</a>
          <a href="#tvshows">TV Shows</a>
          <a href="#movies">Movies</a>
          <a href="#new&popular">New & Popular</a>
          <a href="#mylist">My List</a>
        </div>     
      </div>
            
      <div className="header--user">
        <SearchIcon sx={{ fontSize: 30 }}/>        
        <NotificationsNoneIcon sx={{ fontSize: 30 }}/>          
        <a href="#">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
        </a>
      </div>
    </header>
  )
}