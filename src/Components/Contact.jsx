import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission (No backend, just prevent default)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <section className="contact py-2 d-flex justify-content-center align-items-center vh-10">
      <div className="container">
        <h2 className="text-center mb-4">Contact Us</h2>

        {submitted ? (
          <p className="text-success text-center">Thank you! We'll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form mx-auto p-2 shadow rounded bg-light">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input 
                type="text" 
                name="name" 
                className="form-control" 
                placeholder="Your Name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input 
                type="email" 
                name="email" 
                className="form-control" 
                placeholder="Your Email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea 
                name="message" 
                className="form-control" 
                rows="3" 
                placeholder="Your Message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-60">Submit</button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;
