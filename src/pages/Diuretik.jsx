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
    <div style={{
      background: 'linear-gradient(135deg, var(--primary) 0%, #115941 100%)',
      padding: '80px 20px 60px',
      textAlign: 'center',
      color: 'white',
      marginBottom: '40px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
    }}>
      <div className="container" style={{ padding: '0' }}>
        <h1 style={{ color: 'white', margin: '0 0 20px 0', fontSize: '3rem', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>Kenali Obat Diuretik</h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto', fontWeight: '300', lineHeight: '1.6' }}>
          Diuretik merupakan terapi utama dalam pengelolaan hipertensi. Obat ini membantu tubuh mengeluarkan kelebihan natrium dan cairan melalui ginjal.
        </p>
      </div>
    </div>

    <div className="container" style={{ marginTop: '0', paddingTop: '0' }}>
      <div className="card-grid" style={{ marginBottom: '40px' }}>
        <div className="card" style={{ gridColumn: '1 / -1' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(31, 122, 92, 0.1)' }}>🎯</span>
            Fungsi Utama Obat Diuretik
          </h3>
          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '10px', marginTop: '15px' }}>
            <li>Menurunkan volume plasma & curah jantung</li>
            <li>Mengurangi resistensi vaskular perifer</li>
            <li>Menurunkan tekanan dinding arteri</li>
            <li>Mencegah hipertrofi ventrikel kiri</li>
            <li>Mengurangi risiko gagal jantung & stroke</li>
          </ul>
          <p style={{ marginTop: '15px', fontSize: '0.85rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-color)', paddingTop: '15px' }}>
            *Pengendalian tekanan darah yang adekuat menurunkan risiko gagal jantung secara signifikan.
          </p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '20px', fontSize: '2rem' }}>
          <span style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(31, 122, 92, 0.1)' }}>💊</span>
          Jenis & Detail Golongan Diuretik Utama
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
          <span style={{ padding: '8px 16px', background: 'var(--section-alternate)', color: 'var(--primary)', borderRadius: '20px', fontWeight: '500' }}>Thiazide</span>
          <span style={{ padding: '8px 16px', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', borderRadius: '20px', fontWeight: '500' }}>Loop (Diuretik Kuat)</span>
          <span style={{ padding: '8px 16px', background: 'rgba(245, 158, 11, 0.1)', color: '#d97706', borderRadius: '20px', fontWeight: '500' }}>Kalium-sparing</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>

        {/* Thiazide */}
        <div className="card herbal-card" style={{ borderTop: '4px solid var(--primary)', display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ color: 'var(--primary)', marginBottom: '15px' }}>Diuretik Thiazide</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', flexGrow: 1 }}>
            Bekerja pada tubulus distal ginjal dengan menghambat reabsorpsi natrium-klorida. Menyebabkan peningkatan ekskresi natrium dan air, menurunkan volume plasma dan tekanan darah. Memiliki efek vasodilatasi jangka panjang. Sangat direkomendasikan pada pasien usia lanjut.
          </p>
          <div style={{ marginTop: '20px' }}>
            <h4 style={{ fontSize: '1rem', marginBottom: '10px' }}>Contoh Obat:</h4>
            <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '5px' }}>
              <div style={{ flex: '0 0 100px', textAlign: 'center' }}>
                <img src={chlorthalidoneImg} alt="Chlorthalidone" style={{ width: '100%', aspectRatio: '1', objectFit: 'contain', borderRadius: '8px', border: '1px solid #eee', padding: '4px' }} />
                <span style={{ fontSize: '0.8rem', display: 'block', marginTop: '4px', fontWeight: '500' }}>Chlorthalidone</span>
              </div>
              <div style={{ flex: '0 0 100px', textAlign: 'center' }}>
                <img src={hydrochlorothiazideImg} alt="HCT" style={{ width: '100%', aspectRatio: '1', objectFit: 'contain', borderRadius: '8px', border: '1px solid #eee', padding: '4px' }} />
                <span style={{ fontSize: '0.8rem', display: 'block', marginTop: '4px', fontWeight: '500' }}>HCT</span>
              </div>
              <div style={{ flex: '0 0 100px', textAlign: 'center' }}>
                <img src={indapamideImg} alt="Indapamide" style={{ width: '100%', aspectRatio: '1', objectFit: 'contain', borderRadius: '8px', border: '1px solid #eee', padding: '4px' }} />
                <span style={{ fontSize: '0.8rem', display: 'block', marginTop: '4px', fontWeight: '500' }}>Indapamide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Loop Diuretic */}
        <div className="card herbal-card" style={{ borderTop: '4px solid #ef4444', display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ color: '#ef4444', marginBottom: '15px' }}>Loop Diuretik (Kuat)</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', flexGrow: 1 }}>
            Bekerja pada ansa Henle dengan menghambat transporter Na⁺/K⁺/2Cl⁻. Efek diuretik lebih kuat dibanding thiazide. Sering digunakan pada hipertensi yang disertai gagal jantung atau edema berat untuk mengurangi kongesti paru dengan cepat.
          </p>
          <div style={{ marginTop: '20px' }}>
            <h4 style={{ fontSize: '1rem', marginBottom: '10px', color: '#ef4444' }}>Contoh Obat:</h4>
            <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '5px' }}>
              <div style={{ flex: '0 0 100px', textAlign: 'center' }}>
                <img src={furosemidImg} alt="Furosemid" style={{ width: '100%', aspectRatio: '1', objectFit: 'contain', borderRadius: '8px', border: '1px solid #eee', padding: '4px' }} />
                <span style={{ fontSize: '0.8rem', display: 'block', marginTop: '4px', fontWeight: '500' }}>Furosemid</span>
              </div>
              <div style={{ flex: '0 0 100px', textAlign: 'center' }}>
                <img src={bumetanidImg} alt="Bumetanid" style={{ width: '100%', aspectRatio: '1', objectFit: 'contain', borderRadius: '8px', border: '1px solid #eee', padding: '4px' }} />
                <span style={{ fontSize: '0.8rem', display: 'block', marginTop: '4px', fontWeight: '500' }}>Bumetanid</span>
              </div>
            </div>
          </div>
        </div>

        {/* Potassium Sparing */}
        <div className="card herbal-card" style={{ borderTop: '4px solid #f59e0b', display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ color: '#d97706', marginBottom: '15px' }}>Potassium-Sparing</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', flexGrow: 1 }}>
            Menghambat efek aldosteron pada tubulus distal sehingga meningkatkan ekskresi natrium tanpa kehilangan kalium signifikan. Banyak digunakan pada hipertensi resisten dan mencegah remodeling jantung.
          </p>
          <div style={{ marginTop: '20px' }}>
            <h4 style={{ fontSize: '1rem', marginBottom: '10px', color: '#d97706' }}>Contoh Obat:</h4>
            <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '5px' }}>
              <div style={{ flex: '0 0 100px', textAlign: 'center' }}>
                <img src={spironolaktonImg} alt="Spironolakton" style={{ width: '100%', aspectRatio: '1', objectFit: 'contain', borderRadius: '8px', border: '1px solid #eee', padding: '4px' }} />
                <span style={{ fontSize: '0.8rem', display: 'block', marginTop: '4px', fontWeight: '500' }}>Spironolakton</span>
              </div>
              <div style={{ flex: '0 0 100px', textAlign: 'center' }}>
                <img src={eplerenonImg} alt="Eplerenon" style={{ width: '100%', aspectRatio: '1', objectFit: 'contain', borderRadius: '8px', border: '1px solid #eee', padding: '4px' }} />
                <span style={{ fontSize: '0.8rem', display: 'block', marginTop: '4px', fontWeight: '500' }}>Eplerenon</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default Diuretik;