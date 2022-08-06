// Packages
import React from "react";

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
    <Navbar className="mx-4">
      <Navbar.Brand>User List</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <AddNewUserModal data={data} updateData={updateData} />
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
