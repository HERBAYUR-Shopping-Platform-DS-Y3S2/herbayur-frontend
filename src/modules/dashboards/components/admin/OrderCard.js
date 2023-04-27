import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';

export default function OrderCard() {

  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch("http://localhost:5004/api/orders")
      .then(response => response.json())
      .then(json => setOrders(json))
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <div className='row row-cols-1 row-cols-md-4 g-2' style={{ display: "flex", justifyContent: "space-around" }}>
      {orders.map(order => (
        <Card key={order.id} style={{ width: '16rem', marginRight: '15px' }}>
          <div class='mt-2' style={{ display: 'flex', justifyContent: 'center' }}>
            <Card.Img variant="top" src={order.image} style={{ height: "165px", width: "140px" }} />
          </div>
          <Card.Body>
            <Card.Title>{order.name}</Card.Title>
            <Card.Text>{order.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{order.type}</ListGroup.Item>
            <ListGroup.Item>{order.dose}</ListGroup.Item>
            <ListGroup.Item>{order.price}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#"><Button className='btn-primary'>Edit</Button></Card.Link>
            <Card.Link href="#"><Button className='btn-secondary'>Delete</Button></Card.Link>
          </Card.Body>
        </Card>
      ))};
    </div>
  )
}
