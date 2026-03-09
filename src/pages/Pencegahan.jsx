import React from 'react';

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
  background: '#ffffff',
  padding: '30px',
  borderRadius: '24px',
  border: '1px solid rgba(0,0,0,0.05)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: '20px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden'
};

const Pencegahan = () => (
  <div className="animate-fade-in-up">
    {/* Hero Section */}
    <div className="hero-page" style={{ marginBottom: 0 }}>
      <div className="container" style={{ padding: '0' }}>
        <h1 className="hero-page-title">Pencegahan & Pengendalian</h1>
        <p className="hero-page-desc" style={{ maxWidth: '800px' }}>
          Hipertensi yang tidak terkontrol dapat meningkatkan beban kerja jantung yang dalam jangka panjang berkembang menjadi gagal jantung. <strong>Pengendalian faktor risiko secara komprehensif terbukti menurunkan kejadian kardiovaskular.</strong>
        </p>
      </div>
    </div>

    {/* Prevention List Section */}
    <section className="section-full section-light">
      <div className="container" style={{ paddingTop: 0 }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{ display: 'inline-block', padding: '8px 20px', background: '#EAF7F0', color: 'var(--primary)', borderRadius: '30px', fontWeight: 'bold', marginBottom: '15px' }}>Langkah Nyata</div>
          <h2 style={{ fontSize: '2.5rem', margin: 0, fontWeight: '800' }}>Upaya Pencegahan</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {[
            { icon: '🥗', title: 'Diet Rendah Garam & DASH', desc: 'Membatasi asupan natrium dan memperbanyak konsumsi sayur, buah, serta biji-bijian utuh kaya serat.' },
            { icon: '🏃', title: 'Olahraga Rutin', desc: 'Lakukan aktivitas fisik aerobik minimal 150 menit per minggu (seperti jalan cepat, bersepeda, berenang).' },
            { icon: '⚖️', title: 'Kontrol Berat Badan', desc: 'Pertahankan Indeks Massa Tubuh (IMT) ideal untuk mengurangi tekanan darah dan beban kerja jantung.' },
            { icon: '🚭', title: 'Berhenti Merokok', desc: 'Nikotin dapat merusak pembuluh darah langsung dan seketika meningkatkan detak jantung.' },
            { icon: '🧘', title: 'Mengelola Stres', desc: 'Stres kronis dapat memicu tekanan darah tinggi. Terapkan teknik relaksasi, meditasi, dan tidur yang cukup.' },
            { icon: '🩺', title: 'Pemeriksaan Berkala', desc: 'Pantau tekanan darah secara teratur di rumah tangga dan konsultasikan dengan dokter ahli berkala.' },
          ].map((item, idx) => (
            <div key={idx} className="card" style={preventionItemStyle}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.08)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.03)'; }}>
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', background: 'radial-gradient(circle, #EAF7F0 0%, transparent 70%)', borderRadius: '50%', zIndex: 0 }}></div>
              <div style={{ fontSize: '3rem', background: '#f8fafc', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '24px', zIndex: 1, boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>{item.icon}</div>
              <div style={{ zIndex: 1 }}>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '1.4rem', color: 'var(--text-color)' }}>{item.title}</h3>
                <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Side Effects Grids */}
    <section className="section-full section-white">
      <div className="container" style={{ paddingTop: 0 }}>

        <div style={{ textAlign: 'center', marginBottom: '60px', maxWidth: '800px', margin: '0 auto 60px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '20px' }}>Kenali Efek Samping Pengobatan</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
            Penting untuk memahami kemungkinan efek samping agar dapat segera ditangani. Kenali tanda-tanda berikut baik saat mengonsumsi obat medis maupun obat herbal.
          </p>
        </div>

        {/* Diuretik Side Effects */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '15px', marginBottom: '30px', background: '#eff6ff', padding: '10px 24px', borderRadius: '16px' }}>
            <span style={{ fontSize: '1.5rem' }}>💧</span>
            <h3 style={{ margin: 0, fontSize: '1.6rem', color: '#1d4ed8' }}>Efek Samping Obat Diuretik</h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
            {efekSampingDiuretikData.map((efek, idx) => (
              <div key={idx} className="card" style={{ padding: '0', borderRadius: '20px', overflow: 'hidden', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
                <div style={{ width: '100%', aspectRatio: '1', overflow: 'hidden' }}>
                  <img src={efek.img} alt={efek.nama} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
                </div>
                <div style={{ padding: '20px', textAlign: 'center', background: '#fff' }}>
                  <h4 style={{ margin: 0, color: 'var(--text-color)', fontSize: '1.1rem', fontWeight: '700' }}>{efek.nama}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Herbal Side Effects */}
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '15px', marginBottom: '30px', background: '#fdf4ff', padding: '10px 24px', borderRadius: '16px' }}>
            <span style={{ fontSize: '1.5rem' }}>🌿</span>
            <h3 style={{ margin: 0, fontSize: '1.6rem', color: '#a21caf' }}>Efek Samping Obat Herbal</h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {efekSampingHerbalData.map((efek, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '20px', background: '#fff', padding: '16px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.02)' }}>
                <div style={{ width: '100px', height: '100px', flexShrink: 0, borderRadius: '16px', overflow: 'hidden' }}>
                  <img src={efek.img} alt={efek.nama} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 5px 0', color: 'var(--text-color)', fontSize: '1.2rem', fontWeight: '700' }}>{efek.nama}</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>Perhatikan reaksi tubuh setelah mengonsumsi herbal ini.</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  </div>
);

export default Pencegahan;