import React, { useState, useEffect } from 'react';
import daunSirsakImg from '../assets/images/Daunsirsak.jpeg';
import bawangImg from '../assets/images/Bawang.jpg';
import seledriImg from '../assets/images/Seledri.jpg';
import mengkuduImg from '../assets/images/Mengkudu.jpg';

const herbalData = [
  {
    id: 'sirsak',
    name: 'Daun Sirsak',
    img: daunSirsakImg,
    scientific: 'Annona muricata',
    desc: 'Telah lama digunakan sebagai pengobatan herbal tradisional. Beberapa manfaat utamanya terkait hipertensi meliputi:',
    benefits: [
      { title: 'Kaya Antioksidan', text: 'Melindungi sel-sel pembuluh darah dari kerusakan akibat radikal bebas.' },
      { title: 'Sifat Vasodilator', text: 'Membantu melebarkan pembuluh darah sehingga aliran darah menjadi lebih lancar dan tekanan darah menurun.' },
      { title: 'Efek Menenangkan', text: 'Membantu mengurangi stres yang dapat menjadi pemicu naiknya tekanan darah.' }
    ],
    note: 'Cara konsumsi umumnya dengan merebus beberapa lembar daun sirsak segar dan meminum air rebusannya.'
  },
  {
    id: 'bawang',
    name: 'Bawang Putih',
    img: bawangImg,
    scientific: 'Allium sativum',
    desc: 'Dikenal luas sebagai bumbu dapur, bawang putih juga memiliki efektivitas untuk membantu menurunkan tekanan darah:',
    benefits: [
      { title: 'Senyawa Allicin', text: 'Allicin dalam bawang putih dapat membantu merelaksasi pembuluh darah.' },
      { title: 'Penurunan Tekanan Sistolik', text: 'Bawang putih terbukti efektif menurunkan tekanan darah sistolik dan diastolik secara signifikan dengan penggunaan rutin.' },
      { title: 'Menurunkan Kolesterol', text: 'Membantu mengurangi penumpukan plak di arteri yang bisa memicu hipertensi.' }
    ],
    note: 'Dapat dikonsumsi secara mentah (dicincang) atau menggunakan suplemen bubuk/ekstrak bawang putih sesuai dosis anjuran.'
  },
  {
    id: 'seledri',
    name: 'Seledri',
    img: seledriImg,
    scientific: 'Apium graveolens',
    desc: 'Bukan sekadar pelengkap sayur sop, seledri memiliki senyawa penting yang baik untuk kardiovaskular:',
    benefits: [
      { title: 'Kandungan Phthalides', text: 'Senyawa ini dapat melemaskan jaringan otot di dinding arteri sehingga menurunkan tekanan darah.' },
      { title: 'Efek Diuretik Alami', text: 'Membantu tubuh mengeluarkan kelebihan cairan dan natrium seperti cara kerja obat diuretik.' },
      { title: 'Anti-inflamasi', text: 'Mengurangi peradangan pada pembuluh darah.' }
    ],
    note: 'Cara paling efektif adalah dengan membuat jus seledri (bisa dicampur apel atau wortel) yang diminum secara rutin.'
  },
  {
    id: 'mengkudu',
    name: 'Mengkudu',
    img: mengkuduImg,
    scientific: 'Morinda citrifolia',
    desc: 'Meski rasanya pahit, buah mengkudu sangat populer di Indonesia sebagai obat herbal mujarab untuk tekanan darah darah tinggi:',
    benefits: [
      { title: 'Pelebaran Pembuluh Darah', text: 'Kandungan scopoletin membantu melebarkan saluran pembuluh darah yang menyempit.' },
      { title: 'Efek Penenang', text: 'Membantu menghambat aktivitas reseptor serotonin yang memicu stres.' },
      { title: 'Antioksidan Xeronine', text: 'Membantu sel-sel tubuh menjadi lebih sehat dan fungsi aliran darah menjadi lancar.' }
    ],
    note: 'Biasanya diolah menjadi jus atau jamu. Rasanya yang tajam bisa dicampur madu untuk menetralisir.'
  }
];

const Herbal = () => {
  const [activeModalId, setActiveModalId] = useState(null);

  useEffect(() => {
    if (activeModalId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeModalId]);

  const activeHerbal = herbalData.find(item => item.id === activeModalId);

  return (
    <div className="container">
      <h1>Herbal sebagai Pendamping Terapi</h1>
      <p>Selain terapi medis, beberapa tanaman herbal juga digunakan sebagai pendamping dalam membantu mengontrol tekanan darah. Klik gambar di bawah ini untuk melihat detailnya.</p>

      <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', margin: '40px 0' }}>
        {herbalData.map((item) => (
          <div
            key={item.id}
            className="card herbal-card"
            onClick={() => setActiveModalId(item.id)}
            style={{ cursor: 'pointer', textAlign: 'center', padding: '16px' }}
          >
            <img
              src={item.img}
              alt={item.name}
              style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', borderRadius: '12px', marginBottom: '16px' }}
            />
            <h3>{item.name}</h3>
            <p style={{ color: 'var(--primary)', fontWeight: '500', margin: '0' }}>Klik untuk detail</p>
          </div>
        ))}
      </div>

      <p style={{ textAlign: 'center' }}>Tanaman-tanaman tersebut mengandung senyawa aktif seperti antioksidan yang dapat membantu mendukung kesehatan sistem kardiovaskular.</p>
      <div className="alert">
        <strong>Penting:</strong> Herbal digunakan sebagai pendamping, bukan pengganti obat medis. Selalu konsultasikan dengan dokter sebelum mengonsumsi herbal secara rutin.
      </div>

      {activeHerbal && (
        <div className="modal-overlay" onClick={() => setActiveModalId(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveModalId(null)}>&times;</button>
            <img
              src={activeHerbal.img}
              alt={activeHerbal.name}
              style={{ width: '100%', maxHeight: '250px', objectFit: 'cover', borderRadius: '12px', marginBottom: '20px' }}
            />
            <h2 style={{ marginTop: 0, color: 'var(--primary)', marginBottom: '4px' }}>Khasiat {activeHerbal.name}</h2>
            <p style={{ fontStyle: 'italic', fontSize: '0.9rem', margin: '0 0 16px 0', opacity: 0.8 }}>{activeHerbal.scientific}</p>
            <p>{activeHerbal.desc}</p>
            <ul style={{ textAlign: 'left', margin: '16px 0' }}>
              {activeHerbal.benefits.map((benefit, idx) => (
                <li key={idx} style={{ marginBottom: '8px' }}>
                  <strong>{benefit.title}:</strong> {benefit.text}
                </li>
              ))}
            </ul>
            <p style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '20px' }}>* {activeHerbal.note}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Herbal;