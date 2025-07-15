import { useState } from "react";
import "./RegisterPage.css";

function RegisterPage({ navigate }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("musician");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Lösenorden matchar inte.");
      return;
    }

    if (!termsAccepted) {
      setError("Du måste acceptera användarvillkoren.");
      return;
    }

    // Simulate successful registration
    console.log("Registered:", { name, email, role });
    navigate("LoginPage");
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Skapa konto</h2>
        <p className="register-subtitle">
          {role === "musician"
            ? "Registrera dig som musiker för att bli upptäckt."
            : "Registrera dig som arrangör för att boka musiker."}
        </p>

        <div className="role-toggle">
          <button
            className={role === "musician" ? "active" : ""}
            onClick={() => setRole("musician")}
          >
            Musiker
          </button>
          <button
            className={role === "organizer" ? "active" : ""}
            onClick={() => setRole("organizer")}
          >
            Arrangör
          </button>
        </div>

        {error && <div className="register-error">{error}</div>}

        <form onSubmit={handleSubmit} className="register-form">
          <label>
            {role === "musician" ? "Artist-/Bandnamn" : "Organisationens namn"}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          <label>
            E-post
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label>
            Lösenord
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          <label>
            Bekräfta lösenord
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>

          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            Jag godkänner användarvillkoren och integritetspolicyn.
          </label>

          <button type="submit" className="btn-primary">
            Skapa konto
          </button>
        </form>

        <p className="login-redirect">
          Har du redan ett konto?{" "}
          <span className="login-link" onClick={() => navigate("LoginPage")}>
            Logga in
          </span>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
