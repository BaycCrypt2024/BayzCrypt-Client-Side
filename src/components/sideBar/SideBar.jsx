import React from 'react'
import { MdGridView } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { SiJsonwebtokens } from "react-icons/si";
import { AiOutlineTransaction } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsTelephoneOutbound } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom"
import './sideBar.scss';
import {signOut} from "firebase/auth"
import { auth } from '../../firebase'

const activeLink = ({isActive}) => (isActive ? "active" : "")

const SideBar = () => {
  return (
    <div className='All' >
        <div className='--all-settings-first'>
            <h3><MdGridView size={24} /></h3>
            <h4 className='--text-weight'>Overviews</h4>
        </div>
        <div className='--all-settings-style'>
            <h3><IoSettingsOutline size={24} /></h3>
            <Link to='/profilePage'><h4 className='--text-weight'>Settings</h4></Link>
        </div>
        <div className='--all-settings-style'>
            <h3><SiJsonwebtokens size={24} /></h3>
            <h4 className='--text-weight'>DAPP</h4>
        </div>
        <div className='--all-settings-style'>
            <h3><AiOutlineTransaction size={24} /></h3>
            <Link to="/alltransactions">
                <h4 className='--text-weight'>Transactions</h4>
            </Link>
        </div>
        <div className='--all-settings-style'>
            <h3><IoIosNotificationsOutline size={24} /></h3>
            <h4 className='--text-weight'>Notifications</h4>
            <button className='--notification-btn'>0</button>
        </div>
        <div className='--all-settings-style --support'>
            <h3><BsTelephoneOutbound size={24} /></h3>
            <h4>Supports</h4>
        </div>
        <div className='--all-settings-last'>
            <h2><CiLogout size={24} color='red' /></h2>
            <Link to='/'><h4 onClick={()=>signOut(auth)} className='--last-h4'>Logout</h4></Link>
        </div>  
    </div>
  )
}

export default SideBar