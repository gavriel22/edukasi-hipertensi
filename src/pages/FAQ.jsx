import React, { useState } from 'react';
import logoImg from '../assets/images/LOGO.png';
import feliciaImg from '../assets/images/FeliciaYoanSugiarto.jpeg';
import inesImg from '../assets/images/InesSuryaNingtyas.jpeg';
import shofiyaImg from '../assets/images/ShofiyaRamadhani.jpeg';
import yurikeImg from '../assets/images/YurikeDaroLuenPanamuant.jpeg';
import sefnatImg from '../assets/images/SefnatDeyal.jpeg';
import fianeImg from '../assets/images/Ners Fiane de Fretes, S.Kep, MAN., Sp. KMB.jpeg';
import catherineImg from '../assets/images/Ners Catherine Natawirarindry, S. Kep.jpeg';

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
      <div className="hero-page" style={{ marginBottom: 0 }}>
        <div className="container" style={{ padding: '0' }}>
          <h1 className="hero-page-title">Tentang Kami</h1>
          <p className="hero-page-desc" style={{ maxWidth: '600px' }}>
            Kami berdedikasi untuk memberikan informasi kesehatan yang akurat dan terpercaya, khususnya mengenai penyakit hipertensi dan pengobatan diuretik.
          </p>
        </div>
      </div>

      <section className="section-full section-white">
        <div className="container" style={{ paddingTop: 0 }}>

          {/* Dosen Pembimbing Section */}
          <div style={{ marginBottom: '80px', textAlign: 'center' }}>
            <div style={{ display: 'inline-block', padding: '8px 20px', background: '#EAF7F0', color: 'var(--primary)', borderRadius: '30px', fontWeight: 'bold', marginBottom: '15px' }}>Pembimbing Akademik</div>
            <h2 style={{ fontSize: '2.5rem', margin: '0 0 40px 0', fontWeight: '800' }}>Dosen Pembimbing</h2>

            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '50px' }}>
              <div style={{ textAlign: 'center', width: '250px' }} className="team-card">
                <div style={{ padding: '8px', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', borderRadius: '50%', display: 'inline-block', marginBottom: '20px' }}>
                  <img src={catherineImg} alt="Ners Catherine Natawirarindry, S. Kep" style={{ width: '180px', height: '180px', objectFit: 'cover', borderRadius: '50%', border: '4px solid white' }} />
                </div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-color)', margin: '0 0 8px 0', fontWeight: '700' }}>Ners Catherine Natawirarindry, S. Kep</h3>
                <p style={{ color: 'var(--primary)', fontSize: '0.95rem', margin: 0, fontWeight: '600' }}>Dosen Pembimbing Utama</p>
              </div>
              <div style={{ textAlign: 'center', width: '250px' }} className="team-card">
                <div style={{ padding: '8px', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', borderRadius: '50%', display: 'inline-block', marginBottom: '20px' }}>
                  <img src={fianeImg} alt="Ners Fiane de Fretes, S.Kep, MAN., Sp. KMB" style={{ width: '180px', height: '180px', objectFit: 'cover', borderRadius: '50%', border: '4px solid white' }} />
                </div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-color)', margin: '0 0 8px 0', fontWeight: '700' }}>Ners Fiane de Fretes, S.Kep, MAN., Sp. KMB</h3>
                <p style={{ color: 'var(--primary)', fontSize: '0.95rem', margin: 0, fontWeight: '600' }}>Dosen Pembimbing Pendamping</p>
              </div>
            </div>
          </div>

          <hr style={{ margin: '0 auto 80px', width: '200px', border: 'none', borderTop: '4px solid rgba(0,0,0,0.05)', borderRadius: '4px' }} />

          {/* Tim Penyusun Section */}
          <div style={{ marginBottom: '40px', textAlign: 'center' }}>
            <div style={{ display: 'inline-block', padding: '8px 20px', background: '#f5f3ff', color: '#8b5cf6', borderRadius: '30px', fontWeight: 'bold', marginBottom: '15px' }}>Tim Penyusun</div>
            <h2 style={{ fontSize: '2.5rem', margin: '0 0 50px 0', fontWeight: '800' }}>Tim Penyusun</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', maxWidth: '1000px', margin: '0 auto' }}>
              {[
                { name: 'Felicia Yoan Sugiarto', img: feliciaImg },
                { name: 'Ines Surya Ningtyas', img: inesImg },
                { name: 'Shofiya Ramadhani', img: shofiyaImg },
                { name: 'Yurike Daro Iuen P.', img: yurikeImg },
                { name: 'Sefnat Deyal', img: sefnatImg }
              ].map((member, idx) => (
                <div key={idx} style={{ textAlign: 'center', background: '#fff', padding: '30px 20px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.04)', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <img src={member.img} alt={member.name} style={{ width: '130px', height: '130px', objectFit: 'cover', borderRadius: '50%', marginBottom: '20px', boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }} />
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--text-color)', margin: '0', fontWeight: '700' }}>{member.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-full section-light">
        <div className="container" style={{ paddingTop: 0 }}>
          {/* FAQ Content */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.5rem', margin: 0, fontWeight: '800' }}>FAQ</h2>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto 80px', background: '#fff', padding: '40px', borderRadius: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', gap: '24px' }}>
              <div style={{ flexShrink: 0, width: '48px', height: '48px', borderRadius: '50%', background: '#EAF7F0', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold' }}>Q</div>
              <div>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '1.3rem', color: 'var(--text-color)' }}>Bolehkah obat medis dan herbal diminum bersamaan?</h3>
                <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1.05rem' }}>
                  Tanpa pemahaman yang tepat, penggunaan bersamaan dapat menimbulkan risiko interaksi. Dianjurkan memberi jeda 1-2 jam antara konsumsi obat medis dan herbal untuk menghindari efek yang tidak diinginkan.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section via Split Layout */}
          <div className="split-layout" style={{ background: '#fff', padding: '50px', borderRadius: '32px', boxShadow: '0 20px 50px rgba(31,122,92,0.08)' }}>
            <div className="split-content">
              <h2 style={{ marginTop: '0', fontSize: '2.5rem', fontWeight: '800', marginBottom: '20px' }}>Hubungi <span style={{ color: 'var(--primary)' }}>Tim Kami</span></h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '40px' }}>
                Apakah Anda memiliki pertanyaan lebih rinci mengenai penggunaan obat diuretik atau interaksi herbal? Jangan ragu untuk mengirimkan pesan langsung ke WhatsApp kami.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '25px', padding: '20px', background: '#f8fafc', borderRadius: '16px' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16a34a' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <span style={{ display: 'block', fontWeight: '700', fontSize: '1.1rem', color: 'var(--text-color)' }}>WhatsApp Terintegrasi</span>
                  <span style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Pesan Anda akan langsung masuk ke HP tim spesialis kami.</span>
                </div>
              </div>
            </div>

            <div className="split-media">
              <form onSubmit={handleSubmit} style={{ width: '100%', background: '#fafafa', padding: '30px', borderRadius: '24px', border: '1px solid #eaeaea' }}>
                <div style={{ display: 'flex', gap: '15px', flexDirection: 'column' }}>
                  <input
                    type="text"
                    name="nama"
                    placeholder="Nama Lengkap"
                    required
                    value={formData.nama}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#fff', fontSize: '1rem' }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Alamat Email (Opsional)"
                    value={formData.email}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#fff', fontSize: '1rem' }}
                  />
                  <textarea
                    name="pesan"
                    placeholder="Tuliskan keluhan atau pertanyaan Anda..."
                    required
                    value={formData.pesan}
                    onChange={handleChange}
                    style={{ width: '100%', height: '140px', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#fff', fontSize: '1rem', resize: 'vertical' }}
                  ></textarea>
                  <button type="submit" className="btn" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', fontSize: '1.1rem', padding: '16px' }}>
                    Kirim Pesan
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Didukung Oleh Section */}
      <div className="section-white" style={{ textAlign: 'center', padding: '60px 20px', borderTop: '1px solid var(--border-color)' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: '700' }}>Didukung Oleh Institusi Resmi</p>
        <img src={logoImg} alt="Logo Dukungan" style={{ width: '180px', height: 'auto', filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.08))' }} />
      </div>

    </div>
  );
};

export default FAQ;