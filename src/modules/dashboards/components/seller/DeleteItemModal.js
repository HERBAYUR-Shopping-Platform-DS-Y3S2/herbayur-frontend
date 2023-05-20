import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

export default function DeleteItemModal(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitForm = (event) => {
    event.preventDefault();
    axios.delete(`http://localhost:5003/api/items/${props.itemData._id}`).then((response) => {

      //success
      alert('Successfully deleted the item');
      handleClose();
      window.location.replace("/seller-dashboard");

    }).catch((error) => {
      // alert(error);
    })
  }

  return (
    <div>
      <Button variant="danger" onClick={handleShow}>
        Delete
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete {props.itemData.name} ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={submitForm}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
