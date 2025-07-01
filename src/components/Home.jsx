import { Search, MapPin, ChevronDown, Star, Shield, DollarSign, Link } from "lucide-react"
import "./stayle/home.css"
import Images from '../assets/Images/qizbola.png'
import erkak from '../assets/Images/erkak.png'
import ayol from '../assets/Images/ayol.png'
import ish from '../assets/Images/ish.png'
import ishstol from '../assets/Images/ishstol.png'
const Home = () => {
  return (
    <div className="home">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="nav-brand">
            <div className="logo">
              <div className="logo-icon"></div>
               <Link to="/" className="logo-link">
                  <img
            src="/logo.png" // logotiping manzili
            alt="Ngull"
            style={{ width: "32px", marginRight: "8px" }}
          />
                   <span>Nguli</span>
          </Link>
              <span>Nguli</span>
            </div>
          </div>
          <nav className="nav-menu">
            <a href="/" className="nav-link">
              Find Talent
            </a>
         <a href="clients" className="nav-link">
              Clients
            </a>
            <a href="communiyt" className="nav-link">
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
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-left">
              <h1 className="hero-title">
                Portal Job for
                <br />
                Developer, Designer,
                <br />
                and Marketers
              </h1>
              <p className="hero-subtitle">
                Jobs is a curated job board of the best jobs for developers, designers and marketers in the tech
                industry.
              </p>

              <div className="search-container">
                <div className="search-box">
                  <Search className="search-icon" />
                  <input type="text" placeholder="Search jobs..." />
                </div>
                <div className="filter-box">
                  <MapPin className="filter-icon" />
                  <select>
                    <option>Location</option>
                    <option>Remote</option>
                    <option>New York</option>
                    <option>San Francisco</option>
                  </select>
                  <ChevronDown className="dropdown-icon" />
                </div>
                <div className="filter-box">
                  <select>
                    <option>Department</option>
                    <option>Engineering</option>
                    <option>Design</option>
                    <option>Marketing</option>
                  </select>
                  <ChevronDown className="dropdown-icon" />
                </div>
                <button className="search-btn">Search</button>
              </div>

              <div className="trusted-by">
                <span>Trusted by:</span>
                <div className="company-logos">
                  <div className="company-logo">Google</div>
                  <div className="company-logo">Microsoft</div>
                  <div className="company-logo">Adobe</div>
                </div>
              </div>
            </div>

            <div className="hero-right">
              <div className="hero-image">
                <div className="job-stats">
                  <div className="stat-number">70,000+</div>
                  <div className="stat-label">Jobs</div>
                </div>
                <img src={Images} alt="Professional woman with laptop" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="featured-jobs">
        <div className="container">
          <h2 className="section-title">Featured Job</h2>
          <p className="section-subtitle">
            Jobs is a curated job board of the best jobs for developers, designers and marketers in the tech industry.
          </p>

          <div className="job-cards">
            <div className="job-card">
              <div className="job-icon developer">UI</div>
              <h3>Developer</h3>
              <p>
                Jobs is a curated job board of the best jobs for developers, designers and marketers in the tech
                industry.
              </p>
              <ul className="job-features">
                <li>• 25K+ contracts</li>
                <li>• Lead skills</li>
              </ul>
              <button className="job-btn">Browse Job</button>
            </div>

            <div className="job-card featured">
              <div className="job-icon designer">⚡</div>
              <h3>Designer</h3>
              <p>
                Jobs is a curated job board of the best jobs for developers, designers and marketers in the tech
                industry.
              </p>
              <ul className="job-features">
                <li>• 45K+ contracts</li>
                <li>• Lead skills</li>
              </ul>
              <button className="job-btn primary">Browse Job</button>
            </div>

            <div className="job-card">
              <div className="job-icon marketer">📊</div>
              <h3>Marketers</h3>
              <p>
                Jobs is a curated job board of the best jobs for developers, designers and marketers in the tech
                industry.
              </p>
              <ul className="job-features">
                <li>• 35K+ contracts</li>
                <li>• Lead skills</li>
              </ul>
              <button className="job-btn">Browse Job</button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <div className="container">
          <div className="why-content">
            <div className="why-left">
              <span className="section-label">For Clients</span>
              <h2>Why businesses turn to Nguli</h2>

              <div className="features">
                <div className="feature">
                  <Star className="feature-icon" />
                  <div>
                    <h4>Proof of quality</h4>
                    <p>Check any pro's work samples, client reviews, and identity verification.</p>
                  </div>
                </div>

                <div className="feature">
                  <Shield className="feature-icon" />
                  <div>
                    <h4>Safe and secure</h4>
                    <p>Focus on your work knowing we help protect your data and privacy.</p>
                  </div>
                </div>

                <div className="feature">
                  <DollarSign className="feature-icon" />
                  <div>
                    <h4>No cost until you hire</h4>
                    <p>Interview and pay freelancers only when ready to start working.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="why-right">
              <img src={ishstol} alt="Professional woman working" />
            </div>
          </div>
        </div>
      </section>

      {/* Find Work */}
      <section className="find-work">
        <div className="container">
          <h2 className="section-title">Find great work</h2>
          <p className="section-subtitle">
            Meet clients you're excited to work with and take your career or business to new heights.
          </p>

          <div className="work-cards">
            <div className="work-card">
              <div className="work-icon">🎯</div>
              <h3>Find opportunities for every stage of your freelance career</h3>
              <p>You bring the skills. We'll make earning easy.</p>
              <button className="work-btn">Find Work</button>
            </div>

            <div className="work-image">
              <img src={ish} alt="Workspace" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">Trusted by leading brands and startups</h2>

          <div className="testimonial-cards">
            <div className="testimonial-card">
              <p>
                "One of the advantages of utilizing freelancers is finding talent with different skills quickly as our
                needs change."
              </p>
              <div className="testimonial-author">
                <img src={erkak} alt="Author" />
                <div>
                  <strong>Tina Rosser</strong>
                  <span>Director of Content Experience</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <p>
                "Nguli enables us to differentiate ourselves from our competitors and produce content at a higher
                caliber."
              </p>
              <div className="testimonial-author">
                <img src={ ayol} alt="Author" />
                <div>
                  <strong>Tina Rosser</strong>
                  <span>Director of Content Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Find your next great opportunity!</h2>
          <p>Upload your resume. It only takes a few seconds, and you can edit it later. We'll save it for you.</p>
          <button className="cta-btn">Get Started</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <div className="logo-icon"></div>
                <span>Nguli</span>
              </div>
              <p>We are built to deliver the best freelancing experience for both clients and freelancers.</p>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4>Find Talent</h4>
                <a href="#">FAQ</a>
                <a href="#">About Us</a>
              </div>

              <div className="footer-column">
                <h4>Clients</h4>
              </div>

              <div className="footer-column">
                <h4>Blog</h4>
              </div>

              <div className="footer-column">
                <h4>Newsletter</h4>
                <p>Stay updated</p>
                <div className="newsletter">
                  <input type="email" placeholder="Your email here" />
                  <button>Send</button>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2023 Nguli. All rights reserved.</p>
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

export default Home
