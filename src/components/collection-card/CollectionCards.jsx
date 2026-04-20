import React from 'react'
import "./CollectionCards.css"

import Model1 from '../../assets/images/feature1.png';
import Model2 from '../../assets/images/feature2.png';
import Model3 from '../../assets/images/feature3.png';
import Model4 from '../../assets/images/feature4.png';
import Model5 from '../../assets/images/feature5.png';
import Model6 from '../../assets/images/feature6.png';

const data = [
  { img: Model1, title: 'Solid Color' },
  { img: Model2, title: 'Oversized T-Shirts' },
  { img: Model3, title: 'Premium Hoodies' },
  { img: Model4, title: 'Printed Sweatshirts' },
  { img: Model5, title: 'Sanskrit Hoodies' },
  { img: Model6, title: 'Clearance Sale' },
];

const CollectionCards = () => {
  return (
     <section className="section-space featured-section">
      <div className="content-wrapper">

        {/* Heading */}
        <h2 className="section-title text-center mb-lg-5">
          Our Featured Collection
        </h2>

        {/* Cards */}
        <div className="row g-3 justify-content-center">
          {data.map((item, index) => (
            <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={index}>
              
              <div className="collection-card">
                <img src={item.img} alt={item.title} />
              </div>

              <div className="collection-title">
                {item.title}
                <i className="bi bi-arrow-right"></i>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default CollectionCards