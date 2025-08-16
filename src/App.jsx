import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import { ThemeProvider } from './context/ThemeContext';
import { CssBaseline } from '@mui/material';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import TherapiesPage from './pages/TherapiesPage';
import './styles/App.css';

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Router>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/terapii" element={<TherapiesPage />} />
              <Route path="/appointments" element={
                <div className="page-content">
                  <h1>Programările tale</h1>
                </div>
              } />
              <Route path="/account" element={
                <div className="page-content">
                  <h1>Contul tău</h1>
                </div>
              } />
            </Routes>
          </main>
          <Footer />
          <CookieConsent
            location="bottom"
            buttonText="Accept"
            cookieName="fiziomed_consent"
            style={{ background: "#2B373B" }}
            buttonStyle={{ background: "#4CAF50", fontSize: "13px" }}
            expires={150}
          >
            Acest website folosește cookies pentru a îmbunătăți experiența dumneavoastră.
          </CookieConsent>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
