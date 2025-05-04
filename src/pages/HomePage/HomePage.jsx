import "../HomePage/HomePage.css";
import { useEffect, useState } from "react";
import musicians from "../../assets/dummyData/musicians";

function HomePage({ navigate }) {
  const slideshowBands = musicians.slice(0, 3);
  const previewMusicians = musicians.slice(0, 3);
  const [currentIndex, setCurrentIndex] = useState(0);

  const steps = [
    {
      number: 1,
      title: "Skapa ett konto",
      description:
        "Registrera dig som musiker för att visa upp din talang eller som evenemangsarrangör för att hitta den perfekta akten.",
    },
    {
      number: 2,
      title: "Bli upptäckt",
      description:
        "Fyll i din profil med exempel, priser och tillgänglighet för att locka bokningar.",
    },
    {
      number: 3,
      title: "Bli bokad",
      description:
        "Ta emot bokningsförfrågningar, kommunicera med arrangörer och uppträd på fantastiska evenemang.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slideshowBands.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // byt bild var 5:e sekund
    return () => clearInterval(interval);
  }, [slideshowBands.length]);

  return (
    <div className="homePageContainer">
      <div className="hero-container">
        {slideshowBands.map((band, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${band.image})` }}
          />
        ))}
        <div className="dark-overlay">
          <div className="hero-overlay">
            <h1>Uppsalas främsta plattform för studentmusiker</h1>
            <p className="middle-paragraph">
              Vi för samman musiker med nationer och event-organisatörer i
              Uppsala
            </p>
            <button
              onClick={() => navigate("FindMusiciansPage")}
              className="hero-button"
            >
              Hitta musiker
            </button>
          </div>
        </div>
      </div>
      <div className="musicians-textbox">
        <div>Musiker</div>
        <a
          className="View-all-btn"
          onClick={() => {
            navigate("FindMusiciansPage");
          }}
        >
          Se alla →
        </a>
      </div>

      <div className="artists-preview">
        {previewMusicians.map((musician, i) => (
          <div key={i} className="artist-card">
            <img src={musician.image} alt="Thumbnail" className="artist-img" />
            <div className="musicians-name">{musician.name}</div>
          </div>
        ))}
      </div>
      <div className="how-it-works">
        <h2>Så här fungerar det</h2>

        <div className="steps-container">
          {steps.map((step) => (
            <div key={step.number} className="step-card">
              <div className="step-number">
                <span>{step.number}</span>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
