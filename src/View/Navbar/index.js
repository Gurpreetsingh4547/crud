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
  const { data, updateData } = props || {};
  return (
    <div className="sticky-top bg-light border">
      <Navbar className="">
        <Navbar.Brand className="fs-2">
          <MdKeyboardArrowLeft className="fs-1 mb-1" />
          USERLIST
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end mx-3">
          <Navbar.Text>
            <AddNewUserModal data={data} updateData={updateData} />
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
