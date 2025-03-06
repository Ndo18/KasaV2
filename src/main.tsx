import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import './index.css'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import Homepage from './pages/Homepage.tsx'
import Error from './pages/Error.tsx'
import FicheLogements from './pages/FicheLogements.tsx'
import Apropos from './pages/Apropos.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Fiche-logement/:id' element={<FicheLogements />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>,
)
