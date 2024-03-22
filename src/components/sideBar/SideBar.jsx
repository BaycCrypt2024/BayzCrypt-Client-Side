import React from "react";
import { MdGridView } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { SiJsonwebtokens } from "react-icons/si";
import { AiOutlineTransaction } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsTelephoneOutbound } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import "./sideBar.css";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";


const SideBar = () => {
  return (
    <div className="sd-body">
      <ul>
        <li>
          <Link>
            <a className="sd-link">
              <MdGridView /> &nbsp; OVERVIEWS
            </a>
          </Link>
        </li>
        <li>
          <Link to="/profilePage">
            <a className="sd-link">
              <IoSettingsOutline /> &nbsp; SETTINGS
            </a>
          </Link>
        </li>
        <li>
          <Link>
            <a className="sd-link">
              <SiJsonwebtokens /> &nbsp; DAPP
            </a>
          </Link>
        </li>
        <li>
          <Link to="/alltransactions">
            <a className="sd-link">
              <AiOutlineTransaction /> &nbsp; TRANSACTIONS
            </a>
          </Link>
        </li>
        <li>
          <Link>
            <a className="sd-link">
              <IoIosNotificationsOutline /> &nbsp; NOTIFICATIONS
            </a>
          </Link>
        </li>
        <li>
          <Link>
            <a className="sd-link">
              <BsTelephoneOutbound /> &nbsp; SUPPORTS
            </a>
          </Link>
        </li>
      </ul>
      <div className="--all-settings-last">
        <h2>
          <CiLogout size={24} color="red" />
        </h2>
        <Link to="/">
          <h4 onClick={() => signOut(auth)} className="--last-h4">
            Logout
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
