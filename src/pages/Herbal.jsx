import React from 'react';

const Herbal = () => (
  <div className="container">
    <h1>Herbal sebagai Pendamping Terapi</h1>
    <p>Selain terapi medis, beberapa tanaman herbal juga digunakan sebagai pendamping dalam membantu mengontrol tekanan darah.</p>
    
    <div className="card-grid">
      <div className="card"><h3>Daun Sirsak</h3></div>
      <div className="card"><h3>Bawang Putih</h3></div>
      <div className="card"><h3>Seledri</h3></div>
    </div>
    
    <p>Tanaman tersebut mengandung senyawa aktif seperti antioksidan yang dapat membantu mendukung kesehatan sistem kardiovaskular.</p>
    <div className="alert">
      <strong>Penting:</strong> Herbal digunakan sebagai pendamping, bukan pengganti obat medis.
    </div>
  </div>
);

export default Herbal;