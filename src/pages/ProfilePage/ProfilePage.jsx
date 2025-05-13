// src/pages/ProfilePage/ProfilePage.jsx
import React, { useState } from "react";
import "./ProfilePage.css";

function ProfilePage({ musician, navigate }) {
  const [activeTab, setActiveTab] = useState("about");

  if (!musician) return <p>Musikern hittades inte.</p>;

  // Exempeldata för tillgänglighet och sociala länkar
  //const availability = musician.availability || "Friday, Saturday, Sunday";   //Tar bort tillgänglighet
  const socialLinks = musician.socialLinks || [
    { name: "Spotify", url: "#" },
    { name: "Instagram", url: "#" },
  ];

  return (
    <div className="profile-page">
      {/* Vänsterkolumn */}
      <div className="profile-left">
        {/* <button
          className="back-button"
          onClick={() => navigate("FindMusiciansPage")}
        >
          ← Hitta fler spektakel
        </button> */}
        <a
          className="View-all-btn"
          onClick={() => {
            navigate("FindMusiciansPage");
          }}
        >
          ← Hitta fler spektakel
        </a>

        <h1 style={{ fontWeight: 700, fontSize: "2.4rem", margin: "0.5rem 0" }}>
          {musician.name}
        </h1>

        <div className="rating-location" style={{ alignItems: "center" }}>
          <span
            style={{ color: "#FFC107", fontWeight: 700, fontSize: "1.2rem" }}
          >
            ★
          </span>
          <span style={{ fontWeight: 600, marginLeft: 4 }}>
            {musician.rating}
          </span>
          <span style={{ color: "#888", marginLeft: 6 }}>
            ({musician.reviews?.length || 0} reviews)
          </span>
          <span style={{ margin: "0 8px" }}>•</span>
          <span>{musician.location}</span>
        </div>

        <div className="genre-tags" style={{ margin: "1rem 0" }}>
          {musician.genres.map((genre, i) => (
            <span key={i} className="genre-tag">
              {genre}
            </span>
          ))}
        </div>

        <img
          src={musician.image}
          alt={musician.name}
          className="profile-image"
          style={{ borderRadius: 12 }}
        />

        {/* Flikar */}
        <div style={{ margin: "1.5rem 0" }}>
          <button
            className={`tab${activeTab === "about" ? " active" : ""}`}
            onClick={() => setActiveTab("about")}
          >
            Om oss
          </button>
          <button
            className={`tab${activeTab === "reviews" ? " active" : ""}`}
            onClick={() => setActiveTab("reviews")}
            style={{ marginLeft: 10 }}
          >
            Reccensioner
          </button>
        </div>

        {/* Flikinnehåll */}
        {activeTab === "about" && (
          <div>
            <h2 style={{ fontWeight: 600, fontSize: "1.3rem" }}>
              {" "}
              {musician.name}
            </h2>
            <p style={{ marginBottom: 16 }}>{musician.description}</p>
            {/* <div style={{ marginBottom: 12 }}>
              <strong>Tillgängliga</strong>
              <div>Tillgängliga: {availability}</div>  
            </div> */}
            <div>
              <strong>Sociala Medier</strong>
              <div style={{ marginTop: 4 }}>
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    style={{
                      marginRight: 16,
                      color: "#2752e7",
                      textDecoration: "underline",
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div>
            <h2 style={{ fontWeight: 600, fontSize: "1.2rem" }}>Reviews</h2>
            {musician.reviews && musician.reviews.length > 0 ? (
              musician.reviews.map((review, idx) => (
                <div key={idx} style={{ marginBottom: 12 }}>
                  <strong>{review.user}</strong>{" "}
                  <span style={{ color: "#FFC107" }}>★</span> {review.rating}
                  <p style={{ margin: 0 }}>{review.comment}</p>
                </div>
              ))
            ) : (
              <p>{musician.name} har inte några reccensioner.</p>
            )}
          </div>
        )}
      </div>

      {/* Högerkolumn */}
      <div className="profile-right">
        <div className="booking-box">
          <h2 style={{ fontWeight: 700, fontSize: "1.3rem", marginBottom: 4 }}>
            Bokning
          </h2>
          <div style={{ color: "#555", marginBottom: 10 }}>
            Boka {musician.name} för ditt nästa spektakel
          </div>
          <div style={{ fontWeight: 700, fontSize: "2rem" }}>
            {musician.price}{" "}
          </div>
          {/* <div style={{ color: "#888", fontSize: "0.98rem", marginBottom: 8 }}>per performance</div> */}
          {/* <div style={{ fontWeight: 600, marginTop: 12 }}>Tillgängliga</div> */}{" "}
          {/*Tar bort Tillgänglighet*/}
          {/* <div style={{ marginBottom: 10 }}>Tillgängliga: {availability}</div> */}{" "}
          {/*Tar bort Tillgänglighet*/}
          <div style={{ color: "#888", fontSize: "0.95rem", marginBottom: 10 }}>
            Kan enbart bokas av event-organisatörer.
          </div>
        </div>

        <div className="contact-box" style={{ marginTop: 24 }}>
          <h2 style={{ fontWeight: 700, fontSize: "1.2rem", marginBottom: 4 }}>
            Kontakt
          </h2>
          <div style={{ color: "#555", marginBottom: 8 }}>
            Skicka ett meddelande till {musician.name}
          </div>
          <textarea
            placeholder="Skriv ditt meddelande här..."
            style={{ marginBottom: 10 }}
          />
          <button
            className="send-button"
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <span style={{ fontSize: 18 }}></span> Skicka Meddelande
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
