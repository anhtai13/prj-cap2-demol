import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar"; // Use Sidebar instead of ProSidebar
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBox,
  faTruckRampBox,
  faChartBar,
  faCog,
  faSignOutAlt,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import "../css/sidebar.css";
import { Link } from "react-router-dom";
import ManageService from "../Services/ManageService";


function Sidebars() {
  // Renamed to avoid conflict with import
  const handleLogout = () => {
    // Code xử lý khi người dùng click vào nút logout
  };
  const [collapsed, setCollapsed] = React.useState(false);
  return (
    <>
      <div className="containerSibebar">
      <Sidebar className="side" collapsed={collapsed} >
        <Menu className="menusidebar">
          <MenuItem 
            component={<Link to="/homeAdmin" />}
            icon={<FontAwesomeIcon icon={faHome} />}
          >
            Home
          </MenuItem>
          <MenuItem
            component={<Link to="/admin/user-manager" />}
            icon={<FontAwesomeIcon icon={faUser} />}
          >
            User Management
          </MenuItem>
          <MenuItem
            component={<Link to="/admin/services-manager" />}
            icon={<FontAwesomeIcon icon={faBox} />}
          >
          Services Management
          </MenuItem>
          <MenuItem
            component={<Link to="/admin/orderManager" />}
            icon={<FontAwesomeIcon icon={faTruckRampBox} />}
          >
            Order Management
          </MenuItem>
          <MenuItem
            component={<Link to="/admin/analytics" />}
            icon={<FontAwesomeIcon icon={faChartBar} />}
          >
            Analytics
          </MenuItem>
          <MenuItem
            component={<Link to="/admin/setting" />}
            icon={<FontAwesomeIcon icon={faCog} />}
          >
            Setting
          </MenuItem>
          <MenuItem
            icon={<FontAwesomeIcon icon={faSignOutAlt} />}
            onClick={handleLogout}
          >
            Log out
          </MenuItem>
        </Menu>
      </Sidebar>
      <main className="Collap" style={{ padding: 5 }}>
        <div>
          <Menu> <MenuItem icon={<FontAwesomeIcon icon={faBars} size="lg" />}
            onClick={() => setCollapsed(!collapsed)}
          >
          </MenuItem></Menu>          
        </div>
      </main>
      </div>
    </>
  );
}

export default Sidebars; // Update the exported component to SidebarComponent
