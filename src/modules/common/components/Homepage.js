import React from 'react'
import Footer from './Footer'
import Header from './header'
import BottomBanners from './BottomBanners'
import { NavLink } from 'react-router-dom'

export default function Homepage() {
  return (
    <div>
      <div className="site-wrap">
        <Header />
        <div className="site-blocks-cover" style={{ backgroundImage: 'url("./assets/images/hero_1.jpg")' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-7 mx-auto order-lg-2 align-self-center">
                <div className="site-block-cover-content text-center">
                  <h2 className="sub-title">Effective Medicine, New Medicine Everyday</h2>
                  <h1>Welcome To HerbAyur</h1>
                  <p>
                    <NavLink to='/store' className="btn btn-primary px-5 py-3">Shop Now</NavLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="row align-items-stretch section-overlap">
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                <div className="banner-wrap bg-primary h-100">
                  <a href="#" className="h-100" style={{ textDecoration: 'none' }}>
                    <h5>Free <br /> Shipping</h5>
                    <p>
                    <strong>Enjoy free shipping on all orders and experience the convenience and affordability of shopping with us.</strong>
                    </p>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                <div className="banner-wrap h-100">
                  <a href="#" className="h-100" style={{ textDecoration: 'none' }}>
                    <h5>Season <br /> Sale 50% Off</h5>
                    <p>
                      <strong>Don't miss out on our exclusive discount - save [insert percentage or dollar amount] on your purchase today and discover the benefits of our high-quality Ayurvedic and herbal products.</strong>
                    </p>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                <div className="banner-wrap bg-warning h-100">
                  <a href="#" className="h-100" style={{ textDecoration: 'none' }}>
                    <h5>Buy <br /> A Gift Card</h5>
                    <p>
                      <strong>Looking for the perfect gift for your health-conscious loved one? Give the gift of natural wellness with a Herbayur gift card, available now for purchase on our website.</strong>
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="title-section text-center col-12">
                <h2 className="text-uppercase">Popular Products</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-4 text-center item mb-4">
                <span className="tag">Sale</span>
                <a href="shop-single.html"> <img src="./assets/images/product_01.png" alt="Image" /></a>
                <h3 className="text-dark"><a href="shop-single.html" style={{ textDecoration: 'none' }}>Bioderma</a></h3>
                <p className="price"><del>95.00</del> &mdash; $55.00</p>
              </div>
              <div className="col-sm-6 col-lg-4 text-center item mb-4">
                <a href="shop-single.html"> <img src="./assets/images/product_02.png" alt="Image" /></a>
                <h3 className="text-dark"><a href="shop-single.html" style={{ textDecoration: 'none' }}>Chanca Piedra</a></h3>
                <p className="price">$70.00</p>
              </div>
              <div className="col-sm-6 col-lg-4 text-center item mb-4">
                <a href="shop-single.html"> <img src="./assets/images/product_03.png" alt="Image" /></a>
                <h3 className="text-dark"><a href="shop-single.html" style={{ textDecoration: 'none' }}>Umcka Cold Care</a></h3>
                <p className="price">$120.00</p>
              </div>
              <div className="col-sm-6 col-lg-4 text-center item mb-4">
                <a href="shop-single.html"> <img src="./assets/images/product_04.png" alt="Image" /></a>
                <h3 className="text-dark"><a href="shop-single.html" style={{ textDecoration: 'none' }}>Cetyl Pure</a></h3>
                <p className="price"><del>45.00</del> &mdash; $20.00</p>
              </div>
              <div className="col-sm-6 col-lg-4 text-center item mb-4">
                <a href="shop-single.html"> <img src="./assets/images/product_05.png" alt="Image" /></a>
                <h3 className="text-dark"><a href="shop-single.html" style={{ textDecoration: 'none' }}>CLA Core</a></h3>
                <p className="price">$38.00</p>
              </div>
              <div className="col-sm-6 col-lg-4 text-center item mb-4">
                <span className="tag">Sale</span>
                <a href="shop-single.html"> <img src="./assets/images/product_06.png" alt="Image" /></a>
                <h3 className="text-dark"><a href="shop-single.html" style={{ textDecoration: 'none' }}>Poo Pourri</a></h3>
                <p className="price"><del>$89</del> &mdash; $38.00</p>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12 text-center">
                <a href="shop.html" className="btn btn-primary px-4 py-3">View All Products</a>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section bg-light">
          <div className="container">
            <div className="row">
              <div className="title-section text-center col-12">
                <h2 className="text-uppercase">New Products</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 block-3 products-wrap">
                <div className="nonloop-block-3 owl-carousel">
                  <div className="text-center item mb-4">
                    <a href="shop-single.html"> <img src="./assets/images/product_03.png" alt="Image" /></a>
                    <h3 className="text-dark"><a href="shop-single.html" style={{ textDecoration: 'none' }}>Umcka Cold Care</a></h3>
                    <p className="price">$120.00</p>
                  </div>
                  <div className="text-center item mb-4">
                    <a href="shop-single.html"> <img src="./assets/images/product_01.png" alt="Image" /></a>
                    <h3 className="text-dark"><a href="shop-single.html" style={{ textDecoration: 'none' }}>Umcka Cold Care</a></h3>
                    <p className="price">$120.00</p>
                  </div>
                  <div className="text-center item mb-4">
                    <a href="shop-single.html"> <img src="./assets/images/product_02.png" alt="Image" /></a>
                    <h3 className="text-dark"><a href="shop-single.html" style={{ textDecoration: 'none' }}>Umcka Cold Care</a></h3>
                    <p className="price">$120.00</p>
                  </div>
                  <div className="text-center item mb-4">
                    <a href="shop-single.html"> <img src="./assets/images/product_04.png" alt="Image" /></a>
                    <h3 className="text-dark"><a href="shop-single.html" style={{ textDecoration: 'none' }}>Umcka Cold Care</a></h3>
                    <p className="price">$120.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="title-section text-center col-12">
                <h2 className="text-uppercase">Recommendations</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 block-3 products-wrap">
                <div className="nonloop-block-3 no-direction owl-carousel">
                  <div className="testimony">
                    <blockquote>
                      <img src="./assets/images/person_1.jpg" alt="Image" className="img-fluid w-25 mb-4 rounded-circle" />
                      <p>&ldquo;I just wanted to say thank you for offering such a wonderful selection of Ayurvedic products on your website. As someone who has been interested in natural remedies for years, I've been searching for a reliable source for high-quality Ayurvedic supplements and herbs. Your website has exceeded my expectations with its clear product descriptions, easy-to-navigate interface, and fast shipping. I'm looking forward to continuing to use your website for all of my Ayurvedic needs.&rdquo;</p>
                    </blockquote>
                    <p>&mdash; Kelly Holmes</p>
                  </div>
                  <div className="testimony">
                    <blockquote>
                      <img src="./assets/images/person_2.jpg" alt="Image" className="img-fluid w-25 mb-4 rounded-circle" />
                      <p>&ldquo;I just wanted to let you know how much I appreciate the information and resources you provide on your website. As someone who is new to Ayurveda, I was a bit overwhelmed by the wealth of information available on the topic. Your website has been an invaluable resource for me, with clear explanations of Ayurvedic principles and easy-to-follow instructions for using the products I purchased. Thank you for making Ayurveda accessible to everyone!&rdquo;</p>
                    </blockquote>
                    <p>&mdash; Rebecca Morando</p>
                  </div>
                  <div className="testimony">
                    <blockquote>
                      <img src="./assets/images/person_3.jpg" alt="Image" className="img-fluid w-25 mb-4 rounded-circle" />
                      <p>&ldquo;I recently purchased a few products from your website and I wanted to share how impressed I was with the quality of your products. As someone who has been using Ayurvedic remedies for years, I've tried many different brands and products, but I was blown away by the potency and effectiveness of the items I purchased from your site. I also appreciate the care you take in sourcing your products from sustainable and ethical sources. I will definitely be a repeat customer.&rdquo;</p>
                    </blockquote>
                    <p>&mdash; Lucas Gallone</p>
                  </div>
                  <div className="testimony">
                    <blockquote>
                      <img src="./assets/images/person_4.jpg" alt="Image" className="img-fluid w-25 mb-4 rounded-circle" />
                      <p>&ldquo;I just wanted to let you know how much I appreciate the information and resources you provide on your website. As someone who is new to Ayurveda, I was a bit overwhelmed by the wealth of information available on the topic. Your website has been an invaluable resource for me, with clear explanations of Ayurvedic principles and easy-to-follow instructions for using the products I purchased. Thank you for making Ayurveda accessible to everyone!&rdquo;</p>
                    </blockquote>
                    <p>&mdash; Andrew Neel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BottomBanners />
        <Footer />
      </div>
    </div>
  )
}
