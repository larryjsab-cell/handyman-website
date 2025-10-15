export default function About() {
  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container">
          <h1>About Us</h1>
          <p>Your trusted partner for quality home improvement</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-intro">
            <h2>Welcome to TLC Handyman & Home Improvement</h2>
            <p>
              With years of experience in the home improvement industry, TLC Handyman has built a reputation
              for delivering exceptional quality and customer service. Our team of skilled professionals is
              dedicated to transforming your house into the home of your dreams.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <h3>Our Mission</h3>
              <p>
                To provide reliable, high-quality handyman and home improvement services that exceed our
                customers' expectations. We believe in honest communication, fair pricing, and craftsmanship
                that stands the test of time.
              </p>
            </div>

            <div className="about-card">
              <h3>Our Values</h3>
              <ul>
                <li>Quality workmanship in every project</li>
                <li>Transparent and honest communication</li>
                <li>Respect for your home and time</li>
                <li>Fair and competitive pricing</li>
                <li>Continuous improvement and learning</li>
              </ul>
            </div>

            <div className="about-card">
              <h3>Why Choose Us</h3>
              <ul>
                <li>Licensed and insured professionals</li>
                <li>Years of industry experience</li>
                <li>Free estimates and consultations</li>
                <li>Satisfaction guaranteed</li>
                <li>On-time, reliable service</li>
              </ul>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Customer Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">5-Star Reviews</div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Work with Us?</h2>
            <p>Let's discuss your next home improvement project</p>
            <a href="/contact" className="btn-primary">Contact Us Today</a>
          </div>
        </div>
      </section>
    </div>
  )
}
