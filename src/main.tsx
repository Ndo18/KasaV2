import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'
// import App from './App.tsx'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import Homepage from './pages/Homepage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    {/* <App /> */}
      <Footer />
    </Router>
  </StrictMode>,
)
