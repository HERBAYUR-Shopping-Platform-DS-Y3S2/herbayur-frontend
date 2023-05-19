import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SingleItem() {
  const [data, setData] = useState({});

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios
      .get(`http://localhost:5003/api/items/${id}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error adding item to cart:", error.response.data);
      });
  }, [id]);

  const { name, type, dose, sellerName, price, desc, status, image, _id } = data;
    
  const cartItem = {
    oldid: _id,
    ItemName: name,
    Itemprice: price,
    Displayimage: image,
  };


  const addToCart = () => {
    axios
      .post("http://localhost:5001/api/cart/send", cartItem)
      .then((response) => {
        console.log("Item added to cart:", response.data);
      })
      .catch((error) => {
        console.error("Error adding item to cart:", error);
      });
  };

  return (
    <div className="card">
      <div className="card-header">{type}</div>
      <div className="card-body">
        <h5 className="card-title"> {name}</h5>
        <p className="card-text">
          Dose: {dose}
          <br />
          Seller Name: {sellerName}
          <br />
          Price: {price}
          <br />
          Description: {desc}
          <br />
          Status: {status}
          <br />
        </p>
      </div>
      <div className="card-footer">
        <button className="btn btn-primary" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
