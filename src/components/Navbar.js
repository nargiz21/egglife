import React from "react";
import logo from "../images/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-list">
        <div className="shop-list list">
          <a href="#">
            <li>Shop</li>
          </a>
          <a href="#">
            <li>Where to buy</li>
          </a>
        </div>
        <div className="logo-wrapper">
          <a href="#">
            <li>
              <img className="logo" src={logo} />
            </li>
          </a>
        </div>
        <div className="about-list list">
          <a href="#">
            <li>Recipes</li>
          </a>
          <a href="#">
            <li>Learn</li>
          </a>
          <div className="userbtn btn"><FontAwesomeIcon icon={faCircleUser} /></div>
          <div className="shopbtn btn"><FontAwesomeIcon icon={faBagShopping} /></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
