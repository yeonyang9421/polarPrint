import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./NavBar.css";

const NavBar = () => {
  const [isClicked, setIsClicked] = React.useState(false);
  const [isButton, setIsButton] = React.useState(true);

  const handleOnClickHamburger = () => {
    setIsClicked(!isClicked);
  };

  const closeMobileMenu = () => {
    setIsClicked(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setIsButton(false);
    } else {
      setIsButton(true);
    }
  };

  React.useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navBarContainer">
          <Link to="/" className="navbarLogo" onClick={closeMobileMenu}>
          폴라코드 출력앱<i className="fab fa-typo3" />
          </Link>
          <div className="menuIcon" onClick={handleOnClickHamburger}>
            <i className={isClicked ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={isClicked ? "navMenu active" : "navMenu"}>
            <li className="navItem">
              <Link to="/" className="navLinks" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
