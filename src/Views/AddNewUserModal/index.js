import React, { useState } from "react";

// React bootstrap Componoents
import { Button, Modal } from "react-bootstrap";

// Api request method to get users list
import { addNewUser } from "../../services/users";

/**
 *  modal to add new user
 * @param {object} props
 * @returns node
 */
const AddNewUserModal = (props) => {
  // Props Desturcturing
  const { data, onUpdateData } = props || {};

  // user details state, Include : name, date, userid
  const [userDetails, setUserDetails] = useState({
    name: "",
    date: new Date().toLocaleDateString(),
  });

  // modal state for modal show or hide
  const [show, setShow] = useState(false);

  //  Modal close method
  const handleClose = () => setShow(false);

  // Modal Open method
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
  const handleAddNewUser = async () => {
    const newUserData = await addNewUser(userDetails);
    if (newUserData) {
      onUpdateData([...data, newUserData]);
    }
    setShow(false);
  };

  return (
    <>
      {/* Add new user popup modal button */}
      <Button
        onClick={handleShow}
        className="ModalButton outline-none btn btn-primary"
      >
        Add New User
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className="border-0 pb-0">
          <Modal.Title className="AddNewUserModalTitle">
            Add New User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="pb-0">
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
          {/* Add new user button */}
          <Button
            variant="primary"
            onClick={handleAddNewUser}
            className="ModalButton w-25"
          >
            Save
          </Button>

          {/* Close modal button */}
          <Button
            className=" ModalButtonCancel w-25"
            variant="secondary"
            onClick={handleClose}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddNewUserModal;
