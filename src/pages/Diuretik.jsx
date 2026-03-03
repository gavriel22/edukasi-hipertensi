import React from 'react';
import chlorthalidoneImg from '../assets/images/Chlorthalidone.jpeg';
import hydrochlorothiazideImg from '../assets/images/Hydrochlorothiazide.jpeg';
import indapamideImg from '../assets/images/Indapamide.jpeg';

const Diuretik = () => (
  <div className="container">
    <h1>Kenali Obat Diuretik</h1>
    <p>Diuretik merupakan salah satu terapi utama dalam pengelolaan hipertensi. Obat ini bekerja dengan membantu tubuh mengeluarkan kelebihan natrium dan cairan melalui ginjal sehingga tekanan darah dapat menurun.</p>

    <div className="card-grid">
      <div className="card">
        <h3>Fungsi Utama Obat Diuretik:</h3>
        <ul>
          <li>Menurunkan volume plasma dan curah jantung</li>
          <li>Mengurangi resistensi vaskular perifer</li>
          <li>Menurunkan tekanan dinding arteri</li>
          <li>Mencegah hipertrofi ventrikel kiri</li>
          <li>Mengurangi risiko gagal jantung dan stroke</li>
        </ul>
        <p style={{ marginTop: '10px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          *Penelitian menunjukkan bahwa pengendalian tekanan darah yang adekuat dapat menurunkan risiko gagal jantung secara signifikan.
        </p>
      </div>

      <div className="card">
        <h3>Jenis Diuretik:</h3>
        <ul>
          <li>Thiazide</li>
          <li>Loop (Diuretik Kuat)</li>
          <li>Kalium-sparing</li>
        </ul>
      </div>
    </div>

    <div style={{ marginBottom: '30px', padding: '0 10px' }}>
      <h3 style={{ color: 'var(--primary)' }}>Diuretik Thiazide:</h3>
      <p>
        Diuretik thiazide bekerja pada tubulus distal ginjal dengan menghambat reabsorpsi natrium-klorida.
        Efek ini menyebabkan peningkatan ekskresi natrium dan air, sehingga volume plasma menurun dan tekanan darah berkurang.
        Selain efek diuretik, thiazide juga memiliki efek vasodilatasi jangka panjang melalui penurunan resistensi perifer.
      </p>
    </div>

    <div className="alert">
      <h4>Contoh Obat:</h4>

      <div className="medicine-images">
        <figure>
          <img src={chlorthalidoneImg} alt="Chlorthalidone 25 mg" />
          <figcaption>Chlorthalidone</figcaption>
        </figure>
        <figure>
          <img src={hydrochlorothiazideImg} alt="Hydrochlorothiazide" />
          <figcaption>Hydrochlorothiazide</figcaption>
        </figure>
        <figure>
          <img src={indapamideImg} alt="Indapamide 2.5mg" />
          <figcaption>Indapamide</figcaption>
        </figure>
      </div>
    </div>

    <div style={{ marginTop: '25px', paddingTop: '20px', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
      <h4 style={{ color: 'var(--text-color)', marginBottom: '10px' }}>Penjelasan Tambahan:</h4>
      <p style={{ margin: 0 }}>
        Chlorthalidone sering dianggap lebih efektif dibanding hydrochlorothiazide karena durasi kerjanya lebih panjang.
        Thiazide sangat direkomendasikan pada pasien usia lanjut dan pasien dengan hipertensi tanpa komplikasi berat.
      </p>
    </div>

    {/* Section: Loop Diuretik */}
    <div style={{ marginTop: '40px', marginBottom: '30px', padding: '0 10px' }}>
      <h3 style={{ color: 'var(--primary)' }}>Loop Diuretik:</h3>
      <p>
        Loop diuretik bekerja pada ansa Henle bagian asenden dengan menghambat transporter Na⁺/K⁺/2Cl⁻. Obat ini memiliki efek diuretik yang lebih kuat dibanding thiazide dan sering digunakan pada pasien hipertensi yang disertai gagal jantung atau edema berat.
      </p>
      <p>
        Pada pasien gagal jantung, loop diuretik membantu mengurangi kongesti paru dan edema perifer dengan cepat. Namun, penggunaannya pada hipertensi tanpa komplikasi biasanya tidak menjadi pilihan utama kecuali terdapat retensi cairan signifikan.
      </p>

      <div className="alert" style={{ marginTop: '15px' }}>
        <h4>Contoh Obat:</h4>
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          <li>Furosemid</li>
          <li>Bumetanid</li>
        </ul>
      </div>
    </div>

    {/* Section: Potassium-Sparing Diuretik */}
    <div style={{ marginTop: '40px', marginBottom: '30px', padding: '0 10px' }}>
      <h3 style={{ color: 'var(--primary)' }}>Potassium-Sparing Diuretik:</h3>
      <p>
        Golongan ini bekerja dengan menghambat efek aldosteron pada tubulus distal sehingga meningkatkan ekskresi natrium tanpa menyebabkan kehilangan kalium yang signifikan. Spironolakton banyak digunakan pada hipertensi resisten dan gagal jantung dengan fraksi ejeksi rendah.
      </p>
      <p>
        Penghambatan aldosteron juga berperan dalam mencegah remodeling jantung dan fibrosis miokard, sehingga berkontribusi dalam pencegahan progresivitas gagal jantung.
      </p>

      <div className="alert" style={{ marginTop: '15px' }}>
        <h4>Contoh Obat:</h4>
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          <li>Spironolakton</li>
          <li>Eplerenon</li>
        </ul>
      </div>
    </div>

  </div>
);

export default Diuretik;