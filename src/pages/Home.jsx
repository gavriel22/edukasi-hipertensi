import React from 'react';
import { Link } from 'react-router-dom';
import backgroundIMG from '../assets/images/Background.jpg';

const Home = () => (
  <div>
    <header className="hero" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(${backgroundIMG})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: '#ffffff'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <span className="animate-fade-in-up" style={{ display: 'inline-block', background: 'var(--primary-glow)', border: '1px solid var(--secondary)', padding: '6px 16px', borderRadius: '30px', color: '#ffffff', fontSize: '0.9rem', fontWeight: '600', letterSpacing: '0.02em', marginBottom: '1rem', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>Edukasi Obat Medis & Tradisional untuk Hipertensi</span>
        <h1 className="animate-fade-in-up delay-100" style={{ marginTop: '15px', color: '#ffffff' }}>Minum Obat Hipertensi Sudah Tepat?</h1>
        <p className="animate-fade-in-up delay-200" style={{ color: '#ffffff' }}>Pahami penggunaan diuretik dan herbal dalam membantu mengontrol tekanan darah secara aman dan efektif.</p>
        <Link to="/diuretik" className="animate-fade-in-up delay-300" style={{ display: 'inline-block' }}><button className="btn">Pelajari Sekarang</button></Link>
      </div>
    </header>
    
    <section className="container" style={{ margin: '60px auto', textAlign: 'center', maxWidth: '800px' }}>
      <h2 className="animate-fade-in-up" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Apa itu TensiWise?</h2>
      <p className="animate-fade-in-up delay-100" style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
        <strong>TensiWise</strong> merupakan sebuah platform edukasi telenursing yang dirancang khusus untuk membantu Anda memahami, mengelola, dan mencegah hipertensi secara bijaksana. Melalui panduan medis dan pendekatan terapi herbal yang terpercaya, kami mendampingi langkah Anda menuju tekanan darah yang lebih terkontrol dan hidup yang lebih sehat.
      </p>
    </section>

    <section className="container" style={{ marginBottom: '60px' }}>
      <h2 className="animate-fade-in-up" style={{ textAlign: 'left', marginBottom: '10px' }}>Kenapa Ini Penting?</h2>
      <p className="animate-fade-in-up delay-100" style={{ textAlign: 'left', marginBottom: '40px', color: 'var(--text-muted)' }}>Hipertensi sering kali tidak menimbulkan gejala, namun dapat menyebabkan komplikasi serius jika tidak terkontrol dengan baik.</p>

      <div className="card-grid">
        <div className="card animate-fade-in-up delay-100">
          <h3>Silent Killer</h3>
          <p style={{ color: 'var(--text-muted)' }}>Hipertensi sering kali tidak menimbulkan gejala mencolok, namun diam-diam memicu kerusakan organ vital tanpa peringatan.</p>
        </div>

        <div className="card animate-fade-in-up delay-200" style={{ backgroundColor: 'var(--primary)', color: '#ffffff', border: 'none' }}>
          <h3 style={{ color: '#ffffff' }}>Penyebab Utama</h3>
          <ul style={{ margin: 0, paddingLeft: '20px', color: 'rgba(255, 255, 255, 0.9)' }}>
            <li>Konsumsi garam (natrium) berlebih</li>
            <li>Obesitas</li>
            <li>Kurang aktivitas fisik</li>
            <li>Stres dan merokok</li>
            <li>Penyakit ginjal kronis</li>
            <li>Gangguan Hormonal</li>
          </ul>
        </div>

        <div className="card animate-fade-in-up delay-300">
          <h3>Risiko Komplikasi</h3>
          <ul style={{ color: 'var(--text-muted)', margin: 0, paddingLeft: '20px' }}>
            <li>Gagal Jantung & Serangan Jantung</li>
            <li>Stroke akibat pecahnya pembuluh darah</li>
            <li>Gangguan dan gagal ginjal kronis</li>
          </ul>
        </div>

        <div className="card animate-fade-in-up delay-400" style={{ backgroundColor: 'var(--primary)', color: '#ffffff', border: 'none' }}>
          <h3 style={{ color: '#ffffff' }}>Pentingnya Terapi</h3>
          <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Dengan pengobatan seperti Diuretik dan gaya hidup sehat, tekanan darah yang mematikan dapat dikendalikan sepenuhnya.</p>
        </div>
      </div>
    </section>

    {/* Video Section */}
    <div style={{ textAlign: 'center', margin: '80px 0 30px' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Video Edukasi</h2>
      <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>Pelajari lebih lanjut melalui tayangan interaktif mengenai manajemen hipertensi berikut ini.</p>
    </div>

    <div className="container" style={{ display: 'flex', justifyContent: 'center', marginBottom: '100px' }}>
      <div style={{
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-lg)',
        background: '#000',
        padding: '0',
        border: '8px solid var(--surface-solid)',
        maxWidth: '900px',
        width: '100%'
      }}>
        <video controls width="100%" style={{ maxHeight: '550px', display: 'block', borderRadius: '16px' }}>
          <source src="/barasuara.mp4" type="video/mp4" />
          Maaf, browser Anda tidak mendukung pemutaran video.
        </video>
      </div>
    </div>

  </div>
);

export default Home;