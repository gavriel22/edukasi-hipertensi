import React from 'react';
import chlorthalidoneImg from '../assets/images/Chlorthalidone.jpeg';
import hydrochlorothiazideImg from '../assets/images/Hydrochlorothiazide.jpeg';
import indapamideImg from '../assets/images/Indapamide.jpeg';
import furosemidImg from '../assets/images/Furosemid.jpeg';
import bumetanidImg from '../assets/images/Bumetanid.jpeg';
import spironolaktonImg from '../assets/images/Spironolakton.jpeg';
import eplerenonImg from '../assets/images/Eplerenon.jpeg';

const Diuretik = () => (
  <div className="animate-fade-in-up">
    {/* Hero Section */}
    <div className="hero-page" style={{ marginBottom: 0 }}>
      <div className="container" style={{ padding: '0' }}>
        <h1 className="hero-page-title">Kenali Obat Diuretik</h1>
        <p className="hero-page-desc">
          Diuretik merupakan terapi utama dalam pengelolaan hipertensi. Obat ini membantu tubuh mengeluarkan kelebihan natrium dan cairan melalui ginjal.
        </p>
      </div>
    </div>

    {/* Fungsi Utama */}
    <section className="section-full section-white">
      <div className="container" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(31,122,92,0.1)', color: 'var(--primary)', fontSize: '2rem', marginBottom: '20px' }}>🎯</div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0 0 15px 0' }}>Fungsi Utama Obat Diuretik</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
            Pengendalian tekanan darah yang adekuat menurunkan risiko kondisi medis yang fatal secara signifikan.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', maxWidth: '1000px', margin: '0 auto' }}>
          {[
            { title: 'Menurunkan Volume', desc: 'Menurunkan volume plasma & curah jantung' },
            { title: 'Mengurangi Resistensi', desc: 'Mengurangi resistensi vaskular perifer tubuh' },
            { title: 'Tekanan Arteri Turun', desc: 'Menurunkan tekanan dinding arteri' },
            { title: 'Cegah Hipertrofi', desc: 'Mencegah penebalan bilik kiri jantung' },
            { title: 'Risiko Komplikasi', desc: 'Meminimalkan risiko gagal jantung & stroke' }
          ].map((item, idx) => (
            <div key={idx} style={{ background: '#f8fafc', padding: '24px', borderRadius: '20px', border: '1px solid #f1f5f9', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: 'bold' }}>✓</div>
              <div>
                <h4 style={{ margin: '0 0 5px 0', fontSize: '1.05rem', color: 'var(--text-color)' }}>{item.title}</h4>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Jenis & Detail */}
    <section className="section-full section-light">
      <div className="container" style={{ paddingTop: 0 }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{ display: 'inline-block', padding: '8px 20px', background: '#e0f2fe', color: '#0369a1', borderRadius: '30px', fontWeight: 'bold', marginBottom: '15px' }}>Klasifikasi Obat</div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0 0 20px 0' }}>Jenis & Detail Golongan</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
            <span style={{ padding: '8px 20px', background: '#fff', border: '1px solid #cbd5e1', color: 'var(--text-color)', borderRadius: '30px', fontWeight: '600', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>Thiazide</span>
            <span style={{ padding: '8px 20px', background: '#fff', border: '1px solid #cbd5e1', color: '#ef4444', borderRadius: '30px', fontWeight: '600', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>Loop (Diuretik Kuat)</span>
            <span style={{ padding: '8px 20px', background: '#fff', border: '1px solid #cbd5e1', color: '#d97706', borderRadius: '30px', fontWeight: '600', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>Kalium-sparing</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>

          {/* Thiazide */}
          <div className="card herbal-card" style={{ background: '#fff', padding: '30px', borderRadius: '24px', border: 'none', borderTop: '6px solid var(--primary)', display: 'flex', flexDirection: 'column', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '15px', fontSize: '1.8rem', fontWeight: '800' }}>Diuretik Thiazide</h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', flexGrow: 1, lineHeight: '1.7' }}>
              Bekerja pada tubulus distal ginjal dengan menghambat reabsorpsi natrium-klorida. Menyebabkan peningkatan ekskresi natrium dan air, menurunkan volume plasma dan tekanan darah. Memiliki efek vasodilatasi jangka panjang. Sangat direkomendasikan pada pasien usia lanjut.
            </p>
            <div style={{ marginTop: '25px', paddingTop: '20px', borderTop: '1px solid #f1f5f9' }}>
              <h4 style={{ fontSize: '1rem', marginBottom: '15px', color: 'var(--text-color)' }}>Bentuk Sediaan:</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                <div style={{ textAlign: 'center' }}>
                  <img src={chlorthalidoneImg} alt="Chlorthalidone" style={{ width: '100%', aspectRatio: '1', objectFit: 'contain', borderRadius: '12px', background: '#f8fafc', padding: '5px', border: '1px solid #e2e8f0' }} />
                  <span style={{ fontSize: '0.8rem', display: 'block', marginTop: '6px', fontWeight: '600', color: 'var(--text-muted)' }}>Chlorthalidone</span>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <img src={hydrochlorothiazideImg} alt="HCT" style={{ width: '100%', aspectRatio: '1', objectFit: 'contain', borderRadius: '12px', background: '#f8fafc', padding: '5px', border: '1px solid #e2e8f0' }} />
                  <span style={{ fontSize: '0.8rem', display: 'block', marginTop: '6px', fontWeight: '600', color: 'var(--text-muted)' }}>HCT</span>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <img src={indapamideImg} alt="Indapamide" style={{ width: '100%', aspectRatio: '1', objectFit: 'contain', borderRadius: '12px', background: '#f8fafc', padding: '5px', border: '1px solid #e2e8f0' }} />
                  <span style={{ fontSize: '0.8rem', display: 'block', marginTop: '6px', fontWeight: '600', color: 'var(--text-muted)' }}>Indapamide</span>
                </div>
              </div>
            </div>
          </div>

          {/* Loop Diuretic */}
          <div className="card herbal-card" style={{ background: '#fff', padding: '30px', borderRadius: '24px', border: 'none', borderTop: '6px solid #ef4444', display: 'flex', flexDirection: 'column', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
            <h3 style={{ color: '#ef4444', marginBottom: '15px', fontSize: '1.8rem', fontWeight: '800' }}>Loop Diuretik</h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', flexGrow: 1, lineHeight: '1.7' }}>
              Bekerja pada ansa Henle dengan menghambat transporter Na⁺/K⁺/2Cl⁻. Efek diuretik lebih kuat dibanding thiazide. Sering digunakan pada hipertensi yang disertai gagal jantung atau edema berat untuk mengurangi pembengkakan dan kongesti paru dengan cepat.
            </p>
            <div style={{ marginTop: '25px', paddingTop: '20px', borderTop: '1px solid #f1f5f9' }}>
              <h4 style={{ fontSize: '1rem', marginBottom: '15px', color: 'var(--text-color)' }}>Bentuk Sediaan:</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
                <div style={{ textAlign: 'center' }}>
                  <img src={furosemidImg} alt="Furosemid" style={{ width: '100%', maxWidth: '120px', margin: '0 auto', aspectRatio: '1', objectFit: 'contain', borderRadius: '12px', background: '#fef2f2', padding: '5px', border: '1px solid #fecaca' }} />
                  <span style={{ fontSize: '0.85rem', display: 'block', marginTop: '6px', fontWeight: '600', color: 'var(--text-muted)' }}>Furosemid</span>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <img src={bumetanidImg} alt="Bumetanid" style={{ width: '100%', maxWidth: '120px', margin: '0 auto', aspectRatio: '1', objectFit: 'contain', borderRadius: '12px', background: '#fef2f2', padding: '5px', border: '1px solid #fecaca' }} />
                  <span style={{ fontSize: '0.85rem', display: 'block', marginTop: '6px', fontWeight: '600', color: 'var(--text-muted)' }}>Bumetanid</span>
                </div>
              </div>
            </div>
          </div>

          {/* Potassium Sparing */}
          <div className="card herbal-card" style={{ background: '#fff', padding: '30px', borderRadius: '24px', border: 'none', borderTop: '6px solid #f59e0b', display: 'flex', flexDirection: 'column', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
            <h3 style={{ color: '#d97706', marginBottom: '15px', fontSize: '1.8rem', fontWeight: '800' }}>Potassium-Sparing</h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', flexGrow: 1, lineHeight: '1.7' }}>
              Menghambat efek aldosteron pada tubulus distal sehingga meningkatkan ekskresi natrium tanpa kehilangan kalium (potassium) signifikan. Sangat bermanfaat untuk digunakan pada hipertensi resisten dan untuk mencegah remodeling jantung akibat tekanan tinggi.
            </p>
            <div style={{ marginTop: '25px', paddingTop: '20px', borderTop: '1px solid #f1f5f9' }}>
              <h4 style={{ fontSize: '1rem', marginBottom: '15px', color: 'var(--text-color)' }}>Bentuk Sediaan:</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
                <div style={{ textAlign: 'center' }}>
                  <img src={spironolaktonImg} alt="Spironolakton" style={{ width: '100%', maxWidth: '120px', margin: '0 auto', aspectRatio: '1', objectFit: 'contain', borderRadius: '12px', background: '#fffbeb', padding: '5px', border: '1px solid #fde68a' }} />
                  <span style={{ fontSize: '0.85rem', display: 'block', marginTop: '6px', fontWeight: '600', color: 'var(--text-muted)' }}>Spironolakton</span>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <img src={eplerenonImg} alt="Eplerenon" style={{ width: '100%', maxWidth: '120px', margin: '0 auto', aspectRatio: '1', objectFit: 'contain', borderRadius: '12px', background: '#fffbeb', padding: '5px', border: '1px solid #fde68a' }} />
                  <span style={{ fontSize: '0.85rem', display: 'block', marginTop: '6px', fontWeight: '600', color: 'var(--text-muted)' }}>Eplerenon</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
);

export default Diuretik;