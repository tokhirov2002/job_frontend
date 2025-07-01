
import "../components/stayle/about.css"
import usta from '../assets/Images/usta.png'
import shoir from '../assets/Images/shoir.png'
import google from '../assets/Images/googeli.png'
import mester from '../assets/Images/miska.png'
import air from '../assets/Images/air.png'
import pinter from '../assets/Images/pinter.png'
import erkak from '../assets/Images/erkak.png'
import ayol from '../assets/Images/ayol.png'
const About = () => {
  return (
    <div className="about-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="nav-brand">
            <div className="logo">
              <span className="logo-icon">🔵</span>
              <span className="logo-text">Nguli</span>
            </div>
          </div>
          <nav className="nav-menu">
            <a href="/" className="nav-link">
              Find Talent
            </a>
            <a href="clients" className="nav-link">
              Clients
            </a>
            <a href="community" className="nav-link">
              Community
            </a>
            <a href="blog" className="nav-link">
              Blog
            </a>
            <a href="about" className="nav-link">
              About Us
            </a>
          </nav>
          <div className="nav-actions">
            <button className="btn-secondary">Log In</button>
            <button className="btn-primary">Sign Up</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-card">
                <div className="hero-icon">
                  <span className="logo-icon">🔵</span>
                  <span className="logo-text">Nguli</span>
                </div>
                <h1>About Us</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie id tincidunt molestudae pharetra
                  arcu turpis cursus mattis fringilla. Quam enim mi faucibus purus, nec lorem mus at odio. Morbi
                  fringilla diam, diam elit, et risus. Sed purus, aliquet vel ut ipsum consectetur ut turpis.
                </p>
                <button className="btn-join">Join Now</button>
              </div>
            </div>
            <div className="hero-images">
              <div className="image-grid">
                <img src={usta} alt="Office workspace" className="hero-img" />
                <img src={shoir} alt="Team collaboration" className="hero-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="trusted-section">
        <div className="container">
          <p className="trusted-text">Trusted by:</p>
          <div className="trusted-logos">
        
              <img src={google} alt="Google" className="trusted-logo" />
            <img src={mester} alt="Microsoft" className="trusted-logo" />
            <img src={air} alt="Airbnb" className="trusted-logo" />
            <img src={pinter} alt="Pinterest" className="trusted-logo" />
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="numbers-section">
        <div className="container">
          <h2>Our numbers</h2>
          <p className="numbers-subtitle">
            As the fastest-growing online job board, our mission is to help great individuals connect with great
            companies.
          </p>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon">📋</div>
              <div className="stat-number">20,583+</div>
              <div className="stat-label">Job Posted</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">👍</div>
              <div className="stat-number">3,896+</div>
              <div className="stat-label">Successful hires</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">✓</div>
              <div className="stat-number">581+</div>
              <div className="stat-label">Verified companies</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">📊</div>
              <div className="stat-number">100K+</div>
              <div className="stat-label">Monthly visits</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2>
            Trusted by leading brands
            <br />
            and startups
          </h2>
          <div className="testimonials-grid">
            <div className="testimonial">
              <div className="quote-icon">"</div>
              <p>
                "One of the advantages of utilizing freelancers is finding talent with different skills quickly as our
                needs change."
              </p>
              <div className="testimonial-author">
                <img src={erkak} alt="Davis Rosser" className="author-avatar" />
                <div>
                  <div className="author-name">Davis Rosser</div>
                  <div className="author-title">Director of Content Experience</div>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="quote-icon">"</div>
              <p>
                "Nguli enables us to differentiate ourselves from our competitors and produce content at a higher
                caliber."
              </p>
              <div className="testimonial-author">
                <img src={ayol} alt="Tiana Geidt" className="author-avatar" />
                <div>
                  <div className="author-name">Tiana Geidt</div>
                  <div className="author-title">Director of Content Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Find your next great opportunity!</h2>
          <p>We are taking action to help our freelancers, our clients, and the people of the world— and so can you.</p>
          <button className="btn-get-started">Get Started</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <span className="logo-icon">🔵</span>
                <span className="logo-text">Nguli</span>
              </div>
              <p>
                We are taking action to help our freelancers, our clients, and the people of the world—and so can you.
              </p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <a href="#">Find Talent</a>
                <a href="#">Clients</a>
                <a href="#">Blog</a>
              </div>
              <div className="footer-column">
                <a href="#">FAQ</a>
                <a href="#">About Us</a>
              </div>
              <div className="footer-newsletter">
                <h4>Newsletter</h4>
                <div className="newsletter-form">
                  <input type="email" placeholder="Your email here" />
                  <button className="btn-send">Send</button>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2022 Nguli® Global Inc.</p>
            <div className="footer-legal">
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default About
