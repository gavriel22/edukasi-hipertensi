import React from 'react';

const preventionItemStyle = {
  background: '#ffffff',
  padding: '30px',
  borderRadius: '24px',
  border: '1px solid rgba(0,0,0,0.05)',
  boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
  transition: 'transform 0.4s ease, box-shadow 0.4s ease'
};

const Panduan = () => (
  <div className="animate-fade-in-up">

    {/* Hero Section */}
    <div className="hero-page" style={{ marginBottom: 0 }}>
      <div className="container" style={{ padding: '0' }}>
        <h1 className="hero-page-title">Panduan Penggunaan</h1>
        <p className="hero-page-desc" style={{ maxWidth: '800px' }}>
          Memahami cara kerja, aturan pakai, serta interaksi antar obat sangat penting untuk mencapai hasil terapi yang maksimal dan menghindari komplikasi yang tidak diinginkan.
        </p>
      </div>
    </div>

    {/* Penggunaan Obat Section */}
    <section className="section-full section-white">
      <div className="container" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{ display: 'inline-block', padding: '8px 20px', background: '#e0f2fe', color: '#0369a1', borderRadius: '30px', fontWeight: 'bold', marginBottom: '15px' }}>Dasar Pemakaian</div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0 0 15px 0' }}>Panduan Jenis Obat</h2>
        </div>

        <div className="responsive-grid-large" style={{ marginBottom: '20px' }}>

          {/* Diuretik Card */}
          <div className="card" style={{ ...preventionItemStyle, borderTop: '6px solid var(--primary)', display: 'flex', flexDirection: 'column' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(31,122,92,0.08)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.03)'; }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '25px' }}>
              <div style={{ fontSize: '2.5rem', background: '#EAF7F0', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>💊</div>
              <h2 style={{ margin: 0, fontSize: '1.8rem', color: 'var(--text-color)', fontWeight: '800' }}>Obat Medis</h2>
            </div>

            <p style={{ color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.7', fontSize: '1.05rem' }}>
              Pengobatan dengan diuretik harus sesuai resep dokter dan dilakukan pemantauan elektrolit secara berkala. Kombinasi dengan <strong>ACE inhibitor</strong> atau <strong>ARB</strong> sering digunakan untuk meningkatkan efektivitas.
            </p>

            <h4 style={{ color: 'var(--primary)', marginBottom: '15px', fontSize: '1.1rem' }}>Fokus Pemantauan:</h4>
            <ul style={{ color: 'var(--text-color)', margin: '0', paddingLeft: '20px', marginBottom: '30px', fontSize: '1rem', lineHeight: '1.8' }}>
              <li>Tekanan darah harian</li>
              <li>Fungsi ginjal (ureum, kreatinin)</li>
              <li>Kadar kalium dan natrium dalam darah</li>
            </ul>

            <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '16px 20px', borderRadius: '0 12px 12px 0', fontSize: '1rem', marginTop: 'auto', lineHeight: '1.6' }}>
              <strong style={{ color: '#b45309', display: 'block', marginBottom: '5px' }}>⭐ Dianjurkan:</strong>
              Diminum pagi hari untuk menghindari nokturia (sering buang air kecil malam hari) yang dapat mengganggu kualitas tidur Anda.
            </div>
          </div>

          {/* Herbal Card */}
          <div className="card" style={{ ...preventionItemStyle, borderTop: '6px solid #10b981', display: 'flex', flexDirection: 'column' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(16,185,129,0.08)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.03)'; }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '25px' }}>
              <div style={{ fontSize: '2.5rem', background: '#ecfdf5', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>🌿</div>
              <h2 style={{ margin: '0', fontSize: '1.8rem', color: 'var(--text-color)', fontWeight: '800' }}>Obat Herbal</h2>
            </div>

            <p style={{ color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.7', fontSize: '1.05rem' }}>
              Herbal biasanya dikonsumsi dalam bentuk rebusan, kapsul ekstrak, atau jus. Penggunaannya harus <strong>tetap disertai pemantauan tekanan darah secara rutin</strong> dan tidak menghentikan obat medis tanpa konsultasi.
            </p>

            <div style={{ background: '#f0fdf4', borderLeft: '4px solid #10b981', padding: '16px 20px', borderRadius: '0 12px 12px 0', fontSize: '1rem', marginTop: 'auto', lineHeight: '1.6' }}>
              <strong style={{ color: '#047857', display: 'block', marginBottom: '5px' }}>⭐ Dianjurkan:</strong>
              Dapat dikonsumsi setelah makan untuk mengurangi iritasi lambung dan memastikan penyerapan yang optimal oleh tubuh.
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* Perhatikan Interaksi Section */}
    <section className="section-full section-light">
      <div className="container" style={{ paddingTop: 0, paddingBottom: 0 }}>

        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{ display: 'inline-block', padding: '8px 20px', background: '#fef2f2', color: '#ef4444', borderRadius: '30px', fontWeight: 'bold', marginBottom: '15px' }}>Waspada Efek Samping</div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0 0 15px 0' }}>Perhatikan Interaksi Obat</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '750px', margin: '0 auto' }}>Selalu ada risiko ketika mengkombinasikan pengobatan. Pahami potensi interaksi berbahaya berikut.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '1000px', margin: '0 auto' }}>
          {/* 1. Diuretik + NSAID */}
          <div className="card" style={{ padding: '35px', borderRadius: '24px', background: '#fff', borderLeft: '8px solid #ef4444', display: 'flex', gap: '25px', alignItems: 'flex-start', flexWrap: 'wrap', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
            <div style={{ flexShrink: 0, width: '70px', height: '70px', borderRadius: '20px', background: '#fef2f2', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            </div>
            <div style={{ flex: '1 1 300px' }}>
              <h3 style={{ margin: '0 0 15px 0', color: '#ef4444', fontSize: '1.5rem', fontWeight: '800' }}>1. Diuretik & NSAID</h3>
              <p style={{ margin: '0 0 20px 0', color: 'var(--text-color)', lineHeight: '1.7', fontSize: '1.05rem' }}>
                Kombinasi penggunaan diuretik dan NSAID (obat pereda nyeri seperti Ibuprofen atau Asam Mefenamat) dapat memperburuk fungsi ginjal akibat penurunan aliran darah ginjal yang dimediasi oleh prostaglandin, sehingga menyebabkan retensi cairan dan peningkatan beban kerja jantung yang berpotensi memicu gagal jantung.
              </p>
              <div style={{ background: '#fef2f2', padding: '20px', borderRadius: '16px', border: '1px solid #fecaca' }}>
                <strong style={{ color: '#b91c1c', display: 'block', marginBottom: '8px', fontSize: '1.1rem' }}>Efek Samping ke Kardiovaskular:</strong>
                <span style={{ color: 'var(--text-color)', lineHeight: '1.6' }}>Penggunaan NSAID dapat menurunkan efek diuretik, menyebabkan retensi cairan dan peningkatan tekanan darah, secara perlahan memperburuk kondisi jantung.</span>
                <br />
                <a href="https://doi.org/10.3390/jcm13154470" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '16px', padding: '10px 20px', background: 'white', color: '#ef4444', textDecoration: 'none', fontWeight: '700', borderRadius: '30px', border: '2px solid #ef4444', fontSize: '0.95rem', transition: 'all 0.3s' }}>
                  Baca Kajian Klinis
                </a>
              </div>
            </div>
          </div>

          {/* 2. Spironolakton + ACE Inhibitor */}
          <div className="card" style={{ padding: '35px', borderRadius: '24px', background: '#fff', borderLeft: '8px solid #f59e0b', display: 'flex', gap: '25px', alignItems: 'flex-start', flexWrap: 'wrap', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
            <div style={{ flexShrink: 0, width: '70px', height: '70px', borderRadius: '20px', background: '#fffbeb', color: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            </div>
            <div style={{ flex: '1 1 300px' }}>
              <h3 style={{ margin: '0 0 15px 0', color: '#d97706', fontSize: '1.5rem', fontWeight: '800' }}>2. Spironolakton & ACE Inhibitor</h3>
              <p style={{ margin: '0 0 20px 0', color: 'var(--text-color)', lineHeight: '1.7', fontSize: '1.05rem' }}>
                Kombinasi spironolakton dengan ACE inhibitor meningkatkan risiko terjadinya hiperkalemia ekstrem karena kedua obat tersebut sama-sama menurunkan ekskresi kalium di ginjal. Peningkatan kadar kalium ini dapat mengganggu kelistrikan jantung.
              </p>
              <div style={{ background: '#fffbeb', padding: '20px', borderRadius: '16px', border: '1px solid #fde68a' }}>
                <strong style={{ color: '#b45309', display: 'block', marginBottom: '8px', fontSize: '1.1rem' }}>Efek Samping ke Kardiovaskular:</strong>
                <span style={{ color: 'var(--text-color)', lineHeight: '1.6' }}>Peningkatan hiperkalemia berpotensi menyebabkan aritmia jantung (detak jantung tidak beraturan) dan kejadian kardiak letal lainnya jika tidak dimonitor.</span>
                <br />
                <a href="https://doi.org/10.1016/j.mayocp.2020.03.035" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '16px', padding: '10px 20px', background: 'white', color: '#d97706', textDecoration: 'none', fontWeight: '700', borderRadius: '30px', border: '2px solid #d97706', fontSize: '0.95rem', transition: 'all 0.3s' }}>
                  Baca Kajian Klinis
                </a>
              </div>
            </div>
          </div>

          {/* 3. Herbal + Antihipertensi */}
          <div className="card" style={{ padding: '35px', borderRadius: '24px', background: '#fff', borderLeft: '8px solid #8b5cf6', display: 'flex', gap: '25px', alignItems: 'flex-start', flexWrap: 'wrap', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
            <div style={{ flexShrink: 0, width: '70px', height: '70px', borderRadius: '20px', background: '#f5f3ff', color: '#8b5cf6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
            </div>
            <div style={{ flex: '1 1 300px' }}>
              <h3 style={{ margin: '0 0 15px 0', color: '#8b5cf6', fontSize: '1.5rem', fontWeight: '800' }}>3. Herbal & Antihipertensi Medis</h3>
              <p style={{ margin: '0 0 20px 0', color: 'var(--text-color)', lineHeight: '1.7', fontSize: '1.05rem' }}>
                Penggunaan obat herbal bersamaan dengan antihipertensi konvensional sangat tidak terprediksi. Obat herbal dapat tiba-tiba meningkatkan atau malah menurunkan efek tekanan darah sehingga berpotensi jatuh ke kondisi syok hipotensi.
              </p>
              <div style={{ background: '#f5f3ff', padding: '20px', borderRadius: '16px', border: '1px solid #ddd6fe' }}>
                <strong style={{ color: '#6d28d9', display: 'block', marginBottom: '8px', fontSize: '1.1rem' }}>Efek Samping ke Kardiovaskular:</strong>
                <span style={{ color: 'var(--text-color)', lineHeight: '1.6' }}>Dapat menyebabkan hipotensi parah mendadak, menyebabkan sinkop (pingsan), atau menyebabkan aritmia kronis karena senyawa bioktif tanaman merangsang detak jantung berlebih.</span>
                <br />
                <a href="https://doi.org/10.2174/0115748863289321240424063819" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '16px', padding: '10px 20px', background: 'white', color: '#8b5cf6', textDecoration: 'none', fontWeight: '700', borderRadius: '30px', border: '2px solid #8b5cf6', fontSize: '0.95rem', transition: 'all 0.3s' }}>
                  Baca Kajian Klinis
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    {/* Tanya Jawab Section */}
    <section className="section-full section-white">
      <div className="container" style={{ paddingTop: 0, paddingBottom: 0 }}>

        <div style={{ background: 'var(--surface-solid)', borderRadius: '32px', padding: '60px 40px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9', maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px', color: 'var(--text-color)', fontSize: '2.5rem', fontWeight: '800' }}>Apakah Obat & Herbal Bisa <span style={{ color: 'var(--primary)' }}>Bersamaan?</span></h2>
          <p style={{ textAlign: 'center', fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '750px', margin: '0 auto 40px', lineHeight: '1.7' }}>
            Secara klinis <strong>dapat dikonsumsi</strong> sebagai asupan suportif komplementer terapi Anda. Namun <strong>sangat ditekankan</strong> untuk menyimak protokol keselamatan berikut:
          </p>

          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', listStyleType: 'none', padding: 0, margin: '0 0 40px 0' }}>
            <li style={{ background: '#f8fafc', padding: '24px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '20px', border: '1px solid #e2e8f0', transition: 'all 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ fontSize: '2rem', background: '#e0f2fe', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>⏱️</div>
              <span style={{ fontSize: '1.1rem', color: 'var(--text-color)', fontWeight: '600' }}>Jeda waktu ketat (1–2 Jam)</span>
            </li>
            <li style={{ background: '#f8fafc', padding: '24px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '20px', border: '1px solid #e2e8f0', transition: 'all 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ fontSize: '2rem', background: '#dcfce7', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>👨‍⚕️</div>
              <span style={{ fontSize: '1.1rem', color: 'var(--text-color)', fontWeight: '600' }}>Konsultasi Spesialis</span>
            </li>
            <li style={{ background: '#f8fafc', padding: '24px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '20px', border: '1px solid #e2e8f0', transition: 'all 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ fontSize: '2rem', background: '#fef3c7', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>📊</div>
              <span style={{ fontSize: '1.1rem', color: 'var(--text-color)', fontWeight: '600' }}>Tes Laboratorium Bulanan</span>
            </li>
            <li style={{ background: '#f8fafc', padding: '24px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '20px', border: '1px solid #e2e8f0', transition: 'all 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ fontSize: '2rem', background: '#fee2e2', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>🚫</div>
              <span style={{ fontSize: '1.1rem', color: 'var(--text-color)', fontWeight: '600' }}>Jangan henti dosis sembarang</span>
            </li>
          </ul>

          <div style={{ textAlign: 'center', color: '#b91c1c', fontWeight: '700', padding: '24px', background: '#fef2f2', border: '2px dashed #fca5a5', borderRadius: '20px', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
            <span style={{ fontSize: '2rem' }}>⚠️</span>
            <span>Tanpa pemantauan, kombinasi silang <strong>dapat menyebabkan hipotensi akut</strong> atau gangguan gagal jantung mendadak!</span>
          </div>
        </div>

      </div>
    </section>

  </div>
);

export default Panduan;