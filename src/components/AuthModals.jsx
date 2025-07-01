"use client"

import { useState } from "react"
import "../components/stayle/authmodals.css"

const AuthModals = () => {
  const [showSignUpModal, setShowSignUpModal] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [passportId, setPassportId] = useState("")
  const [password, setPassword] = useState("")

  const handleSignUpSubmit = (e) => {
    e.preventDefault()
    console.log("Sign up with phone:", phoneNumber)
    // Bu yerda sign up logikasi bo'ladi
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    console.log("Login with:", { passportId, password })
    // Bu yerda login logikasi bo'ladi
  }

  const handleOneIdLogin = () => {
    console.log("ONE ID login")
    // Bu yerda ONE ID logikasi bo'ladi
  }

  return (
    <div className="auth-container">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <div className="logo-icon"></div>
              <span className="logo-text">Nguli</span>
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

            <div className="auth-buttons">
              <button className="btn btn-outline" onClick={() => setShowLoginModal(true)}>
                Log In
              </button>
              <button className="btn btn-primary" onClick={() => setShowSignUpModal(true)}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          <h1>Ngull Community Platform</h1>
          <p>Dasturchilar va freelancerlar uchun eng yaxshi platforma</p>
        </div>
      </main>

      {/* Sign Up Modal */}
      {showSignUpModal && (
        <div className="modal-overlay" onClick={() => setShowSignUpModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Kirish yoki ro'yxatdan o'tish</h2>
              <button className="close-btn" onClick={() => setShowSignUpModal(false)}>
                ✕
              </button>
            </div>

            <form onSubmit={handleSignUpSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="phone">Telefon raqami</label>
                <div className="phone-input">
                  <span className="country-code">+998</span>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="__ ___ __ __"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>
                <a href="#" className="forgot-link">
                  Telefon raqamni unutdingizmi ?
                </a>
              </div>

              <button type="submit" className="submit-btn">
                Davom ettirish →
              </button>

              <div className="divider">
                <span>Boshqa yo'l bilan kiring</span>
              </div>

              <button type="button" className="one-id-btn" onClick={handleOneIdLogin}>
                <span className="one-id-logo">ONE</span>
                <span className="one-id-text">ID</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal-overlay" onClick={() => setShowLoginModal(false)}>
          <div className="modal-content login-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="login-title">
                <h2>Tizimga kirish</h2>
                <p>Ariza berish uchun tizimga kiring</p>
              </div>
              <button className="close-btn" onClick={() => setShowLoginModal(false)}>
                ✕
              </button>
            </div>

            <form onSubmit={handleLoginSubmit} className="auth-form">
              <div className="form-group">
                <div className="input-wrapper">
                  <input
                    type="text"
                    placeholder="ID (pasport seriyasi va raqamini kiriting)"
                    value={passportId}
                    onChange={(e) => setPassportId(e.target.value)}
                    required
                    className="id-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-wrapper">
                  <input
                    type="password"
                    placeholder="Parol"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="password-input"
                  />
                </div>
                <div className="login-links">
                  <a href="#" className="forgot-link">
                    Parolni unutdingizmi?
                  </a>
                  <a href="#" className="cabinet-link">
                    Parolni qayta o'rnating
                  </a>
                </div>
                <div className="register-links">
                  <span>Ro'yxatdan o'tmaganmisiz?</span>
                  <a href="#" className="register-link">
                    Shaxsiy kabinet ochish
                  </a>
                </div>
              </div>

              <button type="submit" className="submit-btn login-submit">
                Kirish
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default AuthModals
