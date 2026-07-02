import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./../styles/Home.css";

function LandingNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="landing-navbar">
      <div className="container">

        <div className="logo">
          <NavLink to="/">
            <span className="logo-blue">ZERODHA</span>
          </NavLink>
        </div>

        <button
  className="menu-btn"
  onClick={() => setMenuOpen(!menuOpen)}
>
  ☰
</button>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>
           <NavLink to="/signup">Signup</NavLink>
         </li>

         <li>
          <NavLink
  to="/about"
  className={({ isActive }) =>
    isActive ? "nav-active" : ""
  }
>
  About
</NavLink>
</li>

          <li>
  <NavLink to="/products"
  className={({ isActive }) =>
  isActive ? "nav-active" : ""
  }
  >
    Products
  </NavLink>
</li>

                 <li>
  <NavLink to="/pricing"
   className={({ isActive }) =>
  isActive ? "nav-active" : ""
  }
  >
    Pricing
    </NavLink>
</li>

        <li>
  <NavLink to="/support"
   className={({ isActive }) =>
  isActive ? "nav-active" : ""
  }
  >Support</NavLink>
</li>

          <li>
            <NavLink to="/login" className="login-btn">
              Login
            </NavLink>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default LandingNavbar;