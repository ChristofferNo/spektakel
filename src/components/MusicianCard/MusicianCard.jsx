import "./MusicianCard.css";

function MusicianCard({ navigate, setSelectedMusician, activeMusician, key }) {
  return (
    <div
      className="musician-card"
      key={key}
      onClick={() => {
        setSelectedMusician(activeMusician);
        navigate("ProfilePage");
      }}
    >
      <img
        src={activeMusician.image}
        alt={activeMusician.name}
        className="musician-img"
      />
      <h3>{activeMusician.name}</h3>
      <div className="genres">
        {activeMusician.genres.map((g) => (
          <span key={g} className="genre-tag">
            {g}
          </span>
        ))}
      </div>
      <div className="rating-price">
        <span className="rating"> ★ {activeMusician.rating}</span>
        <span className="price">{activeMusician.price}</span>
      </div>
    </div>
  );
}

export default MusicianCard;
