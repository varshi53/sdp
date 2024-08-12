import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-section logo">
      
          <div className="social-icons">
            <a href="#"><i className="fa fa-facebook-f"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-instagram"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
          </div>
        </div>
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p><i className="fa fa-map-marker"></i> 123 Street, City, Country</p>
          <p><i className="fa fa-phone"></i> +123 456 7890</p>
          <p><i className="fa fa-envelope"></i> info@company.com</p>
        </div>
      </div>
      <div className="legal">
        <p>&copy; 2024 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
