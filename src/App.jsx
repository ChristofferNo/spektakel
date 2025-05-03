import { useState } from 'react'
import HomePage from './pages/HomePage/HomePage'
import NavBar from './components/NavBar/NavBar'
import AboutPage from './pages/AboutPage/AboutPage'
import FindMusiciansPage from './pages/FindMusiciansPage/FindMusiciansPage'
import ProfilePage from './pages/ProfilePage/ProfilePage' // NY
import Footer from './components/Footer/Footer'
import './assets/styles/App.css'


function App() {
const [page, setPage] = useState('HomePage')
const [selectedMusician, setSelectedMusician] = useState(null)

const pageMap = {
  HomePage,
  AboutPage,
  FindMusiciansPage,
  ProfilePage
};

const ActivePage = pageMap[page];


  return (
    <>  
     <div className="appContainer">
      {/* Render different components (Navigation logic) */}
      <NavBar className="navBar" navigate={setPage} />
      <ActivePage 
      navigate={setPage}
      musician={selectedMusician}
      setSelectedMusician={setSelectedMusician}
      />
      <Footer navigate={setPage} />
    </div>
    </>
  )
}

export default App


