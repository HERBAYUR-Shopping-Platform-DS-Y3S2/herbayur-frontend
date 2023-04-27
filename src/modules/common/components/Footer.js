import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
              <div className="block-7">
                <h3 className="footer-heading mb-4">About Us</h3>
                <p>At HERBAYUR, we believe in the power of natural remedies and herbal medicines to promote health and wellness. Our platform is a collaborative shopping destination for Ayurvedic/Herbal medicines and supplements, where you can find a wide variety of high-quality, natural products from trusted manufacturers.</p>
              </div>
            </div>
            <div className="col-lg-3 mx-auto mb-5 mb-lg-0">
              <h3 className="footer-heading mb-4">Quick Links</h3>
              <ul className="list-unstyled">
                <li><a href="#" style={{ textDecoration: 'none' }}>Supplements</a></li>
                <li><a href="#" style={{ textDecoration: 'none' }}>Vitamins</a></li>
                <li><a href="#" style={{ textDecoration: 'none' }}>Diet &amp; Nutrition</a></li>
                <li><a href="#" style={{ textDecoration: 'none' }}>Tea &amp; Coffee</a></li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="block-5 mb-5">
                <h3 className="footer-heading mb-4">Contact Info</h3>
                <ul className="list-unstyled">
                  <li className="address">203 Lane, Colombo 08, Sri Lanka</li>
                  <li className="phone"><a href="tel://23923929210" style={{ textDecoration: 'none' }}>+94 77 123 4567</a></li>
                  <li className="email">emailaddress@domain.com</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row pt-5 mt-5 text-center">
            <div className="col-md-12">
              <p>
                HerbAyur.com
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All rights reserved | HerbAyur® is a
                registered trademark of HerbAyur, LLC. Trusted Brands. Healthy Rewards. and the HerbAyur.com Trusted Brands.
                Healthy Rewards. Logo are trademarks of HerbAyur, LLC.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
