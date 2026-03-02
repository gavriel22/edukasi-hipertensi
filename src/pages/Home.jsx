import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <header className="hero">
      <div className="container">
        <span style={{ display: 'inline-block', background: 'var(--primary-glow)', border: '1px solid var(--secondary)', padding: '6px 16px', borderRadius: '30px', color: 'var(--primary)', fontSize: '0.9rem', fontWeight: '600', letterSpacing: '0.02em', marginBottom: '1rem' }}>Edukasi Obat Medis & Tradisional untuk Hipertensi</span>
        <h1 style={{ marginTop: '15px' }}>Minum Obat Hipertensi Sudah Tepat?</h1>
        <p>Pahami penggunaan diuretik dan herbal dalam membantu mengontrol tekanan darah secara aman dan efektif.</p>
        <Link to="/diuretik"><button className="btn">Pelajari Sekarang</button></Link>
      </div>
    </header>

    <section className="container">
      <h2>Kenapa Ini Penting?</h2>
      <p>Hipertensi sering kali tidak menimbulkan gejala, namun dapat menyebabkan komplikasi serius jika tidak terkontrol dengan baik.</p>
      <div className="card-grid">
        <div className="card">
          <h3>Silent Killer</h3>
          <p style={{ color: 'var(--text-muted)' }}>Hipertensi sering kali tidak menimbulkan gejala mencolok, namun diam-diam memicu kerusakan organ vital tanpa peringatan.</p>
        </div>
        <div className="card">
          <h3>Risiko Komplikasi</h3>
          <ul>
            <li>Gagal Jantung & Serangan Jantung</li>
            <li>Stroke akibat pecahnya pembuluh darah</li>
            <li>Gangguan dan gagal ginjal kronis</li>
          </ul>
        </div>
        <div className="card">
          <h3>Pentingnya Terapi</h3>
          <p style={{ color: 'var(--text-muted)' }}>Dengan pengobatan seperti Diuretik dan gaya hidup sehat, tekanan darah yang mematikan dapat dikendalikan sepenuhnya.</p>
        </div>
      </div>
    </section>
  </div>
);

export default Home;