import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';

export default function ItemCard() {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch("http://localhost:5003/api/items")
      .then(response => response.json())
      .then(json => setItems(json))
      .finally(() => {
        setLoading(false)
      })
  }, [])
  return (
    <div className='row row-cols-1 row-cols-md-4 g-2' style={{ display: "-webkit-inline-box", justifyContent: "space-around" }}>
      {items.map(item => (
        <Card key={item.id} style={{ width: '16rem', marginRight: '35px' }}>
          <div class='mt-2' style={{ display: 'flex', justifyContent: 'center' }}>
            <Card.Img variant="top" src={item.image} style={{ height: "165px", width: "140px" }} />
          </div>
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{item.type}</ListGroup.Item>
            <ListGroup.Item>{item.dose}</ListGroup.Item>
            <ListGroup.Item>{item.price}</ListGroup.Item>
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
