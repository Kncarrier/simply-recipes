import React, { useState } from "react"
import { Link } from "gatsby"
import { FaAlignJustify } from "react-icons/fa"
import logo from "../assets/images/logo.svg"

const Navbar = () => {
  const [show, setShow] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="simply recipes" />
          </Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FaAlignJustify />
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link
            className="nav-link"
            to="/"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Home
          </Link>
          <Link
            className="nav-link"
            to="/recipes"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Recipes
          </Link>
          <Link
            className="nav-link"
            to="/tags"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Tags
          </Link>
          <Link
            className="nav-link"
            to="/about"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            About
          </Link>
          <div className="nav-link contact-link" onClick={() => setShow(false)}>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
