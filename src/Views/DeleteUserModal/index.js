import React, { useState } from "react";

// React bootstrap components
import { Button, Modal } from "react-bootstrap";

// icons
import { RiDeleteBin6Line } from "react-icons/ri";

// Api request method to delete users list from database
import { deleteUserFromList } from "../../services/users";

/**
 * user delete confirmation Modal
 * @param {object} props
 * @returns Node
 */
const DeleteUserModal = (props) => {
  // Destructure props
  const { id = "", data = [], onUpdateData } = props || {};

  // Id of User that we Want to delete
  const [userId, setUserId] = useState(null);

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
  const handleDeleteUser = async () => {
    const onSuccess = await deleteUserFromList(userId);
    if (onSuccess) {
      const newUpdateData = data.filter((item) => item.id !== userId);
      onUpdateData(newUpdateData);
    }
  };

  /**
   * show modal and Set user id in State
   * @param {Numbers} userIdToDelete
   */
  const handleShow = (userIdToDelete) => {
    setShow(true);
    setUserId(userIdToDelete);
  };

  return (
    <>
      {/* Delete Button */}
      <RiDeleteBin6Line
        className=" deleteIcon fs-5"
        onClick={() => handleShow(id)}
      />

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className="border-0 pb-0">
          <Modal.Title className="modalTitle">Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-secondary modalTitle">
          You are about to delete this User? Click Proceed to Confirm
        </Modal.Body>
        <Modal.Footer>
          {/* confirm button to delete a user */}
          <Button
            variant="primary"
            onClick={handleDeleteUser}
            className=" ModalButton w-25"
          >
            Proceed
          </Button>
          {/* Cancel button */}
          <Button
            variant="secondary"
            className=" ModalButtonCancel w-25"
            onClick={handleClose}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteUserModal;
