import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import ImageUpload from '../../../common/components/FileUpload';
import { useRef } from 'react';
import axios from 'axios';

export default function AddItemModal() {

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Add Item
      </Button>
      <SetModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

function SetModal(props) {

  const [image, setImage] = React.useState('');
  const [type, setType] = React.useState('');
  const [itemName, setItemName] = React.useState('');
  const [dose, setDose] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleDropdownChange = (event) => {
    setType(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    const itemData = {
      image,
      type,
      itemName,
      dose,
      price,
      description
    }

    if (type.length === 0 || itemName.length === 0 || dose.length === 0 || price.length === 0, description.length === 0) {

    }
    else {
      axios.post('http://localhost:5003/api/items/', itemData).then(function (response) {
        setImage('');
        setType('');
        setItemName('');
        setDose('');
        setPrice('');
        setDescription('');

        //success
        alert(response);
      }).catch(function (error) {
        alert(error);
      })
    }
  }

  const ref = useRef();
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add an Item
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="image">
            <Form.Label>Image</Form.Label>
            <ImageUpload ref={ref} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="type">
            <Form.Label>Type &nbsp;</Form.Label>
            <select value={type} onChange={handleDropdownChange}>
              <option selected value="supplements">Supplement</option>
              <option value="herbsAndHomeopathy">Herbs & Homeopathy</option>
              <option value="bathAndPersonalCare">Bath & Personal Care</option>
              <option value="beauty">Beauty</option>
            </select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="itemName">
            <Form.Label>Item Name</Form.Label>
            <Form.Control type="text" placeholder="ex:- California Gold Nutrition" value={itemName} onChange={(e) => setItemName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="dose">
            <Form.Label>Dose</Form.Label>
            <Form.Control type="text" placeholder="ex:- 50mg" value={dose} onChange={(e) => setDose(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" placeholder="ex:- $20.00" value={price} onChange={(e) => setPrice(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description" value={description} onChange={(e) => setDescription(e.target.value)} style={{ display: "grid" }}>
            <Form.Label>Description</Form.Label>
            <textarea></textarea>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit} variant="primary" type="submit">
          Add Item
        </Button>
        <Button variant="danger" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
