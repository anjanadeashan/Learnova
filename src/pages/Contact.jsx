import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>Get in touch with the LEARNOVA team</p>
      </div>
      
      <div className="contact-content">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <div className="contact-details">
            <div className="contact-item">
              <strong>📧 Email:</strong>
              <p>support@learnova.com</p>
            </div>
            <div className="contact-item">
              <strong>📞 Phone:</strong>
              <p>+94 11 234 5678</p>
            </div>
            <div className="contact-item">
              <strong>📍 Address:</strong>
              <p>123 Education Street<br />Colombo, Sri Lanka</p>
            </div>
            <div className="contact-item">
              <strong>🕒 Office Hours:</strong>
              <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          <h3>Send us a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Subject *</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn-submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;