import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import backgroundIMG from '../assets/images/Background.jpg';
import tensiWiseImg from '../assets/images/TensiWise.png';
import hipertensiImg from '../assets/images/Hipertensi.jpg';

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
        backgroundImage: `linear-gradient(rgba(31, 122, 92, 0.6), rgba(17, 89, 65, 0.8)), url(${backgroundIMG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#ffffff',
        position: 'relative'
      }}>
        {/* Animated Background Elements */}
        <div className="bg-blob bg-blob-secondary animate-pulse-slow" style={{ width: '400px', height: '400px', top: '10%', left: '-10%' }}></div>
        <div className="bg-blob bg-blob-secondary animate-float" style={{ width: '300px', height: '300px', bottom: '20%', right: '-5%' }}></div>
        <div className="bg-blob bg-blob-accent animate-float-delayed" style={{ width: '250px', height: '250px', top: '30%', right: '20%' }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="animate-fade-in-up" style={{ display: 'inline-block', background: 'var(--primary-glow)', border: '1px solid var(--secondary)', padding: '6px 16px', borderRadius: '30px', color: '#ffffff', fontSize: '0.9rem', fontWeight: '600', letterSpacing: '0.02em', marginBottom: '1rem', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>
            Edukasi Obat Medis & Tradisional untuk Hipertensi
          </span>
          <h1 className="hero-page-title animate-fade-in-up delay-100" style={{ marginTop: '15px' }}>Minum Obat Hipertensi Sudah Tepat?</h1>
          <p className="animate-fade-in-up delay-200" style={{ color: '#ffffff' }}>Pahami penggunaan diuretik dan herbal dalam membantu mengontrol tekanan darah secara aman dan efektif.</p>
          <Link to="/diuretik" className="animate-fade-in-up delay-300" style={{ display: 'inline-block' }}>
            <button className="btn animate-pulse-slow">Pelajari Sekarang</button>
          </Link>
        </div>

        {/* SVG Wave Divider */}
        <div className="wave-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.93,197.36,97.71C244.3,82.01,283.43,65.34,321.39,56.44Z" fill="var(--bg-top)"></path>
          </svg>
        </div>
      </header>

      <section className="container" style={{ margin: '60px auto', textAlign: 'center', maxWidth: '800px', position: 'relative' }}>
        {/* Background decorative blob */}
        <div className="bg-blob bg-blob-primary animate-spin-slow" style={{ width: '500px', height: '500px', top: '-100px', left: '50%', transform: 'translateX(-50%)' }}></div>

        <img src={tensiWiseImg} alt="Logo TensiWise" className="animate-fade-in-up" style={{ width: '220px', height: 'auto', marginBottom: '20px', position: 'relative', zIndex: 1, filter: 'drop-shadow(0 10px 15px rgba(31, 122, 92, 0.2))' }} />

        <h2 className="animate-fade-in-up delay-100" style={{ fontSize: '2.5rem', marginBottom: '20px', position: 'relative', zIndex: 1 }}>Apa itu TensiWise?</h2>
        <p className="animate-fade-in-up delay-200" style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-muted)', position: 'relative', zIndex: 1 }}>
          <strong>TensiWise</strong> merupakan sebuah platform edukasi telenursing yang dirancang khusus untuk membantu Anda memahami, mengelola, dan mencegah hipertensi secara bijaksana. Melalui panduan medis dan pendekatan terapi herbal yang terpercaya, kami mendampingi langkah Anda menuju tekanan darah yang lebih terkontrol dan hidup yang lebih sehat.
        </p>
      </section>

      <section className="container" style={{ marginBottom: '60px', position: 'relative' }}>
        <div className="bg-blob bg-blob-accent animate-float" style={{ width: '400px', height: '400px', right: '-10%', top: '20%' }}></div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="animate-fade-in-up" style={{ textAlign: 'left', marginBottom: '10px' }}>Kenapa Ini Penting?</h2>
          <p className="animate-fade-in-up delay-100" style={{ textAlign: 'left', marginBottom: '30px', color: 'var(--text-muted)', maxWidth: '800px' }}>Hipertensi sering kali tidak menimbulkan gejala, namun dapat menyebabkan komplikasi serius jika tidak terkontrol dengan baik.</p>

          <div className="animate-fade-in-up delay-200" style={{ width: '100%', height: '350px', borderRadius: '24px', background: `url(${hipertensiImg}) center/60% no-repeat`, backgroundColor: '#f8fafc', marginBottom: '40px', boxShadow: 'inset 0 0 0 1px #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* The image is used as background here. */}
          </div>

          <div className="card-grid">
            <div className="card animate-fade-in-up delay-100" style={{ position: 'relative' }}>
              <span className="animate-float" style={{ position: 'absolute', top: '-15px', right: '-15px', fontSize: '3rem', opacity: 0.2 }}>❓</span>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.5rem' }}>🧐</span> Apa itu Hipertensi?
              </h3>
              <p style={{ color: 'var(--text-muted)' }}>Hipertensi sering kali tidak menimbulkan gejala mencolok, namun diam-diam memicu kerusakan organ vital tanpa peringatan.</p>
            </div>

            <div className="card animate-fade-in-up delay-200" style={{ backgroundColor: 'var(--primary)', color: '#ffffff', border: 'none', position: 'relative' }}>
              <span className="animate-float-delayed" style={{ position: 'absolute', top: '-15px', right: '-15px', fontSize: '3rem', opacity: 0.15 }}>🩺</span>
              <h3 style={{ color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.5rem' }}>⚠️</span> Gejala Hipertensi
              </h3>
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

            <div className="card animate-fade-in-up delay-300" style={{ position: 'relative' }}>
              <span className="animate-float" style={{ position: 'absolute', top: '-15px', right: '-15px', fontSize: '3rem', opacity: 0.15 }}>🍔</span>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.5rem' }}>🎯</span> Penyebab Utama
              </h3>
              <ul style={{ color: 'var(--text-muted)', margin: 0, paddingLeft: '20px' }}>
                <li>Konsumsi garam berlebih</li>
                <li>Obesitas & Kurang gerak</li>
                <li>Stres dan merokok</li>
                <li>Penyakit ginjal kronis</li>
                <li>Gangguan Hormonal</li>
              </ul>
            </div>

            <div className="card animate-fade-in-up delay-400" style={{ backgroundColor: 'var(--primary)', color: '#ffffff', border: 'none', position: 'relative' }}>
              <span className="animate-float-delayed" style={{ position: 'absolute', top: '-15px', right: '-15px', fontSize: '3rem', opacity: 0.15 }}>💊</span>
              <h3 style={{ color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.5rem' }}>🛡️</span> Pentingnya Terapi
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Dengan pengobatan seperti Diuretik dan gaya hidup sehat, tekanan darah yang mematikan dapat dikendalikan sepenuhnya.</p>
            </div>
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
        <div className="smart-check-container">
          {/* Decorative Background Elements */}
          <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(31,122,92,0.05) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%' }}></div>
          <div style={{ position: 'absolute', bottom: '-50px', left: '-50px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(31,122,92,0.03) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%' }}></div>

          <div style={{ textAlign: 'center', marginBottom: '50px', position: 'relative', zIndex: '1' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '72px', height: '72px', borderRadius: '24px', background: 'linear-gradient(135deg, rgba(31, 122, 92, 0.1), rgba(31, 122, 92, 0.2))', color: 'var(--primary)', marginBottom: '20px', boxShadow: '0 8px 16px rgba(31, 122, 92, 0.1)' }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <h2 className="smart-check-title">Smart Check</h2>
            <p className="smart-check-desc">Kenali potensi risiko hipertensi Anda sedini mungkin melalui evaluasi gejala secara cepat dan terarah.</p>
          </div>

          {!scoreResult ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '35px', position: 'relative', zIndex: '1' }}>
              {smartCheckQuestions.map((q, index) => (
                <div key={q.id} className="smart-check-card">
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '25px', color: 'var(--text-color)', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                    <span style={{
                      minWidth: '36px',
                      height: '36px',
                      borderRadius: '12px',
                      background: 'var(--primary)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      boxShadow: '0 4px 10px rgba(31, 122, 92, 0.3)'
                    }}>{index + 1}</span>
                    <span style={{ paddingTop: '6px', lineHeight: '1.6', fontWeight: '600' }}>{q.question}</span>
                  </h3>
                  <div className="quiz-options">
                    {q.options.map(opt => {
                      const isSelected = answers[q.id] === opt.value;
                      return (
                        <label key={opt.value} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '16px 20px',
                          borderRadius: '14px',
                          border: isSelected ? '2px solid var(--primary)' : '2px solid transparent',
                          background: isSelected ? 'rgba(31, 122, 92, 0.04)' : '#f8fafc',
                          boxShadow: isSelected ? '0 4px 12px rgba(31, 122, 92, 0.1)' : 'inset 0 0 0 1px #e2e8f0',
                          cursor: 'pointer',
                          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}>
                          <div style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            border: isSelected ? '6px solid var(--primary)' : '2px solid #cbd5e1',
                            background: '#fff',
                            flexShrink: 0,
                            transition: 'all 0.2s ease'
                          }} />
                          <input
                            type="radio"
                            name={`question-${q.id}`}
                            value={opt.value}
                            checked={isSelected}
                            onChange={() => handleSelectOption(q.id, opt.value)}
                            style={{ display: 'none' }}
                          />
                          <span style={{
                            fontSize: '1.05rem',
                            color: isSelected ? 'var(--primary)' : 'var(--text-color)',
                            fontWeight: isSelected ? '600' : '400',
                            lineHeight: '1.4'
                          }}>
                            {opt.label}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              ))}
              <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <button onClick={calculateScore} className="btn" style={{
                  padding: '18px 48px',
                  fontSize: '1.25rem',
                  borderRadius: '16px',
                  boxShadow: '0 10px 30px rgba(31,122,92,0.3)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontWeight: '600',
                  letterSpacing: '0.02em',
                  transition: 'all 0.3s ease'
                }}>
                  Lihat Hasil Skrining
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                </button>
              </div>
            </div>
          ) : (
            <div ref={resultRef} className="animate-fade-in-up smart-check-result">
              <div style={{ marginBottom: '30px' }}>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--text-color)', marginBottom: '10px', fontWeight: '700' }}>Hasil Analisis Anda</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Berdasarkan pola gejala yang Anda laporkan</p>
              </div>

              <div style={{
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: `radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(${scoreResult.color === '#10b981' ? '16, 185, 129' : scoreResult.color === '#f59e0b' ? '245, 158, 11' : scoreResult.color === '#f97316' ? '249, 115, 22' : '239, 68, 68'}, 0.1) 100%)`,
                border: `6px solid ${scoreResult.color}`,
                margin: '0 auto 30px',
                boxShadow: `0 15px 35px rgba(${scoreResult.color === '#10b981' ? '16, 185, 129' : scoreResult.color === '#f59e0b' ? '245, 158, 11' : scoreResult.color === '#f97316' ? '249, 115, 22' : '239, 68, 68'}, 0.25)`
              }}>
                <span style={{ fontSize: '4rem', fontWeight: '800', color: scoreResult.color, lineHeight: '1' }}>{scoreResult.score}</span>
                <span style={{ fontSize: '1.2rem', color: 'var(--text-color)', marginTop: '8px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}>Poin</span>
              </div>

              <div style={{
                background: `rgba(${scoreResult.color === '#10b981' ? '16, 185, 129' : scoreResult.color === '#f59e0b' ? '245, 158, 11' : scoreResult.color === '#f97316' ? '249, 115, 22' : '239, 68, 68'}, 0.08)`,
                padding: '12px 30px',
                borderRadius: '30px',
                display: 'inline-block',
                marginBottom: '20px'
              }}>
                <h4 style={{ fontSize: '1.8rem', color: scoreResult.color, margin: '0', fontWeight: '800' }}>{scoreResult.category}</h4>
              </div>

              <div style={{
                background: '#f8fafc',
                padding: '24px',
                borderRadius: '16px',
                borderLeft: '4px solid var(--primary)',
                margin: '30px auto 40px',
                maxWidth: '650px',
                textAlign: 'left',
                boxShadow: 'inset 0 0 0 1px #e2e8f0'
              }}>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--primary)', marginTop: '2px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                  </div>
                  <p style={{ margin: 0, fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    <strong style={{ color: 'var(--text-color)', display: 'block', marginBottom: '4px', fontSize: '1.1rem' }}>Saran Edukasi:</strong>
                    Hasil ini disusun berdasarkan algoritma edukasi dan <strong>bukan kesimpulan diagnostik mutlak</strong>. Segera jadwalkan pemeriksaan dengan tenaga kesehatan untuk evaluasi klinis yang tepat.
                  </p>
                </div>
              </div>

              <button onClick={resetQuiz} className="btn-outline" style={{
                padding: '14px 35px',
                borderRadius: '12px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '1.1rem',
                fontWeight: '600'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>
                Evaluasi Ulang
              </button>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default Home;