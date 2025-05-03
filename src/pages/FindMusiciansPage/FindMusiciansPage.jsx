
// src/pages/FindMusiciansPage.jsx

// import "./FindMusiciansPage.css";
// import Button from "../../components/Button"


// const musiker = [
//   {
//     namn: "Alice Andersson",
//     instrument: "Sång & Gitarr",
//     beskrivning: "Singer-songwriter med akustisk stil.",
//     bild: "https://via.placeholder.com/150",
//   },
//   {
//     namn: "Erik Ekström",
//     instrument: "DJ (Techno & House)",
//     beskrivning: "Spelat på studentklubbar i hela stan.",
//     bild: "https://via.placeholder.com/150",
//   },
// ];


// function FindMusiciansPage() {
//   return (
//     <div className="find-page">
//       <h1> Hitta Musiker</h1>
//       <p>Välj bland duktiga studentmusiker för era evenemang.</p>

//       <div className="musiker-lista">
//         {musiker.map((m, i) => (
//           <div className="musiker-kort" key={i}>
//             <img src={m.bild} alt={m.namn} />
//             <h3>{m.namn}</h3>
//             <p className="instrument">{m.instrument}</p>
//             <p className="beskrivning">{m.beskrivning}</p>
//             <Button text="Boka" onClick={() => alert(`Bokar ${m.namn}`)} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }





// export default FindMusiciansPage;



// src/pages/FindMusiciansPage.jsx
import React, { useState } from "react";
import "./FindMusiciansPage.css";

const musicians = [
  {
    name: "Acoustic Dreams",
    genres: ["Folk", "Acoustic"],
    rating: 4.9,
    price: 2200,
    image: "https://via.placeholder.com/300x200",
  },
  {
    name: "The Uppsala Jazz Ensemble",
    genres: ["Jazz", "Blues"],
    rating: 4.8,
    price: 4500,
    image: "https://via.placeholder.com/300x200",
  },
  {
    name: "Classical Quartet",
    genres: ["Classical", "Chamber"],
    rating: 4.8,
    price: 4000,
    image: "https://via.placeholder.com/300x200",
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

function FindMusiciansPage() {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("rating");

  const filtered = musicians
    .filter((m) => m.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => b.rating - a.rating);

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
            {["Acoustic", "Alternative", "Blues", "Chamber", "Classical", "Comedy", "Electronic", "Entertainment", "Folk", "House", "Jazz", "Pop", "Rock"].map((genre) => (
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
          </select>
        </div>
      </aside>

      <main className="results">
        <div className="header-row">
          <span>{filtered.length} musicians found</span>
        </div>
        <div className="musician-grid">
          {filtered.map((m, i) => (
            <div className="musician-card" key={i}>
              <img src={m.image} alt={m.name} className="musician-img" />
              <h3>{m.name}</h3>
              <div className="genres">
                {m.genres.map((g) => (
                  <span key={g} className="genre-tag">{g}</span>
                ))}
              </div>
              <div className="rating-price">
                <span className="rating">⭐ {m.rating}</span>
                <span className="price">Starting at {m.price} SEK</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default FindMusiciansPage;