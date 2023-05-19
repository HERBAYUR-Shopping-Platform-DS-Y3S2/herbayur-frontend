import React from 'react'
import Header from '../../common/components/header'
import BottomBanners from '../../common/components/BottomBanners'
import Footer from '../../common/components/Footer'
import { NavLink } from 'react-router-dom'
import axios from  'axios'
import { useEffect,useState } from 'react'

export default function ItemStore() {
 
const [items ,setItems] = useState([])  
useEffect(()=>{
axios.get("http://localhost:5003/api/items/").then((response)=>{

  setItems(response.data)
}).catch((error)=>{
console.log(error)
})
},[])

console.log(items)

  return (
    <div>
      <div className="site-wrap">
        <Header />
        <div className="bg-light py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-0">
                <NavLink to="/homepage" style={{ textDecoration: "none" }}>
                  Home
                </NavLink>{" "}
                <span className="mx-2 mb-0">/</span>{" "}
                <strong className="text-black">Store</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h3 className="mb-3 h6 text-uppercase text-black d-block">
                  Filter by Price
                </h3>
                <div id="slider-range" className="border-primary"></div>
                <input
                  type="text"
                  name="text"
                  id="amount"
                  className="form-control border-0 pl-0 bg-white"
                  disabled=""
                />
              </div>
              <div className="col-lg-6">
                <h3 className="mb-3 h6 text-uppercase text-black d-block">
                  Filter by Reference
                </h3>
                <button
                  type="button"
                  className="btn btn-secondary btn-md dropdown-toggle px-4"
                  id="dropdownMenuReference"
                  data-toggle="dropdown"
                >
                  Reference
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuReference"
                >
                  <a className="dropdown-item" href="#">
                    Relevance
                  </a>
                  <a className="dropdown-item" href="#">
                    Name, A to Z
                  </a>
                  <a className="dropdown-item" href="#">
                    Name, Z to A
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Price, low to high
                  </a>
                  <a className="dropdown-item" href="#">
                    Price, high to low
                  </a>
                </div>
              </div>
            </div>

            <div className="row">
              {items.map((item) => (
                <div className="col-sm-6 col-lg-4 text-center item mb-4">
                  <span className="tag">Sale</span>
                  <a href="shop-single.html">
                    <img src="./assets/images/product_01.png" alt="Image" />
                  </a>
                  <h3 className="text-dark">
                    <a
                      href={`/single-item/${item._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      {item.name}
                    </a>
                  </h3>
                  <p className="price">
                    <h5>{item.price}</h5>
                  </p>
                  <p className="price">
                    <h5>{item.status}</h5>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <BottomBanners />
        <Footer />
      </div>
    </div>
  );
}
