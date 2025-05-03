// import React, { useState } from "react";
// import "./FindMusiciansPage.css";
// import musicians from "../../assets/dummyData/musicians";

// import MusicianCard from "../../components/MusicianCard/MusicianCard";


// function FindMusiciansPage({ navigate, setSelectedMusician }) {
//   const [search, setSearch] = useState("");
//   const [sortOrder, setSortOrder] = useState("rating");

//   const filtered = musicians
//     .filter((m) => m.name.toLowerCase().includes(search.toLowerCase()))
//     .sort((a, b) => b.rating - a.rating); // Kan utökas baserat på sortOrder

//   return (
//     <div className="find-musicians-container">
//       <aside className="sidebar">
//         <h1>Find Musicians</h1>

//         <label className="label">Search</label>
//         <input
//           className="search-input"
//           type="text"
//           placeholder="Search by name..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         <div className="filter-section">
//           <h3>Filter by Genre</h3>
//           <div className="genre-tags">
//             {[
//               "Acoustic", "Alternative", "Blues", "Chamber", "Classical",
//               "Comedy", "Electronic", "Entertainment", "Folk", "House",
//               "Jazz", "Pop", "Rock", "Funk", "Coola"
//             ].map((genre) => (
//               <span key={genre} className="genre-tag">{genre}</span>
//             ))}
//           </div>
//         </div>

//         <div className="sort-section">
//           <h3>Sort By</h3>
//           <select
//             value={sortOrder}
//             onChange={(e) => setSortOrder(e.target.value)}
//           >
//             <option value="rating">Rating (High to Low)</option>
//             {/* Lägg till fler sorteringar vid behov */}
//           </select>
//         </div>
//       </aside>

//       <main className="results">
//         <div className="header-row">
//           <span>{filtered.length} musicians found</span>
//         </div>

//         <div className="musician-grid">
//           {filtered.map((m, i) => (
//             <MusicianCard
//               key={i}
//               navigate={navigate}
//               setSelectedMusician={setSelectedMusician}
//               activeMusician={m}
//             />
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }

// export default FindMusiciansPage;



import React, { useState } from "react";
import "./FindMusiciansPage.css";
import musicians from "../../assets/dummyData/musicians";
import MusicianCard from "../../components/MusicianCard/MusicianCard";

const allGenres = [
  "Acoustic", "Alternative", "Blues", "Chamber", "Classical",
  "Comedy", "Electronic", "Entertainment", "Folk", "House",
  "Jazz", "Pop", "Rock", "Funk", "Coola"
];

function FindMusiciansPage({ navigate, setSelectedMusician }) {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("rating");
  const [selectedGenres, setSelectedGenres] = useState([]);

  const toggleGenre = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre)
        ? prev.filter((g) => g !== genre)
        : [...prev, genre]
    );
  };

  const filtered = musicians
    .filter((m) =>
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
            {allGenres.map((genre) => (
              <span
                key={genre}
                className={`genre-tag ${selectedGenres.includes(genre) ? "active" : ""}`}
                onClick={() => toggleGenre(genre)}
              >
                {genre}
              </span>
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
