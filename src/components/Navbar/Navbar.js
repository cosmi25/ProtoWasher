import React from "react";
import { Link } from "react-router-dom";
import {Dropdown} from 'react-bootstrap'
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link style={{paddingLeft: 540}} className="navbar-brand" to="/">
     ProtoWasher
    </Link>
    <div style={{paddingLeft: 20}}>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to="/"
            className={
              window.location.pathname === "/" || window.location.pathname === "/Home"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Home
          </Link>
        </li>

       
<li className="nav-item">
<Dropdown>
  <Dropdown.Toggle style={{backgroundColor: 'rgb(250,250,250)', color: 'black', border: 'solid rgb(250,250,250) 1px'}}>
  Research
  </Dropdown.Toggle>
  <Dropdown.Menu  >
    <Dropdown.Item  href="/research1">Research1</Dropdown.Item>
    <Dropdown.Item href="/research2">Research2</Dropdown.Item>

  </Dropdown.Menu>
</Dropdown>
          {/* <Link
            to="/research"
            className={
              window.location.pathname === "/research"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Research
          </Link> */}
        </li>
        
        {/* <li className="nav-item">
          <Link
            to="/research"
            className={
              window.location.pathname === "/research"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Research
          </Link>
        </li> */}
          <li className="nav-item">
          <Link
            to="/prototype"
            className={
              window.location.pathname === "/prototype"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Prototype
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/bibliography"
            className={
              window.location.pathname === "/bibliography"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Bibliography
          </Link>
        </li>
      
      </ul>
    </div>
  </nav>
);

export default Navbar;
