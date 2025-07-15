import React, { useState } from "react";
import "./NavBar.css";
import logoImage from "../../assets/Images/Logo_Spektakel_black_front_4.svg";

function NavBar({ navigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavigation = (page) => {
    navigate(page);
    setMenuOpen(false);
  };

  return (
    <nav className="navBar">
      <div className="navBarInner">
        <div
          className="logoContainer"
          onClick={() => handleNavigation("HomePage")}
          role="button"
        >
          <img src={logoImage} alt="Spektakel logotyp" className="logoImage" />
        </div>
        <div className="navItemsDesktop">
          <ul>
            <li onClick={() => handleNavigation("HomePage")}>Hem</li>

            <li onClick={() => handleNavigation("FindMusiciansPage")}>
              Hitta musiker
            </li>

            <li onClick={() => handleNavigation("AboutPage")}>Om oss</li>

            <li onClick={() => handleNavigation("LoginPage")}>Logga In</li>

            <li onClick={() => handleNavigation("RegisterPage")}>
              Skapa Konto
            </li>
          </ul>
        </div>
        <div
          className="hamburger"
          onClick={handleToggleMenu}
          aria-label="Öppna meny"
        >
          ☰
        </div>
      </div>
      <div className={`navItemsMobile${menuOpen ? " open" : ""}`}>
        <ul>
          <li onClick={() => handleNavigation("HomePage")}>Hem</li>

          <li onClick={() => handleNavigation("FindMusiciansPage")}>
            Hitta musiker
          </li>

          <li onClick={() => handleNavigation("AboutPage")}>Om oss</li>

          <li onClick={() => handleNavigation("LoginPage")}>Logga In</li>
        </ul>
      </div>
      {menuOpen && (
        <div className="mobileBackdrop" onClick={handleToggleMenu}></div>
      )}
    </nav>
  );
}

export default NavBar;
