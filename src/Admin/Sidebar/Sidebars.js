import React, { useState } from "react";
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
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "../css/sidebar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";

function Sidebars() {
  const localStorageToken = JSON.parse(localStorage.getItem("admin"));
  const navigate = useNavigate();
  if (!localStorageToken) {
    navigate("/admin/login");
  }
  // Renamed to avoid conflict with import
  const handleLogout = () => {
    // Code xử lý khi người dùng click vào nút logout
    setShowLogoutModal(true);
    try {
      localStorage.removeItem("admin");
      navigate("/admin/login");
    } catch (error) {
      console.log(error);
    }
  };
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const handleLogoutclick = async () => {
    setShowLogoutModal(true);
  };
  const handleCloseModalLogout = () => setShowLogoutModal(false);
  // tạo react-hook collapse của thư viện sidebar
  const [collapsed, setCollapsed] = React.useState(false);
  return (
    <>
      <div className="containerSibebar">
<<<<<<< HEAD
        <Sidebar className="side" collapsed={collapsed}>
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
              onClick={handleLogoutclick}
            >
              Log out
            </MenuItem>{" "}
            {showLogoutModal && (
              <Modal
                show={showLogoutModal}
                onHide={handleCloseModalLogout}
                size="1x"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton >
                  <Modal.Title style={{ color: "red"}}>Logout </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form style={{textAlign:"center"}}>
                    <Form.Label>Are you sure ?</Form.Label>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseModalLogout}>
                    Close
                  </Button>
                  <Button variant="danger" onClick={handleLogout}>
                    OK
                  </Button>
                </Modal.Footer>
              </Modal>
            )}
          </Menu>
        </Sidebar>
        <main className="Collap" style={{ padding: 5 }}>
          <div>
            <Menu>
              {" "}
              <MenuItem
                icon={<FontAwesomeIcon icon={faBars} size="lg" />}
                onClick={() => setCollapsed(!collapsed)}
              ></MenuItem>
            </Menu>
          </div>
        </main>
=======
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
            component={<Link to="/admin/orders-manager" />}
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
>>>>>>> branches_Tai
      </div>
    </>
  );
}

export default Sidebars; 
