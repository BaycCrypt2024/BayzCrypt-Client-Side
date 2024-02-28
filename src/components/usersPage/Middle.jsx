import React from 'react'
import bayzImg from '../../assets/cryptImg.svg'
import Clipboard from '../clipboard/MyClipboard';
import Transaction from '../transactions/Transaction';
import { MdSwapHorizontalCircle } from "react-icons/md";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
import { IoLogoPolymer } from "react-icons/io";
import { FaEthereum } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import {signOut} from "firebase/auth"
import UserAuth from './UserAuth';
import { CiLogout } from "react-icons/ci";
import { auth } from '../../firebase'


const Middle = () => {
  
  return (
    <div>
        <div className='--middle-side-header'>
            <UserAuth/>
        </div>
        <div className='--middle-side-image'>
          <img className='myImage' src={bayzImg} alt="" />
        </div>
        <div>
          <Clipboard/>
          <div className='--middle-side-amount'>
            <h3>0.00 ETH</h3>
            <p>$0.00 USD</p>
          </div>
        </div>
        <div className='--middle-side-icons'>
          <div>
            <Link>
              <h1 style={{marginTop: "-5px"}}><MdSwapHorizontalCircle size={50} color='blue'/></h1>
              <p style={{marginTop: "-19px", marginLeft: "-10px", fontSize: "10px", fontWeight: '700'}}>Swap Crypto</p>
            </Link>
          </div>
          <div style={{marginLeft: '6px', marginTop: '-2px'}}>
            <Link to=''>
              <h1 style={{marginLeft: '4px'}}><FaArrowCircleDown size={42} color='green' /></h1>
              <p style={{marginTop: "-14px", marginLeft: "-12px",  fontSize: "10px", fontWeight: '700'}}>Recieve Crypto</p>
            </Link>
          </div>
          <div >
            <Link to="/sendcrypto">
              <h1><FaArrowCircleUp size={40} color='red'/></h1>
              <p style={{marginTop: "-13px", marginLeft: "-10px", fontSize: "10px", fontWeight: '700'}}>Send Crypto</p>
            </Link>
          </div>
        </div>

        <div>
          <div className='--middle-side-notification'>
           <div>
            <h4><FaEthereum /> Ethereum</h4>
            <p>0.00 ETH</p>
           </div>
           <h3>$0.00</h3>
          </div>

          <div className='--middle-side-notification'>
           <div>
            <h4><IoLogoPolymer color='indigo' /> Polygon</h4>
            <p>0.00 MATIC</p>
           </div>
           <h3>$0.00</h3>
          </div>

          <div className='--middle-side-notification'>
           <div>
            <h4><FaEthereum /> Arbitrum</h4>
            <p>0.00 ARB</p>
           </div>
           <h3>$0.00</h3>
          </div>
        </div>
        <div>
          <Transaction/>
        </div>
        <div className='--middleLast'>
          <div className='--middleLast-first'>
              <h2><CiLogout size={24} color='red' /></h2>
              <Link to='/'><h4 onClick={()=>signOut(auth)} className='--last-h4'>Logout</h4></Link>
          </div>
          <div className='--middleLast-second'>
              <h3><IoSettingsOutline size={24} /></h3>
              <Link to='/profilePage'><h4 className='--text-weight'>Settings</h4></Link>
          </div>  
        </div>
    </div>
  )
}

export default Middle