// Packages
import React, { useState } from "react";
import axios from "axios";

// React bootstrap Componoents
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

/**
 *  modal to add new user
 * @param {object} props
 * @returns node
 */
const AddNewUserModal = (props) => {
  // Props Desturcturing
  const { data, updateData } = props || {};

  // user details state, Include : name, date, userid
  const [userDetails, setUserDetails] = useState({
    name: "",
    date: new Date().toLocaleDateString(),
  });
  const [show, setShow] = useState(false);

  // Close modal method
  const handleClose = () => setShow(false);

  // Open modal method
  const handleShow = () => setShow(true);

  /**
   *  Set user name in the user detail state
   * @param {object} event
   */
  const handleUserName = (event) => {
    setUserDetails({ ...userDetails, name: event.target.value });
  };

  /**
   * prevent reloading on submit form
   * @param {object} event
   */
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  /**
   * Add new user to database and add update the data state with new data
   */
  const handleAddNewUser = () => {
    axios
      .post("http://localhost:8000/users/", userDetails)
      .then((res) => {
        const newUserData = res.data;
        updateData([...data, newUserData]);
      })
      .catch((error) => {
        console.log(error);
      });
    setShow(false);
  };

  return (
    <>
      {/* pop modal button */}
      <Button variant="primary" onClick={handleShow}>
        Add New User
      </Button>

      {/* modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Add new user form */}
          <form onSubmit={handleFormSubmit}>
            {/* user name input */}
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="usernamebox"
                aria-describedby="emailHelp"
                placeholder="Enter Name of User"
                onChange={handleUserName}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          {/* Close modal button */}
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          {/* Add new user button */}
          <Button variant="primary" onClick={handleAddNewUser}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddNewUserModal;
