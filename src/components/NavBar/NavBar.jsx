// src/components/NavBar.jsx
// import React from "react";
// import "./NavBar.css"; // Import your CSS file for styling

// function NavBar({ navigate }) {
//   return (
//     <nav className="navBar">
//       <div className="logoContainer">
//         <div
//           className="logo"
//           role="button"
//           onClick={() => navigate("HomePage")}
//         >
//           Spektakel
//         </div>
//       </div>
//       <div className="navItems">
//         <ul>
//           <li onClick={() => navigate("HomePage")}>Hem</li>
//           <li onClick={() => navigate("FindMusiciansPage")}>Hitta musiker</li>
//           <li onClick={() => navigate("AboutPage")}>Om oss</li>
//           {/* Add more items as you create other pages */}
//           {/* <li onClick={() => navigate('AboutPage')}>About</li> */}
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;
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
        </ul>
      </div>
      {menuOpen && (
        <div className="mobileBackdrop" onClick={handleToggleMenu}></div>
      )}
    </nav>
  );
}

export default NavBar;
