import React from 'react'
import logo from './logo.png'
import{Link} from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'

function Header() {
    // console.log(logo)
    
  return (
    <>
        <nav className="header">
           <img src={logo} alt="logo" />
           <div>
                <Link to='/tvshows'>TV-shows</Link>
                <Link to='/movies'>Movies</Link>
                <Link to='/recent'>Recently-Added</Link>
                <Link to='/mylist'>My-List</Link>
            </div>
            <BsSearch/>
        </nav>
    </>
  )
}

export default Header