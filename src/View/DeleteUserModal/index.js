// Packages
import axios from "axios";
import React, { useState } from "react";

// React bootstrap components
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// icons
import { RiDeleteBin6Line } from "react-icons/ri";

/**
 * user delete confirmation Modal
 * @param {object} props
 * @returns Node
 */
const DeleteUserModal = (props) => {
  // Destructure props
  const { id = "", data, updateData } = props || {};

  // Id of User that we Want to delete
  const [deleteId, setdeleteId] = useState(null);

  // Modal Show and hide state
  const [show, setShow] = useState(false);

  // For Closing modal
  const handleClose = () => {
    setShow(false);
  };

  /**
   * Delete User from Database and delete that particular user from State also
   * @returns Updated state
   */
  const handleDeleteUser = () => {
    axios.delete(`http://localhost:8000/users/${deleteId}`).then(() => {
      const newUpdateData = data.filter((item) => item.id !== deleteId);
      updateData(newUpdateData);
    });
  };

  /**
   * show modal and Set user id in State
   * @param {int} dltId
   */
  const handleShow = (dltId) => {
    setShow(true);
    setdeleteId(dltId);
  };

  return (
    <>
      {/* button to open modal */}
      <Button variant="primary" onClick={() => handleShow(id)}>
        <RiDeleteBin6Line />
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do You Really Want to Delete the user</Modal.Body>
        <Modal.Footer>
          {/* Cancel button */}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* confirm button to delete a user */}
          <Button variant="primary" onClick={handleDeleteUser}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteUserModal;
