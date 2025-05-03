import "../HomePage/HomePage.css";


function HomePage({navigate}) {
  return (
    <div className="homePageContainer">
      <div className="hero-container">
        <div className="dark-overlay">
      <div className="hero-overlay">
        <h1>Uppsalas främsta plattform för studentmusiker</h1>
        <p>Vi för samman nationer, event organisatörer och musiker i Uppsala</p>
        <button onClick={() => navigate('FindMusiciansPage')} className="hero-button">Hitta musiker</button>
      </div>
      </div>
    </div>
      
    </div>
  );
}

export default HomePage;