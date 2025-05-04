// src/components/Footer/Footer.jsx
import React from "react";
import "./Footer.css";

function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>Redo att lyfta dina evenemang till spektakulära höjder?</h2>
        <p>
          Gå med i Spektakel idag och hitta den perfekta musikaliska matchningen
          för ditt nästa spektakel.
        </p>
      </div>
      <div className="footer-links">
        <div>
          <h3>Spektakel</h3>
          <p>
            Vi kopplar ihop studentmusiker med eventarrangörer i Uppsala sedan
            2025.
          </p>
        </div>
        <div>
          <h4>För Musiker</h4>
          <ul>
            <li>
              <button onClick={() => navigate("FindMusiciansPage")}>
                Skapa Profil
              </button>
            </li>
            <li>
              <button onClick={() => navigate("HomePage")}>
                Hur det fungerar
              </button>
            </li>
            {/* <li><button onClick={() => navigate('FindMusiciansPage')}>Skapa Profil</button></li> */}
          </ul>
        </div>
        <div>
          <h4>För Arrangörer</h4>
          <ul>
            <li>
              <button onClick={() => navigate("FindMusiciansPage")}>
                Hitta ditt nästa spektakel
              </button>
            </li>
            <li>
              <a href="#">Skapa konto</a>
            </li>
            <li>
              <a href="#">Eventresurser</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Kontakt</h4>
          <ul>
            <li>
              <a href="#">Kontakta oss</a>
            </li>
            <li>
              <button onClick={() => navigate("AboutPage")}>Om oss</button>
            </li>
            <li>
              <a href="mailto:spektakel2025@gmail.com">
                spektakel2025@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 Spektakel. Alla rättigheter förbehållna.</span>
        <div>
          <a href="#">Integritetspolicy</a>
          <span> · </span>
          <a href="#">Användarvillkor</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
