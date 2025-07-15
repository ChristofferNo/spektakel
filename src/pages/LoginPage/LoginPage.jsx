import React, { useState } from "react";
import "./LoginPage.css";

function LoginPage({ login, navigate }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("musician");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await login(email, password, role);
      navigate(role === "musician" ? "DashboardPage" : "MusiciansPage"); // Adjust if needed
    } catch (err) {
      setError("Failed to log in. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Logga in</h2>
        <p className="login-description">
          Fyll i din information för att logga in på ditt konto
        </p>

        <div className="role-tabs">
          <button
            className={`role-tab ${role === "musician" ? "active" : ""}`}
            onClick={() => setRole("musician")}
          >
            Musiker
          </button>
          <button
            className={`role-tab ${role === "organizer" ? "active" : ""}`}
            onClick={() => setRole("organizer")}
          >
            Arrangör
          </button>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="m@example.com"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="password-label">
            <label htmlFor="password">Lösenord</label>
            <span
              className="forgot-link"
              onClick={() => navigate("ForgotPasswordPage")} // Replace with correct page if needed
            >
              Glömt?
            </span>
          </div>
          <input
            id="password"
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? "Loggar in..." : "Logga in"}
          </button>
        </form>

        <p className="signup-redirect">
          Har du inget konto?{" "}
          <span
            className="signup-link"
            onClick={() => navigate("RegisterPage")}
          >
            Skapa konto
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
