import React from "react";
import ChangeAccount from "../changeWalletAccount/ChangeAccount";
import cryptoChain from "../../assets/cryptoChat.png"

const Right = () => {
  return (
    <div className="--right-side-header">
      <h4>Balance Overtime</h4>
      <hr />
      <div className="--right-side-amount">
        <h4 style={{ fontSize: "15px" }}>Total Balance</h4>
        <p>$0.00</p>
        <img style={{ width: "25rem" }} src={cryptoChain} alt="" />
      </div>
      <div>
        <ChangeAccount />
      </div>
    </div>
  );
};


export default Right;
