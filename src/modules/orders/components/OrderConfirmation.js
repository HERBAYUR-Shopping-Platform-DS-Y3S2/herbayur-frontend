import React, { useState } from "react";
import emailjs from "emailjs-com";
import Header from "../../common/components/header";
import BottomBanners from "../../common/components/BottomBanners";
import Footer from "../../common/components/Footer";

const OrderConfirmation = ({ buyerEmai }) => {
  const [confirmationSent, setConfirmationSent] = useState(false);
  const orderDetails = [{ name: "Item 123" }, { price: "50" }];

  const sendConfirmationEmail = () => {
    const templateParams = {
      to_email: "IT20654276",
      message: `Thank you for your order! Here are your order details: ${JSON.stringify(
        orderDetails
      )}`,
    };
    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_USER_ID"
      )
      .then(() => setConfirmationSent(true))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Header/>
      <div
        style={{
          backgroundColor: "lightgreen",
          padding: "1rem",
          borderRadius: "0.5rem",
          textAlign: "center",
        }}
      >
        <h2>Your order has been confirmed!</h2>
        <p>Thank you for your purchase.</p>
        <p>Order details:</p>
        <ul>
          {orderDetails.map((item, index) => (
            <li key={index}>
              {item.name}: ${item.price}
            </li>
          ))}
        </ul>
        {confirmationSent ? (
          <p style={{ color: "green", fontWeight: "bold" }}>
            A confirmation email has been sent to
          </p>
        ) : (
          <button onClick={sendConfirmationEmail}>
            Send confirmation email
          </button>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default OrderConfirmation;
