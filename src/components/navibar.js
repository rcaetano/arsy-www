import React from "react"
import { Link } from "gatsby"
import style from "../pages/style.css"
import logo from "../images/arsy-sig-knot.png"

const Navibar = ({ location, title }) => {
  return (
    <nav className="navbar navbar-expand flex-column monochrome py-5">
      <Link to="/" className="nav-link blossom-brand">
        <img src={logo} alt="Logo" />
      </Link>
      <div className="navbar-nav-scroll  navbar-right">
        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item"></li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              about
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link">
              projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/archives" className="nav-link">
              archives
            </Link>
          </li>
        </ul>
        <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
      </div>
    </nav>
  )
}

export default Navibar
