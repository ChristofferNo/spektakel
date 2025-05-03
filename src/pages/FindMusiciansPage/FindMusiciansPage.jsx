import React, { useState } from "react";
import "./FindMusiciansPage.css";
import adriansBandImage from "../../assets/Images/placeHolderImage.jpeg";
import BogdanBreakdance from "../../assets/Images/VinterBogdan.jpeg";
import RubenOchTrubadurerna from "../../assets/Images/RubenTrub.jpeg";


const musicians = [
  {
    name: "Adrians Band",
    genres: ["Folk", "Acoustic"],
    rating: 4.9,
    price: 2200,
    image: adriansBandImage,
  },
  {
    name: "Bogdan Breakdance",
    genres: ["Funk", "Jazz", "Coola"],
    rating: 4.8,
    price: 4500,
    image: BogdanBreakdance,
  },
  {
    name: "Ruben och Trubadurerna",
    genres: ["Classical", "Chamber"],
    rating: 4.8,
    price: 4000,
    image: RubenOchTrubadurerna,
  },
  {
    name: "DJ Studentmix",
    genres: ["Electronic", "Pop"],
    rating: 4.7,
    price: 3200,
    image: "https://via.placeholder.com/300x200",
  },
  {
    name: "Stand-up Students",
    genres: ["Comedy", "Entertainment"],
    rating: 4.6,
    price: 3000,
    image: "https://via.placeholder.com/300x200",
  },
];

function FindMusiciansPage({ navigate, setSelectedMusician }) {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("rating");

  const filtered = musicians
    .filter((m) => m.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => b.rating - a.rating); // Kan utökas baserat på sortOrder

  return (
    <div className="find-musicians-container">
      <aside className="sidebar">
        <h1>Find Musicians</h1>

        <label className="label">Search</label>
        <input
          className="search-input"
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="filter-section">
          <h3>Filter by Genre</h3>
          <div className="genre-tags">
            {[
              "Acoustic", "Alternative", "Blues", "Chamber", "Classical",
              "Comedy", "Electronic", "Entertainment", "Folk", "House",
              "Jazz", "Pop", "Rock", "Funk", "Coola"
            ].map((genre) => (
              <span key={genre} className="genre-tag">{genre}</span>
            ))}
          </div>
        </div>

        <div className="sort-section">
          <h3>Sort By</h3>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="rating">Rating (High to Low)</option>
            {/* Lägg till fler sorteringar vid behov */}
          </select>
        </div>
      </aside>

      <main className="results">
        <div className="header-row">
          <span>{filtered.length} musicians found</span>
        </div>

        <div className="musician-grid">
          {filtered.map((m, i) => (
            <div
              className="musician-card"
              key={i}
              onClick={() => {
                setSelectedMusician(m);
                navigate("ProfilePage");
              }}
            >
              <img src={m.image} alt={m.name} className="musician-img" />
              <h3>{m.name}</h3>
              <div className="genres">
                {m.genres.map((g) => (
                  <span key={g} className="genre-tag">{g}</span>
                ))}
              </div>
              <div className="rating-price">
                <span className="rating"> ★ {m.rating}</span>
                <span className="price">Från {m.price} SEK</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default FindMusiciansPage;
