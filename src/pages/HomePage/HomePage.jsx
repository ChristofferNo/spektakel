import "../HomePage/HomePage.css";
import musicians from "../../assets/dummyData/musicians";
import MusicianCard from "../../components/MusicianCard/MusicianCard";

function HomePage({ navigate, setSelectedMusician }) {
  const previewMusicians = musicians.slice(0, 3);
  return (
    <div className="homePageContainer">
      <div className="hero-container">
        <div className="dark-overlay">
          <div className="hero-overlay">
            <h1>Uppsalas främsta plattform för studentmusiker</h1>
            <p>
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
      <div>testst</div>
      <div>testst</div>
      <div>testst</div>
      <div>testst</div>
      <div>testst</div>
      <div>testst</div>
      <div>testst</div>
      <div>testst</div>
      <div>testst</div>
      <div>testst</div>
      <div>testst</div>
      <div>testst</div>
      <div>testst</div>
      <div>testst</div>
      <div>testst</div>
      <div>testst</div>
      <div>testst</div>
      <div>testst</div>
      {/* <div style={{ height: "100px" }}> test</div>

      <div className="artists-preview">
        {previewMusicians.map((musician, i) => (
          <div
            key={i}
            style={{ width: "300px", height: "200px", overflow: "hidden" }}
          >
            <img
              src={musician.image}
              alt="Thumbnail"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // ✅ Makes it fill without distortion
              }}
            />
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default HomePage;
