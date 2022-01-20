import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useActions } from "../helpers/hooks/useActions";

const DeleteUserModal = (props) => {
  const { user, onClose } = props;
  const { removeUser } = useActions();
  return (
    <Modal centered show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Are you sure you want to delete user?</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button onClick={onClose}>Close</Button>
        <Button variant="danger" onClick={() => removeUser(user._id)}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteUserModal;
