import { useState } from 'react'
import HomePage from './pages/HomePage'
import './assets/styles/AppSecond.css'

function App() {
const [page, setPage] = useState('HomePage')

  return (
    <>  
     <div className="appContainer">
      <HomePage/>
      </div>
    </>
  )
}

export default App


