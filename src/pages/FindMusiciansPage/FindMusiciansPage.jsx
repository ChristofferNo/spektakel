
// src/pages/FindMusiciansPage.jsx
import "./FindMusiciansPage.css";
import Button from "../components/Button.jsx"


const musiker = [
  {
    namn: "Alice Andersson",
    instrument: "Sång & Gitarr",
    beskrivning: "Singer-songwriter med akustisk stil.",
    bild: "https://via.placeholder.com/150",
  },
  {
    namn: "Erik Ekström",
    instrument: "DJ (Techno & House)",
    beskrivning: "Spelat på studentklubbar i hela stan.",
    bild: "https://via.placeholder.com/150",
  },
];
function FindMusiciansPage() {
  return (
    <div className="find-page">
      <h1>🎵 Hitta Musikanter!</h1>
      <p>Välj bland duktiga studentmusiker för era evenemang.</p>

      <div className="musiker-lista">
        {musiker.map((m, i) => (
          <div className="musiker-kort" key={i}>
            <img src={m.bild} alt={m.namn} />
            <h3>{m.namn}</h3>
            <p className="instrument">{m.instrument}</p>
            <p className="beskrivning">{m.beskrivning}</p>
            <Button text="Boka" onClick={() => alert(`Bokar ${m.namn}`)} />
          </div>
        ))}
      </div>
    </div>
  );
}





export default FindMusiciansPage;
