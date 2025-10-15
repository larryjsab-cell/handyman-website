import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>TLC Handyman</h3>
            <p>Professional handyman and home improvement services for all your needs.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Home Repairs</li>
              <li>Remodeling</li>
              <li>Painting</li>
              <li>Flooring</li>
              <li>Carpentry</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@tlchandyman.com</li>
              <li>Hours: Mon-Fri 8AM-6PM</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} TLC Handyman & Home Improvement LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
