import React from 'react';

const preventionItemStyle = {
  background: 'var(--surface-solid)',
  padding: '24px',
  borderRadius: '16px',
  border: '1px solid var(--border-color)',
  boxShadow: 'var(--shadow-sm)',
  transition: 'var(--transition)'
};

const Panduan = () => (
  <div className="container animate-fade-in-up">

    {/* Header Section */}
    <div style={{ textAlign: 'center', marginBottom: '50px', padding: '40px 20px', background: 'linear-gradient(135deg, var(--section-alternate), #ffffff)', borderRadius: '24px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
      <h1 style={{ color: 'var(--primary)', marginBottom: '20px', fontSize: '2.5rem' }}>Penggunaan yang Tepat</h1>
      <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
        Memahami cara kerja, aturan pakai, serta interaksi antar obat sangat penting untuk mencapai hasil terapi yang maksimal dan menghindari komplikasi yang tidak diinginkan.
      </p>
    </div>

    {/* Penggunaan Obat Section */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px', marginBottom: '60px' }}>

      {/* Diuretik Card */}
      <div className="card" style={{ ...preventionItemStyle, borderTop: '4px solid var(--primary)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
          <div style={{ fontSize: '2rem', background: '#EAF7F0', padding: '12px', borderRadius: '12px' }}>💊</div>
          <h2 style={{ margin: 0, fontSize: '1.6rem', color: 'var(--text-color)' }}>Obat Diuretik</h2>
        </div>

        <p style={{ color: 'var(--text-muted)', marginBottom: '15px', lineHeight: '1.7' }}>
          Pengobatan dengan diuretik harus sesuai dosis dokter dan dilakukan pemantauan elektrolit secara berkala. Kombinasi dengan <strong>ACE inhibitor</strong> atau <strong>ARB</strong> sering digunakan untuk meningkatkan efektivitas dan mengurangi risiko komplikasi.
        </p>

        <h4 style={{ color: 'var(--primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Pemantauan Meliputi:</h4>
        <ul style={{ color: 'var(--text-muted)', margin: '0', paddingLeft: '20px', marginBottom: '20px' }}>
          <li style={{ marginBottom: '6px' }}>Tekanan darah</li>
          <li style={{ marginBottom: '6px' }}>Fungsi ginjal (ureum, kreatinin)</li>
          <li style={{ marginBottom: '6px' }}>Kadar kalium dan natrium</li>
        </ul>

        <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '12px 16px', borderRadius: '0 8px 8px 0', fontSize: '0.95rem', marginTop: 'auto' }}>
          <strong>Dianjurkan:</strong> Diminum pagi hari untuk menghindari nokturia (sering buang air kecil malam hari) yang dapat mengganggu kualitas tidur.
        </div>
      </div>

      {/* Herbal Card */}
      <div className="card" style={{ ...preventionItemStyle, borderTop: '4px solid #10b981', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
          <div style={{ fontSize: '2rem', background: '#ecfdf5', padding: '12px', borderRadius: '12px' }}>🌿</div>
          <h2 style={{ margin: '0', fontSize: '1.6rem', color: 'var(--text-color)' }}>Obat Herbal</h2>
        </div>

        <p style={{ color: 'var(--text-muted)', marginBottom: '15px', lineHeight: '1.7' }}>
          Herbal biasanya dikonsumsi dalam bentuk rebusan, kapsul ekstrak, atau jus. Penggunaannya harus <strong>tetap disertai pemantauan tekanan darah secara rutin</strong> dan tidak menghentikan obat medis tanpa konsultasi.
        </p>

        <div style={{ background: '#f0fdf4', borderLeft: '4px solid #10b981', padding: '12px 16px', borderRadius: '0 8px 8px 0', fontSize: '0.95rem', marginTop: 'auto' }}>
          <strong>Dianjurkan:</strong> Dapat dikonsumsi setelah makan untuk mengurangi iritasi lambung dan meningkatkan tolerabilitas.
        </div>
      </div>

    </div>

    {/* Perhatikan Interaksi Section */}
    <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '2rem' }}>Perhatikan Interaksi</h2>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '40px' }}>
      <div className="card" style={{ padding: '20px', borderLeft: '4px solid #ef4444' }}>
        <h4 style={{ margin: '0 0 10px 0', color: '#ef4444', fontSize: '1.1rem' }}>Diuretik + NSAID</h4>
        <p style={{ margin: 0, color: 'var(--text-muted)' }}>Menurunkan efek antihipertensi dari obat diuretik.</p>
      </div>

      <div className="card" style={{ padding: '20px', borderLeft: '4px solid #f59e0b' }}>
        <h4 style={{ margin: '0 0 10px 0', color: '#f59e0b', fontSize: '1.1rem' }}>Spironolakton + ACE Inhibitor</h4>
        <p style={{ margin: 0, color: 'var(--text-muted)' }}>Meningkatkan risiko hiperkalemia (kadar kalium berlebih).</p>
      </div>

      <div className="card" style={{ padding: '20px', borderLeft: '4px solid #8b5cf6' }}>
        <h4 style={{ margin: '0 0 10px 0', color: '#8b5cf6', fontSize: '1.1rem' }}>Herbal + Antihipertensi</h4>
        <p style={{ margin: 0, color: 'var(--text-muted)' }}>Meningkatkan risiko hipotensi berlebihan jika dosis tidak disesuaikan.</p>
      </div>
    </div>

    <div className="alert" style={{ background: 'rgba(52, 152, 219, 0.08)', borderLeft: '4px solid var(--highlight-color)' }}>
      <p style={{ margin: 0 }}>Beberapa senyawa herbal dapat memengaruhi <strong>enzim CYP450 di hati</strong>, sehingga mengubah metabolisme obat.</p>
    </div>

    <hr style={{ margin: '60px 0', border: 'none', borderTop: '1px solid var(--border-color)' }} />

    {/* Tanya Jawab Section */}
    <div style={{ background: 'var(--surface-solid)', borderRadius: '24px', padding: '40px', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border-color)', marginBottom: '40px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: 'var(--text-color)', fontSize: '2rem' }}>Apakah Obat dan Herbal Bisa Dikonsumsi Bersamaan?</h2>
      <p style={{ textAlign: 'center', fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '750px', margin: '0 auto 30px', lineHeight: '1.7' }}>
        Secara umum <strong>dapat dikonsumsi bersamaan</strong> sebagai terapi komplementer, namun sangat penting untuk memperhatikan hal-hal berikut:
      </p>

      <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', listStyleType: 'none', padding: 0, margin: '0 0 30px 0' }}>
        <li style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '16px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontSize: '1.8rem', background: '#e0f2fe', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px' }}>⏱️</div>
          <span style={{ fontSize: '1.05rem', color: 'var(--text-color)', fontWeight: '500' }}>Jarak waktu 1–2 jam</span>
        </li>
        <li style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '16px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontSize: '1.8rem', background: '#dcfce7', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px' }}>👨‍⚕️</div>
          <span style={{ fontSize: '1.05rem', color: 'var(--text-color)', fontWeight: '500' }}>Konsultasi tenaga Kesehatan</span>
        </li>
        <li style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '16px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontSize: '1.8rem', background: '#fef3c7', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px' }}>📊</div>
          <span style={{ fontSize: '1.05rem', color: 'var(--text-color)', fontWeight: '500' }}>Monitoring tekanan darah dan elektrolit</span>
        </li>
        <li style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '16px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontSize: '1.8rem', background: '#fee2e2', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px' }}>🚫</div>
          <span style={{ fontSize: '1.05rem', color: 'var(--text-color)', fontWeight: '500' }}>Tidak menghentikan obat medis sepihak</span>
        </li>
      </ul>

      <div style={{ textAlign: 'center', color: '#ef4444', fontWeight: '600', padding: '20px', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '16px', fontSize: '1.1rem' }}>
        ⚠️ Tanpa pemantauan, kombinasi dapat menyebabkan hipotensi berat atau gangguan elektrolit!
      </div>
    </div>

  </div>
);

export default Panduan;