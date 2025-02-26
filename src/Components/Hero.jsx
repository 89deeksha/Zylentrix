import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa';
function Hero() {
  return (
    <div>
       
        <section className="hero d-flex align-items-center text-center my-5 ">
      <div className="container align-item-center justify-content">
        <h1 className="display-4 fw-bold">Welcome to Zylentrix</h1>
        <p className="lead">Helping businesses grow with expert consulting solutions.</p>
        <Link to="service" className="btn btn-danger btn-lg">Get Started <FaArrowRight /></Link>
      </div>
    </section>
    </div>
  )
}

export default Hero