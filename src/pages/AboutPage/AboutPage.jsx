import "./AboutPage.css";
import GruppBild from "../../assets/Images/Gruppbild_3.svg";

function AboutPage({ navigate }) {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">Om Spektakel</h1>

        <div className="about-text">
          <p>
            Spektakel är en plattform som kopplar samman studentmusiker med
            arrangörer i Uppsalas levande studentliv.
          </p>

          <h2>Vår Vision</h2>
          <p>
            Vi tror på kraften i livemusik för att förvandla vanliga evenemang
            till oförglömliga upplevelser. Vårt mål är att göra det enkelt för
            nationer, föreningar och andra att hitta rätt artist – samtidigt som
            vi ger studentmusiker en chans att synas och utvecklas.
          </p>

          <div className="about-image-wrapper">
            <img
              src={GruppBild}
              alt="Livemusik i Uppsala"
              className="about-image"
            />
          </div>

          <h2>Så Började Det</h2>
          <p>
            Spektakel grundades 2024 av tre musikälskande studenter som själva
            upplevt hur svårt det kan vara att hitta spelningar och samarbeten i
            Uppsala. Det började som en enkel idé – som vi vill ska växa till en
            självklar mötesplats för musik och studentkultur.
          </p>

          <h2>Våra Värderingar</h2>
          <ul>
            <li>
              <strong>Gemenskap först:</strong> Vi sätter Uppsalas studentliv i
              centrum.
            </li>
            <li>
              <strong>Transparens:</strong> Tydlig kommunikation, ärliga omdömen
              och rättvisa villkor.
            </li>
            <li>
              <strong>Möjligheter för alla:</strong> Alla ska kunna hitta sin
              scen, oavsett bakgrund eller erfarenhet.
            </li>
            <li>
              <strong>Kvalitet:</strong> Vi vill skapa positiva upplevelser för
              både musiker och arrangörer.
            </li>
          </ul>

          <h2>Bli en Del av Spektakel</h2>
          <p>
            Oavsett om du är musiker eller arrangör är Spektakel här för att
            hjälpa dig skapa nästa spektakulärt oförglömliga upplevelse.
          </p>

          <div className="button-group">
            <button
              className="btn btn-primary"
              onClick={() => navigate("RegisterPage")}
            >
              Registrera dig
            </button>

            <button
              className="btn btn-outline"
              onClick={() => navigate("AboutPage")}
            >
              Kontakta oss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
