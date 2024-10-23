import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 
import myLogo from "../assets/myLogo.jpg"; 
import hamburgerIcon from "../assets/hamburgerIcon.png"; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logos">
      <div className="navbar-logo">
        <img src={myLogo} alt="Lets Code" className="logo" />
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <img src={hamburgerIcon} alt="Menu" className="hamburger-logo" />
      </div>
      </div>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a href="/" >Home</a>
          </li>
          <li>
          <Link to="/About">About</Link>
          </li>
          <li>
          <Link to="/softwareProjects">Software Projects</Link>
          </li>
          <li>
          <Link to="/Designing">Graphic Designing</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
