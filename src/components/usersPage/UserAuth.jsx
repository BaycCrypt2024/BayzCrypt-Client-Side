import React from 'react'
import { useContext } from 'react';
import ChangeNetwork from "../changeWalletAccount/ChangeNetwork";
import { AuthContext } from '../context/AuthContext'

const UserAuth = () => {
  const {currentUser} = useContext(AuthContext)
  return (
    <>
      <div>
        <div className='usersAuth'>
          <img style={{width: '6rem', height: "5.7rem", borderRadius: '40px'}} src={currentUser.photoURL} alt="" />
          <p><strong>Welcome back,</strong> <strong style={{textTransform: "uppercase"}}>{currentUser.displayName}</strong></p> <br />
        </div>
        <p className='usersP'>Send crypto with ease.</p>
      </div>
      <div>
        <ChangeNetwork />
      </div>
    </>
  );
};

export default UserAuth;
