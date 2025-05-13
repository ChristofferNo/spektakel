import { useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import AboutPage from "./pages/AboutPage/AboutPage";
import FindMusiciansPage from "./pages/FindMusiciansPage/FindMusiciansPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage"; // NY
import Footer from "./components/Footer/Footer";
import "./assets/styles/App.css";

function App() {
  const [page, setPage] = useState("HomePage");
  const [selectedMusician, setSelectedMusician] = useState(null);

  const changePage = (newPage) => {
    setPage(newPage);
    if (newPage !== "ProfilePage") {
      setSelectedMusician(null); // Reset selected musician when changing pages
    }
    window.scrollTo(0, 0); // Scroll to top when changing pages
  };

  const pageMap = {
    HomePage,
    AboutPage,
    FindMusiciansPage,
    ProfilePage,
  };

  const ActivePage = pageMap[page];

  return (
    <>
      <div className="appContainer">
        {/* Render different components (Navigation logic) */}
        <NavBar className="navBar" navigate={changePage} />
        <ActivePage
          navigate={changePage}
          musician={selectedMusician}
          setSelectedMusician={setSelectedMusician}
        />
      </div>
      <Footer navigate={changePage} />
    </>
  );
}

export default App;
