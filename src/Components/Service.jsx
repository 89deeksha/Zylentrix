import React from 'react'
import { FaLaptopCode,FaChartLine,FaMobileAlt } from 'react-icons/fa';
function Service() {
  return (
    <>
<section className="services py-5 bg-light text-center">
      <div className="container">
        <h2 className="mb-4">Our Services</h2>
        <div className="row">
          
          {/* Service 1 */}
          <div className="col-md-4">
            <div className="service-box p-4 shadow-sm">
              <FaLaptopCode size={50} className="icon mb-3" />
              <h4>Web Development</h4>
              <p>We build modern, responsive websites tailored to your business needs.</p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="col-md-4">
            <div className="service-box p-4 shadow-sm">
              <FaChartLine size={50} className="icon mb-3" />
              <h4>SEO Optimization</h4>
              <p>Boost your online presence with our expert SEO strategies.</p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-md-4">
            <div className="service-box p-4 shadow-sm">
              <FaMobileAlt size={50} className="icon mb-3" />
              <h4>Mobile App Development</h4>
              <p>Develop high-quality mobile applications for Android and iOS.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    </>
  )
}

export default Service