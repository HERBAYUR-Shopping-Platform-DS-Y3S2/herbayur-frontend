import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useRef, useEffect } from 'react';
import axios from 'axios';

export default function UpdateItemModal(props) {

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Edit
      </Button>
      <SetModal
        show={modalShow}
        itemData={props.itemData}
        onHide={() => setModalShow(false)}
      />
    </div>
  )

}

function SetModal(props) {

  const [image, setImage] = React.useState('');
  const [type, setType] = React.useState('');
  const [name, setName] = React.useState('');
  const [dose, setDose] = React.useState('');
  const [sellerName, setSellerName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [desc, setDesc] = React.useState('');
  const [status, setStatus] = React.useState('');

  const [viewImage, setViewImage] = React.useState('');

  const handleDropdownChangeType = (event) => {
    setType(event.target.value);
  };

  const handleDropdownChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  const onImageChange = (e) => {
    // setImage([...e.target.files]);

    // if(e.target.files.length !== 0) {
    //     let imageUrl = "";
    //     imageUrl = URL.createObjectURL(e.target.files[0]);
    //     setViewImage(imageUrl)
    // }

    // const img = {
    //   preview: URL.createObjectURL(e.target.files[0]),
    //   data: e.target.files[0],
    // }
    // setImage(img)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5003/api/items/${props.itemData._id}`);
        // setImage('');
        setType(response.data.type);
        setName(response.data.name);
        setDose(response.data.dose);
        setSellerName(response.data.sellerName);
        setPrice(response.data.price);
        setDesc(response.data.desc);
        setStatus(response.data.status)

      } catch (error) {
        // alert(error)
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // let formData = new FormData()
    // formData.append('file', image.data)
    // const response = await fetch('http://localhost:5003/image', {
    //   method: 'PUT',
    //   body: formData,
    // })

    const itemData = {
      image,
      type,
      name,
      dose,
      sellerName,
      price,
      desc,
      status
    }
    axios.put(`http://localhost:5003/api/items/${props.itemData._id}`, itemData).then((response) => {

      //success
      alert('Successfully updated the item');
      props.onHide();
      window.location.replace("/seller-dashboard");

    }).catch((error) => {
      // alert(error);
    })

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
        <Form onSubmit={handleSubmit} className="g-3 needs-validation" noValidate>
          <Form.Group className="mb-3" controlId="image">
            <Form.Label>Image</Form.Label>
            {/* <ImageUpload ref={ref} /> */}
            {/* <Form.Control type="file"  onChange={onImageChange} />
            <img className='mt-2' src={viewImage} style={{ height: "165px", width: "140px" }}></img> */}
            <Form.Control type="file" onChange={onImageChange} />
            {image.preview && <img src={image.preview} width='140px' height='165px' />}
          </Form.Group>
          <Form.Group className="mb-3" controlId="type">
            <Form.Label>Type &nbsp;</Form.Label>
            <select className="form-control" value={type} onChange={handleDropdownChangeType} required>
              <option selected>{type}</option>
              <option value="Supplements">Supplement</option>
              <option value="Herbs & Homeopathy">Herbs & Homeopathy</option>
              <option value="Bath & Personal Care">Bath & Personal Care</option>
              <option value="Beauty">Beauty</option>
            </select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Item Name</Form.Label>
            <Form.Control className="form-control" type="text" placeholder="ex:- California Gold Nutrition" value={name} onChange={(e) => setName(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="dose">
            <Form.Label>Dose</Form.Label>
            <Form.Control className="form-control" type="text" placeholder="ex:- 50mg" value={dose} onChange={(e) => setDose(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="sellerName">
            <Form.Label>Seller Name</Form.Label>
            <Form.Control className="form-control" type="text" placeholder="ex:- Herb Company" value={sellerName} onChange={(e) => setSellerName(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control className="form-control" type="text" placeholder="ex:- $20.00" value={price} onChange={(e) => setPrice(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="desc" onChange={(e) => setDesc(e.target.value)} style={{ display: "grid" }}>
            <Form.Label>Description</Form.Label>
          </Form.Group>
          <Form.Group className="mb-3" controlId="status">
            <Form.Label>Status &nbsp;</Form.Label>
            <select className="form-control" onChange={handleDropdownChangeStatus} required>
              <option selected>{status}</option>
              <option value="In-stock">In-stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit} variant="primary" type="submit">
          Update Item
        </Button>
        <Button variant="danger" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
