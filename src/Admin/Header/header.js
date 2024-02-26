import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBox,
  faTruckRampBox,
  faChartBar,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import '../css/header.css';
import { Link } from "react-router-dom";

function Header() {
    
    const handleLogout = () => {
        // Code xử lý khi người dùng click vào nút logout
      };

  return (
      <nav>
        <ul>
          <li>
            <a href="#" className="logo">
              <img src="/img/logo.jpg" alt="" />
              <span className="nav-item">Adminstrator</span>
            </a>
          </li>
          <li>
            <a href="./homeAdmin.html">
              <FontAwesomeIcon icon={faHome} />
              <span className="nav-item">Home</span>
            </a>
          </li>
          <li>
            <a href="./userManager.html">
              <FontAwesomeIcon icon={faUser} />
              <span className="nav-item">User Management</span>
            </a>
          </li>
          <li>
            <a href="./productsManager.html">
              <FontAwesomeIcon icon={faBox} />
              <span className="nav-item">Products Management</span>
            </a>
          </li>
          <li>
            <a href="./orderManager.html">
              <FontAwesomeIcon icon={faTruckRampBox} />
              <span className="nav-item">Order Management</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faChartBar} />
              <span className="nav-item">Analytics</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faCog} />
              <span className="nav-item">Setting</span>
            </a>
          </li>
          <li>
            <a href="#" className="logout">
              <FontAwesomeIcon icon={faSignOutAlt} />
              <span className="nav-item" onClick={handleLogout}>
                Log out
              </span>
            </a>
          </li>
        </ul>
      </nav>
  );
}

export default Header;