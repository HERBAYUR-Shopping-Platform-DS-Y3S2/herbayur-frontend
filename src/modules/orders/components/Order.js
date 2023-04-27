import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../common/components/header";
import Footer from "../../common/components/Footer";

const Order = () => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    axios
      .get("")
      .then((response) => {
        setOrder(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Header />
      <div
        className="card"
        style={{
          margin: "20px",
        }}
      >
        <div className="card-header">Order</div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Order ID</th>
                <th scope="col">Items in Order</th>
                <th scope="col">Total Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* <th scope="row">{order.id}</th>
                <td>{order.items.join(", ")}</td>
                <td>{order.totalPrice}</td> */}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary">Confirm Order</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Order;
