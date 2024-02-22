import React from 'react'
import { useContext } from 'react';
import ChangeNetwork from "../changeWalletAccount/ChangeNetwork";
import { AuthContext } from '../context/AuthContext'

const UserAuth = () => {
  const {currentUser} = useContext(AuthContext)
  return (
    <>
      <div>
        <div style={{display: 'flex', gap: '5px', marginLeft: '2rem'}}>
          <img style={{width: '6rem', height: "5.7rem", borderRadius: '40px'}} src={currentUser.photoURL} alt="" />
          <h4>Welcome back, <strong style={{textTransform: "uppercase"}}>{currentUser.displayName}</strong></h4> <br />
        </div>
        <p style={{ marginLeft: '9rem', marginTop: '-2.5rem'}}>Send crypto with ease.</p>
      </div>
      <div>
        <ChangeNetwork />
      </div>
    </>
  );
};

export default UserAuth;
