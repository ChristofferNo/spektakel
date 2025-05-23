import React, { useState } from "react";
import "./FindMusiciansPage.css";
import musicians from "../../assets/dummyData/musicians";
import MusicianCard from "../../components/MusicianCard/MusicianCard";

const allGenres = [
  "Acoustic",
  "Blues",
  "Chamber",
  "Classical",
  "Comedy",
  "Electronic",
  "Entertainment",
  "Folk",
  "House",
  "Jazz",
  "Pop",
  "Rock",
  "Funk",
  "DJ",
  "Epic",
];

function FindMusiciansPage({ navigate, setSelectedMusician }) {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("rating");
  const [selectedGenres, setSelectedGenres] = useState([]);

  const toggleGenre = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const filtered = musicians
    .filter(
      (m) =>
        m.name.toLowerCase().includes(search.toLowerCase()) &&
        (selectedGenres.length === 0 ||
          selectedGenres.some((genre) => m.genres.includes(genre)))
    )
    .sort((a, b) => {
      if (sortOrder === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="find-musicians-container">
      <aside className="sidebar">
        <h1>Find Musicians</h1>

        <label className="label">Sök</label>
        <input
          className="search-input"
          type="text"
          placeholder="Sök på namn..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="filter-section">
          <h3>Filtrera efter Genre</h3>
          <div className="genre-tags">
            {allGenres.map((genre) => (
              <span
                key={genre}
                className={`genre-tag ${
                  selectedGenres.includes(genre) ? "active" : ""
                }`}
                onClick={() => toggleGenre(genre)}
              >
                {genre}
              </span>
            ))}
          </div>
        </div>

        <div className="sort-section">
          <h3>Sortera Efter</h3>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="rating">Betyg (Högt till Lågt)</option>
            {/* Du kan lägga till fler sorteringsval här */}
          </select>
        </div>
      </aside>

      <main className="results">
        <div className="header-row">
          <span>{filtered.length} musicians found</span>
        </div>

        <div className="musician-grid">
          {filtered.map((m, i) => (
            <MusicianCard
              key={i}
              navigate={navigate}
              setSelectedMusician={setSelectedMusician}
              activeMusician={m}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default FindMusiciansPage;
