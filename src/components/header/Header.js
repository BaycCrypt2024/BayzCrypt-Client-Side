import React from 'react'
import { FaViacoin } from 'react-icons/fa'
import { FaUserCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import './Header.scss';
import { Link, NavLink } from 'react-router-dom';

const activeLink = ({isActive}) => (isActive ? "active" : "")


const Header = () => {
  
  const navigate = useNavigate()

  const goHome= () => {
    navigate("/")
  }

  return (
    <header className='header'>
      <nav>
        <div className='logo' onClick={goHome}>
        <FaViacoin/> &nbsp;
          <span>BayzCrypt</span>
        </div>
        <h1 style={{color: 'white'}}>Innovation</h1>
      </nav>
    </header>
  )
}

export default Header