import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import axios from 'axios';
import UpdateItemModal from './UpdateItemModal';
import DeleteItemModal from './DeleteItemModal'

export default function ItemCard() {

  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5003/api/items");
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='row row-cols-1 row-cols-md-4 g-2' style={{ display: "-webkit-inline-box", justifyContent: "space-around" }}>
      {items.map(item => (
        <Card key={item._id} style={{ width: '16rem', marginRight: '35px' }}>
          <div className='mt-2' style={{ display: 'flex', justifyContent: 'center' }}>
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
            <Card.Link href="#"><UpdateItemModal itemData= {item}/></Card.Link>
            <Card.Link href="#"><DeleteItemModal itemData= {item}/></Card.Link>
          </Card.Body>
        </Card>
      ))};
    </div>
  )
}
