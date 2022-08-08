// Packages
import React from "react";

// React Icons
import { MdKeyboardArrowLeft } from "react-icons/md";

// React bootstrap components
import Navbar from "react-bootstrap/Navbar";

// Components
import AddNewUserModal from "../AddNewUserModal";

/**
 * Top head Navbar with add user modal
 * @param {object} props
 * @returns node
 */
const NavBar = (props) => {
  const { data, onUpdateData } = props || {};
  return (
    <div className="sticky-top bg-light border">
      <Navbar className="w-100">
        {/* Logo */}
        <Navbar.Brand className="fs-4">
          <MdKeyboardArrowLeft className="text-secondary fs-3 mb-1 mx-1" />
          USERLIST
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end mx-3">
          <Navbar.Text>
            {/* Add new user Modal */}
            <AddNewUserModal data={data} onUpdateData={onUpdateData} />
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
