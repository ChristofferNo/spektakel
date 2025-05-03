// src/pages/ProfilePage/ProfilePage.jsx
import "./ProfilePage.css";

function ProfilePage({ musician, navigate }) {
  if (!musician) return <p>Musikern hittades inte.</p>;

  return (
    <div className="profile-container">
      <div className="button-container">

        <button className="back-button" onClick={() => navigate("FindMusiciansPage")}>⬅ Tillbaka</button>
      </div>
      <img src={musician.image} alt={musician.name} className="profile-image" />
      <h1>{musician.name}</h1>
      <p><strong>Genrer:</strong> {musician.genres.join(", ")}</p>
      <p><strong>Betyg:</strong> {musician.rating} ★</p>
      <p><strong>Pris:</strong> Från {musician.price} SEK</p>
      <p><strong>Beskrivning:</strong> Här kommer mer bandinformation.</p>
    </div>
  );
}

export default ProfilePage;
