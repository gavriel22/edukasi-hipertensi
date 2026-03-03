import React, { useState } from 'react';
import logoImg from '../assets/images/LOGO.png';

const FAQ = () => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    pesan: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = '6281254825084';

    const message = `Halo, saya memiliki pertanyaan dari web Edukasi Hipertensi:\n\n*Nama:* ${formData.nama}\n*Email:* ${formData.email}\n*Pertanyaan:* ${formData.pesan}`;

    const encodedMessage = encodeURIComponent(message);

    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="animate-fade-in-up">
      {/* Hero Section for About Us */}
      <div style={{
        background: 'linear-gradient(135deg, var(--primary) 0%, #115941 100%)',
        padding: '80px 20px 60px',
        textAlign: 'center',
        color: 'white',
        marginBottom: '40px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}>
        <div className="container" style={{ padding: '0' }}>
          <h1 style={{ color: 'white', margin: '0 0 20px 0', fontSize: '3rem', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>Tentang Kami</h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto', fontWeight: '300', lineHeight: '1.6' }}>
            Kami berdedikasi untuk memberikan informasi kesehatan yang akurat dan terpercaya, khususnya mengenai penyakit hipertensi dan pengobatan diuretik.
          </p>
        </div>
      </div>

      {/* Profil Penyusun Section (Full Width, No Container) */}
      <div style={{ padding: '20px 0 60px 0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2.2rem', color: 'var(--text-color)' }}>Tim Penyusun</h2>

        {/* Full width flex container with no max-width constraints */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '40px',
          padding: '0 5%',
          width: '100%'
        }}>
          {[1, 2, 3, 4, 5].map((item, idx) => (
            <div key={idx} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '160px',
              textAlign: 'center'
            }}>
              <div style={{
                width: '130px',
                height: '130px',
                background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
                borderRadius: '50%',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#64748b',
                border: '4px solid white',
                boxShadow: '0 10px 20px -5px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden'
              }}>
                <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '1.2rem', color: 'var(--text-color)', fontWeight: '600' }}>Anggota Tim {item}</h3>
              <p style={{ margin: 0, color: 'var(--primary)', fontSize: '0.9rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '1px' }}>Penyusun</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container" style={{ marginTop: '0', paddingTop: '0' }}>
        <hr style={{ margin: '0 0 60px 0', border: 'none', borderTop: '1px solid var(--border-color)' }} />

        {/* Existing FAQ Content */}
        <div style={{
          background: 'var(--surface-solid)',
          borderRadius: 'var(--radius-lg)',
          padding: '40px',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '60px'
        }}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2rem', color: 'var(--text-color)' }}>Pertanyaan Sering Diajukan (FAQ)</h2>

          <div style={{
            borderLeft: '4px solid var(--primary)',
            padding: '20px 24px',
            background: 'var(--section-alternate)',
            borderRadius: '0 12px 12px 0',
            marginBottom: '20px'
          }}>
            <h3 style={{ margin: '0 0 10px 0', color: 'var(--text-color)', fontSize: '1.2rem' }}>Bolehkah obat medis dan herbal diminum bersamaan?</h3>
            <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: '1.6' }}>
              Tanpa pemahaman yang tepat, penggunaan bersamaan dapat menimbulkan risiko interaksi. Dianjurkan memberi jeda 1-2 jam antara konsumsi obat medis dan herbal untuk menghindari efek yang tidak diinginkan.
            </p>
          </div>
        </div>

        {/* Call to Action & Form */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          alignItems: 'start',
          background: 'var(--surface-solid)',
          borderRadius: 'var(--radius-lg)',
          padding: '40px',
          boxShadow: 'var(--shadow-md)'
        }}>
          <div>
            <h2 style={{ marginTop: '0', fontSize: '2.2rem', color: 'var(--text-color)', marginBottom: '20px' }}>Hubungi Kami</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '30px' }}>
              Jika Anda memiliki pertanyaan lebih lanjut terkait penggunaan obat diuretik atau herbal, silakan hubungi tim ahli kami melalui formulir ini. Pesan Anda akan langsung dikirimkan ke WhatsApp kami.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--text-color)', marginBottom: '20px' }}>
              <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(31, 122, 92, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <span style={{ display: 'block', fontWeight: '600', fontSize: '1.05rem' }}>WhatsApp Support</span>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Respons cepat (Jam kerja)</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--text-color)' }}>
              <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(31, 122, 92, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
              </div>
              <div>
                <span style={{ display: 'block', fontWeight: '600', fontSize: '1.05rem' }}>Konsultasi Gratis</span>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Mengenai pengobatan hipertensi</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input
              type="text"
              name="nama"
              placeholder="Nama Lengkap"
              required
              value={formData.nama}
              onChange={handleChange}
              style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', marginBottom: '0', fontSize: '1rem', fontFamily: 'inherit' }}
            />
            <input
              type="email"
              name="email"
              placeholder="Alamat Email"
              required
              value={formData.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', marginBottom: '0', fontSize: '1rem', fontFamily: 'inherit' }}
            />
            <textarea
              name="pesan"
              placeholder="Tuliskan pertanyaan Anda di sini..."
              required
              value={formData.pesan}
              onChange={handleChange}
              style={{ width: '100%', height: '140px', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', marginBottom: '0', fontSize: '1rem', fontFamily: 'inherit', resize: 'vertical' }}
            ></textarea>
            <button type="submit" className="btn" style={{ width: '100%', justifyContent: 'center', marginTop: '10px', fontSize: '1.05rem' }}>
              Kirim ke WhatsApp
              <svg style={{ marginLeft: '10px' }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </form>
        </div>

        {/* Didukung Oleh Section */}
        <div style={{ textAlign: 'center', marginTop: '80px', paddingTop: '40px', borderTop: '1px solid var(--border-color)' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600' }}>Didukung Oleh</p>
          <img src={logoImg} alt="Logo Dukungan" style={{ width: '160px', height: 'auto', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }} />
        </div>

      </div>
    </div>
  );
};

export default FAQ;