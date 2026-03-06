import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import backgroundIMG from '../assets/images/Background.jpg';

const smartCheckQuestions = [
  { id: 1, question: "Seberapa sering Anda mengalami sakit kepala (terutama di bagian belakang kepala)?", options: [{ label: "A. Tidak pernah", value: 1 }, { label: "B. Jarang (1–2 kali dalam sebulan)", value: 2 }, { label: "C. Sering (1–2 kali dalam seminggu)", value: 3 }, { label: "D. Sangat sering (hampir setiap hari)", value: 4 }] },
  { id: 2, question: "Seberapa sering Anda merasa pusing atau kepala terasa berat?", options: [{ label: "A. Tidak pernah", value: 1 }, { label: "B. Jarang", value: 2 }, { label: "C. Sering", value: 3 }, { label: "D. Sangat sering", value: 4 }] },
  { id: 3, question: "Apakah Anda pernah mengalami penglihatan kabur atau berkunang-kunang?", options: [{ label: "A. Tidak pernah", value: 1 }, { label: "B. Jarang", value: 2 }, { label: "C. Sering", value: 3 }, { label: "D. Sangat sering", value: 4 }] },
  { id: 4, question: "Seberapa sering Anda merasakan jantung berdebar lebih cepat dari biasanya?", options: [{ label: "A. Tidak pernah", value: 1 }, { label: "B. Jarang", value: 2 }, { label: "C. Sering", value: 3 }, { label: "D. Sangat sering", value: 4 }] },
  { id: 5, question: "Apakah Anda pernah mengalami mimisan tanpa sebab yang jelas?", options: [{ label: "A. Tidak pernah", value: 1 }, { label: "B. Jarang", value: 2 }, { label: "C. Sering", value: 3 }, { label: "D. Sangat sering", value: 4 }] },
  { id: 6, question: "Seberapa sering Anda merasa mudah lelah atau lemah tanpa sebab yang jelas?", options: [{ label: "A. Tidak pernah", value: 1 }, { label: "B. Jarang", value: 2 }, { label: "C. Sering", value: 3 }, { label: "D. Sangat sering", value: 4 }] },
  { id: 7, question: "Apakah Anda pernah merasakan sesak napas saat melakukan aktivitas ringan?", options: [{ label: "A. Tidak pernah", value: 1 }, { label: "B. Jarang", value: 2 }, { label: "C. Sering", value: 3 }, { label: "D. Sangat sering", value: 4 }] }
];

const Home = () => {
  const [answers, setAnswers] = useState({});
  const [scoreResult, setScoreResult] = useState(null);
  const resultRef = useRef(null);

  const handleSelectOption = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const calculateScore = () => {
    if (Object.keys(answers).length < smartCheckQuestions.length) {
      alert("Harap jawab semua pertanyaan terlebih dahulu.");
      return;
    }

    let totalScore = 0;
    Object.values(answers).forEach(val => totalScore += val);

    let category = "";
    let color = "";

    if (totalScore <= 6) {
      category = "Normal";
      color = "#10b981"; // Emerald
    } else if (totalScore >= 7 && totalScore <= 9) {
      category = "Prahipertensi";
      color = "#f59e0b"; // Amber
    } else if (totalScore >= 10 && totalScore <= 12) {
      category = "Hipertensi Stage 1";
      color = "#f97316"; // Orange
    } else { // >= 13
      category = "Hipertensi Stage 2";
      color = "#ef4444"; // Red
    }

    setScoreResult({ score: totalScore, category, color });

    setTimeout(() => {
      if (resultRef.current) {
        resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const resetQuiz = () => {
    setAnswers({});
    setScoreResult(null);
  };

  return (
    <div>
      <header className="hero" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(${backgroundIMG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#ffffff'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="animate-fade-in-up" style={{ display: 'inline-block', background: 'var(--primary-glow)', border: '1px solid var(--secondary)', padding: '6px 16px', borderRadius: '30px', color: '#ffffff', fontSize: '0.9rem', fontWeight: '600', letterSpacing: '0.02em', marginBottom: '1rem', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>Edukasi Obat Medis & Tradisional untuk Hipertensi</span>
          <h1 className="animate-fade-in-up delay-100" style={{ marginTop: '15px', color: '#ffffff' }}>Minum Obat Hipertensi Sudah Tepat?</h1>
          <p className="animate-fade-in-up delay-200" style={{ color: '#ffffff' }}>Pahami penggunaan diuretik dan herbal dalam membantu mengontrol tekanan darah secara aman dan efektif.</p>
          <Link to="/diuretik" className="animate-fade-in-up delay-300" style={{ display: 'inline-block' }}><button className="btn">Pelajari Sekarang</button></Link>
        </div>
      </header>

      <section className="container" style={{ margin: '60px auto', textAlign: 'center', maxWidth: '800px' }}>
        <h2 className="animate-fade-in-up" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Apa itu TensiWise?</h2>
        <p className="animate-fade-in-up delay-100" style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
          <strong>TensiWise</strong> merupakan sebuah platform edukasi telenursing yang dirancang khusus untuk membantu Anda memahami, mengelola, dan mencegah hipertensi secara bijaksana. Melalui panduan medis dan pendekatan terapi herbal yang terpercaya, kami mendampingi langkah Anda menuju tekanan darah yang lebih terkontrol dan hidup yang lebih sehat.
        </p>
      </section>

      <section className="container" style={{ marginBottom: '60px' }}>
        <h2 className="animate-fade-in-up" style={{ textAlign: 'left', marginBottom: '10px' }}>Kenapa Ini Penting?</h2>
        <p className="animate-fade-in-up delay-100" style={{ textAlign: 'left', marginBottom: '40px', color: 'var(--text-muted)' }}>Hipertensi sering kali tidak menimbulkan gejala, namun dapat menyebabkan komplikasi serius jika tidak terkontrol dengan baik.</p>

        <div className="card-grid">
          <div className="card animate-fade-in-up delay-100">
            <h3>Apa itu Hipertensi?</h3>
            <p style={{ color: 'var(--text-muted)' }}>Hipertensi sering kali tidak menimbulkan gejala mencolok, namun diam-diam memicu kerusakan organ vital tanpa peringatan.</p>
          </div>

          <div className="card animate-fade-in-up delay-200" style={{ backgroundColor: 'var(--primary)', color: '#ffffff', border: 'none' }}>
            <h3 style={{ color: '#ffffff' }}>Gejala Hipertensi</h3>
            <ul style={{ margin: 0, paddingLeft: '20px', color: 'rgba(255, 255, 255, 0.9)' }}>
              <li>Sakit kepala</li>
              <li>Pusing/kepala terasa berat</li>
              <li>Gangguan penglihatan</li>
              <li>Jantung berdebar</li>
              <li>Mimisan</li>
              <li>Mudah lelah/lemah</li>
              <li>Sesak napas</li>
            </ul>
          </div>

          <div className="card animate-fade-in-up delay-300">
            <h3>Penyebab Utama</h3>
            <ul style={{ color: 'var(--text-muted)', margin: 0, paddingLeft: '20px' }}>
              <li>Konsumsi garam (natrium) berlebih</li>
              <li>Obesitas</li>
              <li>Kurang aktivitas fisik</li>
              <li>Stres dan merokok</li>
              <li>Penyakit ginjal kronis</li>
              <li>Gangguan Hormonal</li>
            </ul>
          </div>

          <div className="card animate-fade-in-up delay-400" style={{ backgroundColor: 'var(--primary)', color: '#ffffff', border: 'none' }}>
            <h3 style={{ color: '#ffffff' }}>Pentingnya Terapi</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Dengan pengobatan seperti Diuretik dan gaya hidup sehat, tekanan darah yang mematikan dapat dikendalikan sepenuhnya.</p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <div style={{ textAlign: 'center', margin: '80px 0 30px' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Video Edukasi</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>Pelajari lebih lanjut melalui tayangan interaktif mengenai manajemen hipertensi berikut ini.</p>
      </div>

      <div className="container" style={{ display: 'flex', justifyContent: 'center', marginBottom: '100px' }}>
        <div style={{
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-lg)',
          background: '#000',
          padding: '0',
          border: '8px solid var(--surface-solid)',
          maxWidth: '900px',
          width: '100%'
        }}>
          <iframe
            width="100%"
            style={{ height: '550px', display: 'block', borderRadius: '16px', border: 'none' }}
            src="https://www.youtube.com/embed/Trus8InNnyc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Smart Check Section */}
      <div className="container" style={{ marginBottom: '100px', padding: '0 20px' }}>
        <div style={{
          background: 'linear-gradient(145deg, #ffffff, #f8fafc)',
          borderRadius: '24px',
          padding: '40px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
          border: '1px solid #e2e8f0',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(31, 122, 92, 0.1)', color: 'var(--primary)', marginBottom: '15px' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--text-color)', margin: '0 0 10px 0' }}>Smart Check</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', margin: 0 }}>Cek cepat risiko hipertensi berdasarkan gejala yang Anda alami secara rutin.</p>
          </div>

          {!scoreResult ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              {smartCheckQuestions.map((q, index) => (
                <div key={q.id} style={{ background: '#fff', padding: '25px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', color: 'var(--text-color)', display: 'flex', gap: '15px' }}>
                    <span style={{ minWidth: '32px', height: '32px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', fontWeight: 'bold' }}>{index + 1}</span>
                    <span style={{ paddingTop: '4px', lineHeight: '1.5' }}>{q.question}</span>
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', paddingLeft: '47px' }}>
                    {q.options.map(opt => (
                      <label key={opt.value} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '16px',
                        borderRadius: '12px',
                        border: answers[q.id] === opt.value ? '2px solid var(--primary)' : '2px solid #e2e8f0',
                        background: answers[q.id] === opt.value ? 'rgba(31, 122, 92, 0.05)' : '#f8fafc',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}>
                        <input
                          type="radio"
                          name={`question-${q.id}`}
                          value={opt.value}
                          checked={answers[q.id] === opt.value}
                          onChange={() => handleSelectOption(q.id, opt.value)}
                          style={{ width: '18px', height: '18px', accentColor: 'var(--primary)', cursor: 'pointer' }}
                        />
                        <span style={{ fontSize: '1rem', color: answers[q.id] === opt.value ? 'var(--primary)' : 'var(--text-color)', fontWeight: answers[q.id] === opt.value ? '600' : '400' }}>
                          {opt.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button onClick={calculateScore} className="btn" style={{ padding: '16px 40px', fontSize: '1.2rem', borderRadius: '30px', boxShadow: '0 8px 25px rgba(31,122,92,0.3)', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                  Lihat Hasil Skrining
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                </button>
              </div>
            </div>
          ) : (
            <div ref={resultRef} style={{ textAlign: 'center', background: '#fff', padding: '40px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-color)', marginBottom: '15px' }}>Hasil Skrining Anda</h3>
              <div style={{
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                background: `rgba(${scoreResult.color === '#10b981' ? '16, 185, 129' : scoreResult.color === '#f59e0b' ? '245, 158, 11' : scoreResult.color === '#f97316' ? '249, 115, 22' : '239, 68, 68'}, 0.1)`,
                border: `4px solid ${scoreResult.color}`,
                margin: '0 auto 25px',
                boxShadow: `0 10px 30px rgba(${scoreResult.color === '#10b981' ? '16, 185, 129' : scoreResult.color === '#f59e0b' ? '245, 158, 11' : scoreResult.color === '#f97316' ? '249, 115, 22' : '239, 68, 68'}, 0.2)`
              }}>
                <span style={{ fontSize: '3rem', fontWeight: 'bold', color: scoreResult.color, lineHeight: '1' }}>{scoreResult.score}</span>
                <span style={{ fontSize: '1rem', color: 'var(--text-muted)', marginTop: '5px' }}>Poin</span>
              </div>

              <h4 style={{ fontSize: '2rem', color: scoreResult.color, margin: '0 0 10px 0' }}>{scoreResult.category}</h4>

              <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px', borderLeft: '4px solid var(--primary)', margin: '30px auto', maxWidth: '600px', textAlign: 'left' }}>
                <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  <strong style={{ color: 'var(--text-color)' }}>Catatan Penting:</strong> Hasil skrining ini hanya bersifat edukatif dan tidak menggantikan diagnosis medis. Untuk memastikan kondisi tekanan darah, diperlukan pemeriksaan tekanan darah secara langsung oleh tenaga kesehatan.
                </p>
              </div>

              <button onClick={resetQuiz} className="btn-outline" style={{ padding: '12px 30px', borderRadius: '30px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>
                Ulangi Skrining
              </button>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default Home;