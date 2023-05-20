import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useEffect } from 'react';

export default function ViewOrder(props) {

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        View Order
      </Button>
      <SetModal
        show={modalShow}
        orderData={props.orderData}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

function SetModal(props) {

  const [order, setOrder] = React.useState('')
  const [items, setItems] = React.useState([])

  const approveOrder = (event) => {
    event.preventDefault();
    // axios.post(`http://localhost:5004/api/orders/approve/${props.orderData._id}`).then(function (response) {
    //   //success
    //   alert(response);
    // }).catch(function (error) {
    //   console.log(error);
    // })
    alert('Order is approved')
    props.onHide();
    order.orderStatus = "Approved"
    window.location.replace("/admin-dashboard");
  }

  const rejectOrder = (event) => {
    event.preventDefault();
    // axios.post(`http://localhost:5004/api/orders/reject/${props.orderData._id}`).then(function (response) {
    //   //success
    //   alert(response);
    // }).catch(function (error) {
    //   console.log(error);
    // })
    alert('Order is rejected')
    props.onHide()
    window.location.replace("/admin-dashboard");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5004/api/orders/${props.orderData._id}`);
        setOrder(response.data);
        setItems(response.data.items)
        console.log(order)
      } catch (error) {
        alert(error)
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Order Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="orderId">
              <Form.Label>Order ID &nbsp;</Form.Label>
              <Form.Control type="text" value={order._id} disabled />
            </Form.Group>
            <div className="col-12 p-0" style={{ display: 'flex' }}>
              <Form.Group className="mb-3 col-6 pl-0" controlId="orderDate">
                <Form.Label>Order Date</Form.Label>
                <Form.Control type="text" value={order.orderDate} disabled />
              </Form.Group>
              <Form.Group className="mb-3 col-6 pl-0" controlId="orderTime">
                <Form.Label>Order Time</Form.Label>
                <Form.Control type="text" value={order.orderTime} disabled />
              </Form.Group>
            </div>
            <div className="col-12 p-0" style={{ display: 'flex' }}>
              <Form.Group className="mb-3 col-10 pl-0" controlId="items">
                <Form.Label>Items</Form.Label>
                {items.map(item => (
                  <Form.Control key={item.name} type="text" value={item.name} disabled style={{ marginBottom: '6px' }} />
                ))};
              </Form.Group>
              <Form.Group className="mb-3 col-2 pl-0" controlId="">
                <Form.Label>Quantity</Form.Label>
                {items.map(item => (
                  <Form.Control key={item.name} type="text" value={item.quantity} disabled style={{ marginBottom: '6px' }} />
                ))};
              </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="totalPrice" style={{ display: "grid" }}>
              <Form.Label>Total Price</Form.Label>
              <Form.Control type="text" value={order.totalPrice} disabled />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={approveOrder} variant="primary" type="submit">
            Approve
          </Button>
          <Button onClick={rejectOrder} variant="danger">Reject</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
