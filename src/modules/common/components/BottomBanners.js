import React from 'react'

export default function BottomBanners() {
  return (
    <div>
      <div className="site-section bg-secondary bg-image" style={{ backgroundImage: 'url("./assets/images/bg_2.jpg")' }}>
        <div className="container">
          <div className="row align-items-stretch">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <a href="#" className="banner-1 h-100 d-flex" style={{ backgroundImage: 'url("./assets/images/bg_1.jpg")', textDecoration: 'none' }}>
                <div className="banner-1-inner align-self-center">
                  <h2>HerbAyur Products</h2>
                  <p>These products are formulated to promote health and wellness, and are free from harmful chemicals and additives. With a wide range of products available, from herbal supplements to skincare and hair care, Herbayur offers a comprehensive approach to natural health and beauty.
                  </p>
                </div>
              </a>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0">
              <a href="#" className="banner-1 h-100 d-flex" style={{ backgroundImage: 'url("./assets/images/bg_2.jpg")', textDecoration: 'none' }}>
                <div className="banner-1-inner ml-auto  align-self-center">
                  <h2>Rated by Experts</h2>
                  <p>As an expert in Ayurveda and herbal medicine, I'm always impressed by the thoughtfulness and care that goes into every Herbayur product.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
