import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import BasicAuth from "./modules/common/components/BasicAuth";
import Homepage from "./modules/common/components/Homepage";
import Header from "./modules/common/components/header";
import Footer from "./modules/common/components/Footer";
import BottomBanners from "./modules/common/components/BottomBanners";
import SingleItem from "./modules/items/components/SingleItem";
import ItemStore from "./modules/items/components/ItemStore";
import Cart from "./modules/cart/components/Cart";
import CheckoutOrder from "./modules/orders/components/CheckoutOrder";
import ThankYou from "./modules/common/components/ThankYou";
import About from "./modules/common/components/About";
import Contact from "./modules/common/components/Contact";
import SellerAdminSignIn from "./modules/users/components/SellerAdminSignIn";
import SellerDashboard from './modules/dashboards/components/seller/SellerDashboard';
import AdminDashboard from "./modules/dashboards/components/admin/AdminDashboard";
import TrackOrder from "./modules/dashboards/components/admin/TrackOrder";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* <Route exact path='/' />
          <Route path='/:id' />
          <Route path='/auth' element={<BasicAuth />} /> */}
          <Route exact path="/homepage" element={<Homepage />} />
          <Route element={<Header />} />
          <Route element={<BottomBanners />} />
          <Route element={<Footer />} />
          <Route path="/store" element={<ItemStore />} />
          <Route path="/single-item" element={<SingleItem />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutOrder />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/seller-login" element={<SellerAdminSignIn />} />
          <Route path='/seller-dashboard' element={<SellerDashboard/>}/>
          <Route path='/admin-dashboard' element={<AdminDashboard/>}/>
          <Route path='/track-order' element={<TrackOrder/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
