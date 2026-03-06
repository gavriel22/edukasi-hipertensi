import React from 'react';

const imagePlaceholderStyle = {
  width: '100%',
  aspectRatio: '1',
  backgroundColor: '#f1f5f9',
  borderRadius: '12px',
  marginBottom: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#94a3b8',
  fontSize: '0.9rem',
  fontWeight: '600',
  border: '2px dashed #cbd5e1',
  cursor: 'pointer',
  transition: 'all 0.3s ease'
};
import hipokalemiaImg from '../assets/images/Hipokalemia.jpeg';
import hiponatremiaImg from '../assets/images/Hiponatremia.jpeg';
import dehidrasiImg from '../assets/images/Dehidrasi.jpeg';
import hiperurisemiaImg from '../assets/images/Hiperurisemia.jpeg';
import gularDarahNaikImg from '../assets/images/GulaDarahNaik.jpeg';

import gangguanPencernaanImg from '../assets/images/GangguanPencernaan.jpeg';
import reaksiAlergiImg from '../assets/images/ReaksiAlergi.jpeg';
import risikoToksisitasImg from '../assets/images/RisikoToksisitas.jpeg';

const efekSampingDiuretikData = [
  { nama: 'Hipokalemia', img: hipokalemiaImg },
  { nama: 'Hiponatremia', img: hiponatremiaImg },
  { nama: 'Dehidrasi', img: dehidrasiImg },
  { nama: 'Hiperurisemia', img: hiperurisemiaImg },
  { nama: 'Gula Darah Naik', img: gularDarahNaikImg }
];

const efekSampingHerbalData = [
  { nama: 'Gangguan Pencernaan', img: gangguanPencernaanImg },
  { nama: 'Reaksi Alergi', img: reaksiAlergiImg },
  { nama: 'Risiko Toksisitas', img: risikoToksisitasImg }
];

const preventionItemStyle = {
  background: 'var(--surface-solid)',
  padding: '24px',
  borderRadius: '16px',
  border: '1px solid var(--border-color)',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '16px',
  boxShadow: 'var(--shadow-sm)',
  transition: 'var(--transition)'
};

const Pencegahan = () => (
  <div className="animate-fade-in-up">
    {/* Hero Section */}
    <div style={{
      background: 'linear-gradient(135deg, var(--primary) 0%, #115941 100%)',
      padding: '80px 20px 60px',
      textAlign: 'center',
      color: 'white',
      marginBottom: '40px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
    }}>
      <div className="container" style={{ padding: '0' }}>
        <h1 style={{ color: 'white', margin: '0 0 20px 0', fontSize: '3rem', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>Pencegahan & Pengendalian</h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto', fontWeight: '300', lineHeight: '1.6' }}>
          Hipertensi yang tidak terkontrol dapat meningkatkan beban kerja jantung yang dalam jangka panjang berkembang menjadi gagal jantung. <strong>Pengendalian faktor risiko secara komprehensif terbukti menurunkan kejadian gagal jantung.</strong>
        </p>
      </div>
    </div>

    <div className="container" style={{ marginTop: '0', paddingTop: '0' }}>

      {/* Prevention List */}
      <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '2rem' }}>Upaya Pencegahan</h2>
      <div className="responsive-grid-large" style={{ gap: '20px', marginBottom: '80px' }}>

        <div className="card" style={preventionItemStyle}>
          <div style={{ fontSize: '2.5rem', background: '#EAF7F0', padding: '15px', borderRadius: '12px' }}>🥗</div>
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '1.25rem' }}>Diet Rendah Garam & DASH</h3>
            <p style={{ margin: 0, color: 'var(--text-muted)' }}>Membatasi asupan natrium dan memperbanyak konsumsi sayur, buah, serta biji-bijian.</p>
          </div>
        </div>

        <div className="card" style={preventionItemStyle}>
          <div style={{ fontSize: '2.5rem', background: '#EAF7F0', padding: '15px', borderRadius: '12px' }}>🏃</div>
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '1.25rem' }}>Olahraga Rutin</h3>
            <p style={{ margin: 0, color: 'var(--text-muted)' }}>Lakukan aktivitas fisik aerobik minimal 150 menit per minggu (seperti jalan cepat, bersepeda, berenang).</p>
          </div>
        </div>

        <div className="card" style={preventionItemStyle}>
          <div style={{ fontSize: '2.5rem', background: '#EAF7F0', padding: '15px', borderRadius: '12px' }}>⚖️</div>
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '1.25rem' }}>Kontrol Berat Badan</h3>
            <p style={{ margin: 0, color: 'var(--text-muted)' }}>Pertahankan Indeks Massa Tubuh (IMT) ideal untuk mengurangi beban kerja jantung.</p>
          </div>
        </div>

        <div className="card" style={preventionItemStyle}>
          <div style={{ fontSize: '2.5rem', background: '#EAF7F0', padding: '15px', borderRadius: '12px' }}>🚭</div>
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '1.25rem' }}>Berhenti Merokok</h3>
            <p style={{ margin: 0, color: 'var(--text-muted)' }}>Nikotin dapat merusak pembuluh darah dan meningkatkan tekanan darah.</p>
          </div>
        </div>

        <div className="card" style={preventionItemStyle}>
          <div style={{ fontSize: '2.5rem', background: '#EAF7F0', padding: '15px', borderRadius: '12px' }}>🧘</div>
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '1.25rem' }}>Mengelola Stres</h3>
            <p style={{ margin: 0, color: 'var(--text-muted)' }}>Stres kronis dapat memicu tekanan darah tinggi. Terapkan teknik relaksasi secara rutin.</p>
          </div>
        </div>

        <div className="card" style={preventionItemStyle}>
          <div style={{ fontSize: '2.5rem', background: '#EAF7F0', padding: '15px', borderRadius: '12px' }}>🩺</div>
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '1.25rem' }}>Pemeriksaan Berkala</h3>
            <p style={{ margin: 0, color: 'var(--text-muted)' }}>Pantau tekanan darah secara berkala dan konsultasikan dengan dokter ahli.</p>
          </div>
        </div>

      </div>

      {/* Side Effects Grid */}
      <div className="alert" style={{ marginBottom: '40px' }}>
        <h4>Kenali Efek Samping Pengobatan</h4>
        <p>Penting untuk memahami kemungkinan efek samping agar dapat segera ditangani. (Tempat foto telah disediakan bagi tiap efek samping)</p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
        <div style={{ width: '4px', height: '30px', background: 'var(--primary)', borderRadius: '4px' }}></div>
        <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Efek Samping Diuretik</h3>
      </div>

      <div className="responsive-grid-small" style={{ margin: '20px 0 50px 0' }}>
        {efekSampingDiuretikData.map((efek, idx) => (
          <div key={idx} className="card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <img src={efek.img} alt={efek.nama} style={{
              width: '100%',
              aspectRatio: '1',
              objectFit: 'cover',
              borderRadius: '12px',
              marginBottom: '16px',
              boxShadow: 'var(--shadow-sm)'
            }} />
            <h4 style={{ margin: 0, color: 'var(--text-color)', fontSize: '1.1rem' }}>{efek.nama}</h4>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px', marginTop: '60px' }}>
        <div style={{ width: '4px', height: '30px', background: 'var(--primary)', borderRadius: '4px' }}></div>
        <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Efek Samping Herbal</h3>
      </div>

      <div className="responsive-grid-small" style={{ margin: '20px 0 50px 0' }}>
        {efekSampingHerbalData.map((efek, idx) => (
          <div key={idx} className="card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <img src={efek.img} alt={efek.nama} style={{
              width: '100%',
              aspectRatio: '1',
              objectFit: 'cover',
              borderRadius: '12px',
              marginBottom: '16px',
              boxShadow: 'var(--shadow-sm)'
            }} />
            <h4 style={{ margin: 0, color: 'var(--text-color)', fontSize: '1.1rem' }}>{efek.nama}</h4>
          </div>
        ))}
      </div>

      <hr style={{ margin: '80px 0 40px', border: 'none', borderTop: '1px solid var(--border-color)' }} />

    </div>
  </div>
);

export default Pencegahan;