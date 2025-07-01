import moshina from '../assets/Images/jamo.png'
import erkak from '../assets/Images/erkak.png'

import { NavLink } from "react-router-dom"
import "./stayle/clients.css"


function Clients() {
  const testimonials = [
    {
      id: 1,
      quote:
        "One of the advantages of utilizing freelancers is finding talent with different skills quickly as our needs change.",
      author: "David Rossier",
      position: "Director of Content Experience",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      quote:
        "Ngull enables us to differentiate ourselves from our competitors and produce content at a higher caliber.",
      author: "Tiana Gadet",
      position: "Director of Content Experience",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      quote: "I recently used the job seekers web platform to search for and apply to job openings.",
      author: "Marilyn Herwitz",
      position: "Director of Content Experience",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      quote: "I was amazed by the vast amount of opportunities available and the ease of use of the website.",
      author: "Gustavo George",
      position: "Director of Content Experience",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      quote:
        "One of the advantages of utilizing freelancers is finding talent with different skills quickly as our needs change.",
      author: "James Kenter",
      position: "Director of Content Experience",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 6,
      quote:
        "Ngull enables us to differentiate ourselves from our competitors and produce content at a higher caliber.",
      author: "Darlene Baptista",
      position: "Director of Content Experience",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const stats = [
    {
      number: "20,583+",
      label: "Job Posted",
      icon: "📋",
    },
    {
      number: "3,896+",
      label: "Successful Hires",
      icon: "👍",
    },
    {
      number: "581+",
      label: "Verified companies",
      icon: "⏰",
    },
    {
      number: "100K+",
      label: "Monthly visits",
      icon: "👥",
    },
  ]

  return (
    <div className="clients-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="nav-brand">
            <div className="logo">
              <span className="logo-icon">🔵</span> 
              <span className="logo-text">Ngull</span>
            </div>
          </div>
          <nav className="nav-menu">
            <a href="/" className="nav-link">
              Find Talent
            </a>
            <a href="clients" className="nav-link active">
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
            <button className="btn btn-outline">Log In</button>
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-card">
                <h1>Reviews on Ngull</h1>
                <p>
                  See how clients and talent celebrate their wins and stay accountable for their work together, or join
                  today to make your own connections.
                </p>
                <button className="btn btn-white">Get Started</button>
              </div>
            </div>
            <div className="hero-image">
              <img src={moshina} alt="Business meeting" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          <section className="reviews-section">
            <h2 className="section-title">
              Clients and talent leave each other
              <br />
              10k new reviews per week
            </h2>

            <div className="testimonials-grid">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                  <div className="quote-icon">💬</div>
                  <blockquote className="testimonial-quote">"{testimonial.quote}"</blockquote>
                  <div className="testimonial-author">
                    <img
                      src={testimonial.avatar || erkak}
                      alt={testimonial.author}
                      className="author-avatar"
                    />
                    <div className="author-info">
                      <div className="author-name">{testimonial.author}</div>
                      <div className="author-position">{testimonial.position}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pagination">
              <div className="pagination-dots">
                <span className="dot active"></span>
                <span className="dot"></span>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="stats-section">
            <h2 className="stats-title">Our numbers</h2>
            <p className="stats-subtitle">
              As the fastest-growing online Job board, our mission is to help
              <br />
              great individuals connect with great companies.
            </p>

            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="cta-section">
            <div className="cta-content">
              <h2>Find your next great opportunity!</h2>
              <p>
                We are taking action to help our freelancers, our clients and the people of the world —<br />
                and so can you.
              </p>
              <button className="btn btn-white">Get Started</button>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <span className="logo-icon">🔵</span>
                <span className="logo-text">Ngull</span>
              </div>
              <p>
                We are taking action to help our freelancers, our
                <br />
                clients and the people of the world — and so can
                <br />
                you.
              </p>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <a href="#">Find Talent</a>
                <a href="#">FAQ</a>
              </div>
              <div className="footer-column">
                <a href="#">Clients</a>
                <a href="#">About Us</a>
              </div>
              <div className="footer-column">
                <a href="#">Blog</a>
              </div>
            </div>

            <div className="newsletter">
              <h4>Newsletter</h4>
              <div className="newsletter-form">
                <input type="email" placeholder="Your email here" className="newsletter-input" />
                <button className="btn btn-primary">Send</button>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">© 2022 Ngulls Global Inc.</div>
            <div className="social-links">
              <a href="#" className="social-link">
                f
              </a>
              <a href="#" className="social-link">
                in
              </a>
              <a href="#" className="social-link">
                𝕏
              </a>
              <a href="#" className="social-link">
                📧
              </a>
              <a href="#" className="social-link">
                📷
              </a>
            </div>
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

export default Clients
