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

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gap: '24px',
  margin: '20px 0 50px 0'
};

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
  <div className="container animate-fade-in-up">

    {/* Header Section */}
    <div style={{ textAlign: 'center', marginBottom: '50px', padding: '40px 20px', background: 'linear-gradient(135deg, var(--section-alternate), #ffffff)', borderRadius: '24px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
      <h1 style={{ color: 'var(--primary)', marginBottom: '20px', fontSize: '2.5rem' }}>Pencegahan & Pengendalian</h1>
      <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
        Hipertensi yang tidak terkontrol dapat meningkatkan beban kerja jantung yang dalam jangka panjang berkembang menjadi gagal jantung. <strong>Pengendalian faktor risiko secara komprehensif terbukti menurunkan kejadian gagal jantung.</strong>
      </p>
    </div>

    {/* Prevention List */}
    <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '2rem' }}>Upaya Pencegahan</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', marginBottom: '80px' }}>

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

    <div style={gridStyle}>
      {['Hipokalemia', 'Hiponatremia', 'Dehidrasi', 'Hiperurisemia', 'Gula Darah Naik'].map((efek, idx) => (
        <div key={idx} className="card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          {/* Image Placeholder */}
          <div style={imagePlaceholderStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#e2e8f0';
              e.currentTarget.style.borderColor = 'var(--primary)';
              e.currentTarget.style.color = 'var(--primary)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#f1f5f9';
              e.currentTarget.style.borderColor = '#cbd5e1';
              e.currentTarget.style.color = '#94a3b8';
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            Tambah Foto
          </div>
          <h4 style={{ margin: 0, color: 'var(--text-color)', fontSize: '1.1rem' }}>{efek}</h4>
        </div>
      ))}
    </div>

    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px', marginTop: '60px' }}>
      <div style={{ width: '4px', height: '30px', background: 'var(--primary)', borderRadius: '4px' }}></div>
      <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Efek Samping Herbal</h3>
    </div>

    <div style={gridStyle}>
      {['Gangguan Pencernaan', 'Reaksi Alergi', 'Risiko Toksisitas'].map((efek, idx) => (
        <div key={idx} className="card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          {/* Image Placeholder */}
          <div style={imagePlaceholderStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#e2e8f0';
              e.currentTarget.style.borderColor = 'var(--primary)';
              e.currentTarget.style.color = 'var(--primary)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#f1f5f9';
              e.currentTarget.style.borderColor = '#cbd5e1';
              e.currentTarget.style.color = '#94a3b8';
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            Tambah Foto
          </div>
          <h4 style={{ margin: 0, color: 'var(--text-color)', fontSize: '1.1rem' }}>{efek}</h4>
        </div>
      ))}
    </div>

    <hr style={{ margin: '80px 0 40px', border: 'none', borderTop: '1px solid var(--border-color)' }} />

  </div>
);

export default Pencegahan;