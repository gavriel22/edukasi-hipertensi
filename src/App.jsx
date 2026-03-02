import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Diuretik from './pages/Diuretik';
import Herbal from './pages/Herbal';
import Keamanan from './pages/Keamanan';
import Pencegahan from './pages/Pencegahan';
import FAQ from './pages/FAQ';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Router>
      <nav className="navbar">
        <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Telenursing</span>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Navigation">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            {menuOpen ? (
              <path fillRule="evenodd" d="M18.3 5.71a.996.996 0 00-1.41 0L12 10.59 7.11 5.7A.996.996 0 105.7 7.11L10.59 12 5.7 16.89a.996.996 0 101.41 1.41L12 13.41l4.89 4.89a.996.996 0 101.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
            ) : (
              <path fillRule="evenodd" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            )}
          </svg>
        </button>
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={closeMenu}>Beranda</Link>
          <Link to="/diuretik" onClick={closeMenu}>Medis</Link>
          <Link to="/herbal" onClick={closeMenu}>Herbal</Link>
          <Link to="/keamanan" onClick={closeMenu}>Keamanan</Link>
          <Link to="/pencegahan" onClick={closeMenu}>Pencegahan</Link>
          <Link to="/faq" onClick={closeMenu}>FAQ</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diuretik" element={<Diuretik />} />
        <Route path="/herbal" element={<Herbal />} />
        <Route path="/keamanan" element={<Keamanan />} />
        <Route path="/pencegahan" element={<Pencegahan />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>

      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h4>Telenursing Hipertensi</h4>
            <p>Edukasi obat medis dan tradisional untuk membantu Anda mengontrol tekanan darah secara aman.</p>
          </div>
          <div className="footer-section">
            <h4>Tautan Cepat</h4>
            <ul>
              <li><Link to="/">Beranda</Link></li>
              <li><Link to="/diuretik">Obat Medis</Link></li>
              <li><Link to="/herbal">Terapi Herbal</Link></li>
              <li><Link to="/faq">Pusat Bantuan (FAQ)</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Peringatan Medis</h4>
            <p>Informasi pada situs ini bersifat edukasi. Selalu konsultasikan dengan dokter sebelum mengubah rejimen pengobatan Anda.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Edukasi Telenursing Hipertensi. Berdasarkan Materi Telenursing.</p>
        </div>
      </footer>
    </Router>
  );
}

export default App;