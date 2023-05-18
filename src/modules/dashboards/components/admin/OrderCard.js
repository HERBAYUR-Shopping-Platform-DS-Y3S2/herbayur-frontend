import React from 'react'
import { useState, useEffect } from 'react'
import ViewOrder from './ViewOrder';
import axios from 'axios';

export default function OrderCard() {

  const [orders, setOrders] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5004/api/orders");
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='row row-cols-1 row-cols-md-4 g-2' style={{ display: "flex", justifyContent: "space-around" }}>
      {orders.map(order => (
        <div key={order._id} className="list-group mt-4" style={{ width: '-webkit-fill-available' }}>
          <a href="#" className="list-group-item list-group-item-action">A second link item
            <div style={{float:"right"}}>
              <ViewOrder orderData={order}/>
            </div>
            <hr /></a>
        </div>
      ))};
    </div>
  )
}
