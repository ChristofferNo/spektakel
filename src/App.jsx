import { useState } from 'react'
import HomePage from './pages/HomePage'
import NavBar from './components/NavBar'
import AboutPage from './pages/AboutPage'
import FindMusiciansPage from './pages/FindMusiciansPage'
import './assets/styles/AppSecond.css'

function App() {
const [page, setPage] = useState('HomePage')
const pageMap = {
  HomePage,
  AboutPage,
  FindMusiciansPage
};
const ActivePage = pageMap[page];


  return (
    <>  
     <div className="appContainer">
      {/* Render different components (Navigation logic) */}
      <NavBar className="navBar" navigate={setPage} />
      <ActivePage navigate={setPage} />
      </div>
    </>
  )
}

export default App


