import React from 'react';

const Keamanan = () => (
  <div className="container">
    <h1>Penggunaan yang Tepat</h1>
    <div className="card-grid">
      <div className="card">
        <h3>Aturan Diuretik</h3>
        <ul>
          <li>Konsumsi sesuai anjuran dokter</li>
          <li>Dianjurkan diminum pada pagi hari</li>
        </ul>
      </div>
      <div className="card">
        <h3>Aturan Herbal</h3>
        <ul>
          <li>Dapat dikonsumsi setelah makan</li>
          <li>Gunakan dalam jumlah wajar</li>
        </ul>
      </div>
    </div>

    <h2>Perhatikan Interaksi</h2>
    <div className="alert">
      <p><strong>Beri jeda waktu 1-2 jam</strong> antara konsumsi obat medis dan herbal.</p>
      <ul>
        <li>Herbal + antihipertensi → Risiko hipotensi</li>
        <li>Diuretik + NSAID → Efek obat dapat menurun</li>
      </ul>
    </div>
  </div>
);

export default Keamanan;