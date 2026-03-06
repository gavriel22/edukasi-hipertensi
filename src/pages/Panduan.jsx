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
        <h1 style={{ color: 'white', margin: '0 0 20px 0', fontSize: '3rem', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>Penggunaan yang Tepat</h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto', fontWeight: '300', lineHeight: '1.6' }}>
          Memahami cara kerja, aturan pakai, serta interaksi antar obat sangat penting untuk mencapai hasil terapi yang maksimal dan menghindari komplikasi yang tidak diinginkan.
        </p>
      </div>
    </div>

    <div className="container" style={{ marginTop: '0', paddingTop: '0' }}>

      {/* Penggunaan Obat Section */}
      <div className="responsive-grid-large" style={{ marginBottom: '60px' }}>

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

      <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', marginBottom: '50px' }}>
        {/* 1. Diuretik + NSAID */}
        <div className="card" style={{ padding: '30px', borderLeft: '6px solid #ef4444' }}>
          <h3 style={{ margin: '0 0 15px 0', color: '#ef4444', fontSize: '1.4rem' }}>1. Diuretik + NSAID</h3>
          <p style={{ margin: '0 0 15px 0', color: 'var(--text-color)', lineHeight: '1.7' }}>
            Kombinasi penggunaan diuretik dan NSAID juga dapat memperburuk fungsi ginjal akibat penurunan aliran darah ginjal yang dimediasi oleh prostaglandin, sehingga menyebabkan retensi cairan dan peningkatan beban kerja jantung yang berpotensi memicu gagal jantung kongestif (Novtariansyah, 2024). Oleh karena itu, penggunaan kedua golongan obat tersebut harus dilakukan secara hati-hati dan di bawah pengawasan tenaga kesehatan untuk meminimalkan risiko komplikasi kardiovaskular.
          </p>
          <div style={{ background: '#fef2f2', padding: '15px', borderRadius: '10px', border: '1px solid #fecaca' }}>
            <strong style={{ color: '#b91c1c' }}>Efek samping ke jantung:</strong> <span style={{ color: 'var(--text-color)' }}>penggunaan NSAID dapat menurunkan efek diuretik, menyebabkan retensi cairan dan peningkatan tekanan darah, sehingga dapat memperburuk gagal jantung pada pasien dengan penyakit kardiovaskular (Wu et al., 2024)</span>
            <br />
            <a href="https://doi.org/10.3390/jcm13154470" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', marginTop: '12px', padding: '6px 12px', background: 'white', color: 'var(--primary)', textDecoration: 'none', fontWeight: '600', borderRadius: '6px', border: '1px solid var(--primary)', fontSize: '0.9rem' }}>
              Baca Referensi Lanjut
            </a>
          </div>
        </div>

        {/* 2. Spironolakton + ACE Inhibitor */}
        <div className="card" style={{ padding: '30px', borderLeft: '6px solid #f59e0b' }}>
          <h3 style={{ margin: '0 0 15px 0', color: '#f59e0b', fontSize: '1.4rem' }}>2. Spironolakton + ACE Inhibitor</h3>
          <p style={{ margin: '0 0 15px 0', color: 'var(--text-color)', lineHeight: '1.7' }}>
            Kombinasi spironolakton dengan ACE inhibitor dapat meningkatkan risiko terjadinya hiperkalemia karena kedua obat tersebut sama-sama menurunkan ekskresi kalium di ginjal. Peningkatan kadar kalium dalam darah dapat mengganggu keseimbangan elektrolit dan berpotensi menyebabkan aritmia jantung atau gangguan fungsi jantung jika tidak dimonitor dengan baik.
          </p>
          <div style={{ background: '#fffbeb', padding: '15px', borderRadius: '10px', border: '1px solid #fde68a' }}>
            <strong style={{ color: '#b45309' }}>Efek samping ke jantung:</strong> <span style={{ color: 'var(--text-color)' }}>penggunaan spironolakton bersama terapi standar gagal jantung (termasuk ACE inhibitor) dapat meningkatkan risiko hiperkalemia dan gangguan fungsi ginjal, yang berpotensi mempengaruhi fungsi jantung pada pasien gagal jantung (Secora et al., 2020)</span>
            <br />
            <a href="https://doi.org/10.1016/j.mayocp.2020.03.035" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', marginTop: '12px', padding: '6px 12px', background: 'white', color: 'var(--primary)', textDecoration: 'none', fontWeight: '600', borderRadius: '6px', border: '1px solid var(--primary)', fontSize: '0.9rem' }}>
              Baca Referensi Lanjut
            </a>
          </div>
        </div>

        {/* 3. Herbal + Antihipertensi */}
        <div className="card" style={{ padding: '30px', borderLeft: '6px solid #8b5cf6' }}>
          <h3 style={{ margin: '0 0 15px 0', color: '#8b5cf6', fontSize: '1.4rem' }}>3. Herbal + Antihipertensi</h3>
          <p style={{ margin: '0 0 15px 0', color: 'var(--text-color)', lineHeight: '1.7' }}>
            Penggunaan obat herbal secara bersamaan dengan obat antihipertensi dapat menimbulkan interaksi obat yang mempengaruhi efektivitas terapi tekanan darah. Beberapa herbal dapat meningkatkan atau menurunkan efek antihipertensi sehingga berpotensi menyebabkan hipotensi berlebihan atau sebaliknya menurunkan efektivitas obat, yang pada akhirnya dapat mengganggu pengendalian tekanan darah dan meningkatkan risiko komplikasi kardiovaskular.
          </p>
          <div style={{ background: '#f5f3ff', padding: '15px', borderRadius: '10px', border: '1px solid #ddd6fe' }}>
            <strong style={{ color: '#6d28d9' }}>Efek samping ke jantung:</strong> <span style={{ color: 'var(--text-color)' }}>berisiko perubahan tekanan darah menjadi hipotensi atau penurunan tekanan darah, aritmia, atau komplikasi kardiovaskular lainnya jika konsumsi herbal tidak sesuai dengan obat yang diresepkan (Jyothi et al., 2025)</span>
            <br />
            <a href="https://doi.org/10.2174/0115748863289321240424063819" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', marginTop: '12px', padding: '6px 12px', background: 'white', color: 'var(--primary)', textDecoration: 'none', fontWeight: '600', borderRadius: '6px', border: '1px solid var(--primary)', fontSize: '0.9rem' }}>
              Baca Referensi Lanjut
            </a>
          </div>
        </div>
      </div>

      <hr style={{ margin: '60px 0', border: 'none', borderTop: '1px solid var(--border-color)' }} />

      {/* Tanya Jawab Section */}
      <div style={{ background: 'var(--surface-solid)', borderRadius: '24px', padding: '40px', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border-color)', marginBottom: '40px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: 'var(--text-color)', fontSize: '2rem' }}>Apakah Obat dan Herbal Bisa Dikonsumsi Bersamaan?</h2>
        <p style={{ textAlign: 'center', fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '750px', margin: '0 auto 30px', lineHeight: '1.7' }}>
          Secara umum <strong>dapat dikonsumsi bersamaan</strong> sebagai terapi komplementer, namun sangat penting untuk memperhatikan hal-hal berikut:
        </p>

        <ul className="responsive-grid" style={{ listStyleType: 'none', padding: 0, margin: '0 0 30px 0' }}>
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

  </div>
);

export default Panduan;