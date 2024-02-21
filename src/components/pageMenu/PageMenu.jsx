import React from "react";
import { NavLink } from "react-router-dom";

const PageMenu = () => {

  return (
    <div>
      <nav className="--btn-google --p --mb --mt ">
        <ul className="home-links">
          <li>
            <NavLink to="/usersPage">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/changePassword">ChangePassword</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users-Info</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PageMenu;
