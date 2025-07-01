// // Navbar.jsx
// import { Link } from "react-router-dom";
// import "./stayle/navbar.css"; // agar styleni alohida yozgan bo‘lsang

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <ul className="nav-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/clients">Clients</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/blog">Blog</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
// Navbar.jsx
import { Link } from "react-router-dom";
import "./stayle/navbar.css"; // Styling uchun

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Ngull logotipi va nomi bosilsa bosh sahifaga qaytadi */}
        <Link to="/" className="navbar-logo">  
          <strong>Ngull</strong>
        </Link>
      </div>

      <ul className="navbar-links">
        <li><Link to="/find">Find Talent</Link></li>
        <li><Link to="/clients">Clients</Link></li>
        <li><Link to="/community">Community</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>

     <div className="auth-buttons">
        <button className="outline-btn" onClick={() => onLoginClick()}>Log In</button>
        <button className="filled-btn" onClick={() => onSignupClick()}>Sign Up</button>
      </div>
   
    </nav>
  );
}

export default Navbar;
