import "./stayle/blog.css"
import blogg from '../assets/Images/blogg.png'
import bolta from '../assets/Images/bloge.png'
import ishik from '../assets/Images/bloger.png'

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "5 tips to be prepared for 2021 digital marketing trends",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi gravida.",
      date: "Jun 27, 2022",
      category: "Marketing",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "What to expect on your first technical interview?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi gravida.",
      date: "Jun 27, 2022",
      category: "Development",
      image: {blogg},
    },
    {
      id: 3,
      title: "8 innovative design ideas to make your resume pop",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi gravida.",
      date: "Jun 27, 2022",
      category: "Design",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "How to build a great team of marketing experts",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi gravida.",
      date: "Jun 27, 2022",
      category: "Marketing",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      title: "The 4 Javascript frameworks with more active job openings",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi gravida.",
      date: "Jun 27, 2022",
      category: "Development",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      title: "How to start your career as a UI/UX designer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi gravida.",
      date: "Jun 27, 2022",
      category: "Design",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="blog-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon">🔷</div>
                <span className="logo-text">Ngull</span>

          </div>
          <nav className="nav">
            <a href="/" className="nav-link">
              Find Talent
            </a>
            <a href="clients" className="nav-link">
              Clients
            </a>
            <a href="community" className="nav-link">
              Community
            </a>
            <a href="blog" className="nav-link active">
              Blog
            </a>
            <a href="about" className="nav-link">
              About Us
            </a>
          </nav>
          <div className="auth-buttons">
            <button className="btn-secondary">Log In</button>
            <button className="btn-primary">Sign Up</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-main-card">
            <div className="card-icon">📋</div>
            <h2>Resource & Learning Center</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie id tincidunt malesuada pharetra arcu
              turpis cursus mattis fringilla.
            </p>
          </div>
          <div className="hero-side-cards">
            <div className="side-card designer">
              <span className={blogg} >For Designer</span>
            </div>
            <div className="side-card developer">
              <span className={bolta} >For Developer</span>
            </div>
            <div className="side-card marketers">
              <span className={ishik} >For Marketers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="articles">
        <div className="articles-content">
          <h2 className="articles-title">Latest Articles</h2>
          <div className="articles-grid">
            {articles.map((article) => (
              <article key={article.id} className="article-card">
                <div className="article-image">
                  <img src={article.image || "/placeholder.svg"} alt={article.title} />
                  <span className={`category-tag ${article.category.toLowerCase()}`}>{article.category}</span>
                </div>
                <div className="article-content">
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-description">{article.description}</p>
                  <div className="article-footer">
                    <span className="article-date">{article.date}</span>
                    <a href="#" className="read-more">
                      Read More ▶
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="pagination">
            <div className="pagination-dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <span className="pagination-text">1/4</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-content">
          <h2>Find your next great opportunity!</h2>
          <p>We are taking action to help our freelancers, our clients, and the people of the world—and so can you.</p>
          <button className="btn-cta">Get Started</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="logo">
                <div className="logo-icon">🔷</div>
                <span className="logo-text">Ngull</span>
              </div>
              <p>
                We are taking action to help our freelancers, our clients, and the people of Ukraine—and so can you.
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
                  <button className="btn-newsletter">Send</button>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2022 Ngulle Global Inc.</p>
            <div className="social-links">
              <a href="#">📘</a>
              <a href="#">💼</a>
              <a href="#">🐦</a>
              <a href="#">📺</a>
              <a href="#">📷</a>
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

export default Blog
