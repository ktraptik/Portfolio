import React from 'react';

const Contact = ({ contact }) => {
  return (
    <footer id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          <h2><i className="fas fa-handshake"></i> Let's Connect</h2>
          <p className="contact-status">{contact.status}</p>
          
          <div className="contact-info">
            <div className="contact-item">
              <span className="label"><i className="fas fa-map-marker-alt"></i> Location</span>
              <p>{contact.location}</p>
            </div>
            <div className="contact-item">
              <span className="label"><i className="fas fa-envelope"></i> Email</span>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
            <div className="contact-item">
              <span className="label"><i className="fas fa-phone"></i> Phone</span>
              <a href={`tel:${contact.phone}`}>{contact.phone}</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2026 Trapti K. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
