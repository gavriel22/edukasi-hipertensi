import React from 'react';

const Pencegahan = () => (
  <div className="container">
    <h1>Pencegahan Hipertensi</h1>
    <p>Hipertensi yang tidak terkontrol dapat meningkatkan beban kerja jantung yang dalam jangka panjang dapat berkembang menjadi gagal jantung.</p>

    <ul>
      <li>Diet rendah garam</li>
      <li>Olahraga rutin</li>
      <li>Berhenti merokok</li>
    </ul>

    <hr style={{ margin: '40px 0' }} />

    <h2>Video Edukasi</h2>
    <div style={{ display: 'flex', justifyContent: 'center', borderRadius: '8px', overflow: 'hidden' }}>
      <video controls width="100%" style={{ maxHeight: '400px', background: '#000' }}>
        <source src="/barasuara.mp4" type="video/mp4" />
        Maaf, browser Anda tidak mendukung pemutaran video.
      </video>
    </div>
  </div>
);

export default Pencegahan;