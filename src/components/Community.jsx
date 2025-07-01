

"use client"

import { useState } from "react"
import "../components/stayle/community.css"

import suxbat from '../assets/Images/suxbat.png'
import ayol from '../assets/Images/ayol.png'


            {/* <nav className="nav">
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
            </nav> */}
"use client"

// Main App Component
function Community() {
  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)

  return (
    <div className="app">
      <Header onLoginClick={() => setShowLogin(true)} onSignupClick={() => setShowSignup(true)} />
      <main>
        <HeroSection />
        <div className="main-content">
          <div className="content-grid">
            <CommunityActivity />
            <Sidebar />
          </div>
        </div>
      </main>
      <Footer />

      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onSwitchToSignup={() => {
            setShowLogin(false)
            setShowSignup(true)
          }}
        />
      )}

      {showSignup && (
        <SignupModal
          onClose={() => setShowSignup(false)}
          onSwitchToLogin={() => {
            setShowSignup(false)
            setShowLogin(true)
          }}
        />
      )}
    </div>
  )
}

// Header Component
function Header({ onLoginClick, onSignupClick }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <div className="logo">
            <div className="logo-icon">N</div>
            <span className="logo-text">Ngull</span>
          </div>
         <nav className="nav">
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
        </div>
        <div className="header-right">
          <button className="btn btn-outline" onClick={onLoginClick}>
            Log In
          </button>
          <button className="btn btn-primary" onClick={onSignupClick}>
            Sign Up
          </button>
        </div>
      </div>
    </header>
  )
}

// Hero Section Component
function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-title">
          <h1>For the Community, by the Community</h1>
        </div>
        <div className="hero-content">
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
              alt="Community working together"
            />
          </div>
          <div className="hero-card">
            <div className="card-header">
              <div className="card-icon">📦</div>
              <h3>Working on Ngull</h3>
            </div>
            <p>
              In this journey, you'll get an introduction to working on Ngull, submitting proposals, and tips for
              landing your first job.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Community Activity Component
function CommunityActivity() {
  const posts = [
    {
      id: 1,
      author: "Anika Herwitz",
      role: "Freelancer",
      time: "08-13-2021 08:36 PM",
      content:
        "If you leave money on the desk and give someone the key to the room. And not only do you take their key away after the first time you see them steal the but keep restocking the money each week, will who would be responsible for taking away their key and firing them?",
      likes: 22,
      comments: 1,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 2,
      author: "Kierra Gouse",
      role: "Freelancer",
      time: "08-13-2021 09:30 PM",
      content:
        "They have a responsibility to document that work in a specific way: The following cases do not qualify for payment protection: Time segments in the Work Diary that don't meet all of the qualification criteria above.",
      likes: 21,
      comments: 4,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 3,
      author: "Marley Vetrovs",
      role: "Freelancer",
      time: "08-13-2021 08:36 PM",
      content: "Morbi urna mi diam lacus imperdiet amet ut faucibus. Magna faucibus ac neque consectetur.",
      likes: 12,
      comments: 0,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    },
  ]

  return (
    <div className="community-activity">
      <div className="activity-header">
        <h2>Community Activity</h2>
      </div>
      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <div className="post-header">
              <img src={post.avatar || "/placeholder.svg"} alt={post.author} className="avatar" />
              <div className="post-info">
                <div className="post-meta">
                  <h4>{post.author}</h4>
                  <span className="time">{post.time}</span>
                </div>
                <p className="role">{post.role}</p>
              </div>
              <button className="more-btn">•••</button>
            </div>
            <p className="post-content">{post.content}</p>
            <div className="post-actions">
              <button className="action-btn">❤️ {post.likes}</button>
              <button className="action-btn">💬 {post.comments}</button>
              <button className="action-btn">↩️ Reply</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Sidebar Component
function Sidebar() {
  const articles = [
    {
      title: "What to expect on your first technical interview?",
      category: "Development",
      date: "Jun 27, 2022",
    },
    {
      title: "8 innovative design ideas to make your resume pop",
      category: "Design",
      date: "Jun 27, 2022",
    },
    {
      title: "How to build a great team of marketing experts",
      category: "Design",
      date: "Jun 27, 2022",
    },
  ]

  const categories = ["Development", "Design", "Marketing"]

  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <h3>Latest articles</h3>
        <div className="articles">
          {articles.map((article, index) => (
            <div key={index} className="article">
              <div className="article-category">
                <span className="category-dot"></span>
                <span className="category-name">{article.category}</span>
              </div>
              <h4 className="article-title">{article.title}</h4>
              <p className="article-date">{article.date}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar-section">
        <h3>Categories</h3>
        <div className="categories">
          {categories.map((category, index) => (
            <div key={index} className="category-item">
              <span>{category}</span>
              <span className="arrow">→</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cta">
        <div className="cta-content">
          <h2>Find your next great opportunity!</h2>
          <p>We are taking action to help our freelancers, our clients, and the people of the world— and so can you.</p>
          <button className="btn btn-white">Get Started</button>
        </div>
      </div>

      <div className="footer-links">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo">
                <div className="logo-icon white">N</div>
                <span className="logo-text">Ngull</span>
              </div>
              <p>
                We are taking action to help our freelancers, our clients, and the people of Ukraine—and so can you.
              </p>
            </div>

            <div className="footer-column">
              <h4>Links</h4>
              <a href="#">Find Talent</a>
              <a href="#">Clients</a>
              <a href="#">Blog</a>
              <a href="#">FAQ</a>
              <a href="#">About Us</a>
            </div>

            <div className="footer-column">
              <h4>Newsletter</h4>
              <div className="newsletter">
                <input type="email" placeholder="Your email here" />
                <button className="btn btn-blue">Send</button>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2022 Ngull® Global Inc.</p>
            <div className="footer-legal">
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Login Modal Component
function LoginModal({ onClose, onSwitchToSignup }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      alert("Login successful!")
      setIsLoading(false)
      onClose()
    }, 1000)
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Log In</h2>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <a href="#" className="forgot-link">
            Forgot password?
          </a>
          <button type="submit" className="btn btn-primary full-width" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Log In"}
          </button>
          <p className="switch-text">
            Don't have an account?
            <button type="button" onClick={onSwitchToSignup} className="switch-btn">
              Sign up
            </button>
          </p>
        </form>
      </div>
    </div>
  )
}

// Signup Modal Component
function SignupModal({ onClose, onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!")
      return
    }
    setIsLoading(true)
    setTimeout(() => {
      alert("Account created successfully!")
      setIsLoading(false)
      onClose()
    }, 1000)
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Sign Up</h2>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              required
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary full-width" disabled={isLoading}>
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>
          <p className="switch-text">
            Already have an account?
            <button type="button" onClick={onSwitchToLogin} className="switch-btn">
              Log in
            </button>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Community
