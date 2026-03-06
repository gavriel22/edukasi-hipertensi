import React from 'react';
import heartImg from '../assets/images/heart_failure_illustration_1772800864147.png';
import strokeImg from '../assets/images/stroke_illustration_1772800885269.png';
import kidneyImg from '../assets/images/kidney_failure_illustration_1772800902858.png';

const Risiko = () => {
    return (
        <div className="animate-fade-in-up">
            {/* Hero Section */}
            <div className="hero-page">
                <div className="container" style={{ padding: '0' }}>
                    <h1 className="hero-page-title">Risiko & Komplikasi Hipertensi</h1>
                    <p className="hero-page-desc" style={{ maxWidth: '700px' }}>
                        Hipertensi yang tidak terkontrol dapat merusak organ-organ vital di tubuh kita.
                        Mari kenali bahaya dan komplikasi utamanya agar kita lebih waspada.
                    </p>
                </div>
            </div>

            <div className="container" style={{ marginTop: '0', paddingTop: '0' }}>

                {/* 1. Gagal Jantung */}
                <div className="card" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '30px',
                    background: '#fff',
                    borderRadius: '24px',
                    padding: '40px',
                    boxShadow: '0 10px 40px -10px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.02)',
                    marginBottom: '40px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
                }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 40px -10px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.02)'; }}
                >
                    {/* Decorative element */}
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '8px', height: '100%', background: 'linear-gradient(to bottom, #ef4444, #f87171)' }}></div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
                        <div className="flex-item-300" style={{ display: 'flex', justifyContent: 'center' }}>
                            <div style={{ position: 'relative', padding: '10px', background: '#fef2f2', borderRadius: '24px', width: '100%' }}>
                                <img src={heartImg} alt="Ilustrasi Gagal Jantung" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 8px 25px rgba(239, 68, 68, 0.15)', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
                            </div>
                        </div>
                        <div className="flex-item-400" style={{ paddingRight: '20px' }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '6px 16px', background: '#fef2f2', color: '#ef4444', borderRadius: '30px', fontSize: '0.9rem', fontWeight: '600', marginBottom: '15px' }}>
                                <span style={{ fontSize: '1.2rem' }}>🫀</span> Komplikasi Kardiovaskular
                            </div>
                            <h2 style={{ fontSize: '2.2rem', color: 'var(--text-color)', marginBottom: '20px', fontWeight: '700', lineHeight: '1.2' }}>Gagal Jantung & Serangan Jantung</h2>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '15px', fontSize: '1.05rem' }}>
                                Jika tidak dikendalikan, hipertensi dapat menyebabkan berbagai komplikasi pada sistem kardiovaskular, terutama pada jantung.
                            </p>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '15px', fontSize: '1.05rem' }}>
                                Tekanan darah yang tinggi membuat jantung harus bekerja lebih keras untuk memompa darah ke seluruh tubuh. Dalam jangka panjang, kondisi ini dapat <strong style={{ color: 'var(--text-color)' }}>menyebabkan penebalan otot jantung</strong> dan perubahan struktur jantung yang dapat meningkatkan risiko terjadinya gagal jantung.
                            </p>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '30px', fontSize: '1.05rem' }}>
                                Oleh karena itu, penting untuk melakukan skrining tekanan darah secara rutin, menjaga pola makan sehat, mengurangi konsumsi garam, rutin berolahraga, serta menghindari kebiasaan merokok.
                            </p>
                            <a href="https://doi.org/10.3390/ijms25126661" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', fontSize: '0.95rem', borderRadius: '12px', borderColor: '#ef4444', color: '#ef4444' }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                                Baca Referensi Lebih Lanjut
                            </a>
                        </div>
                    </div>
                </div>

                {/* 2. Stroke */}
                <div className="card" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '30px',
                    background: '#fff',
                    borderRadius: '24px',
                    padding: '40px',
                    boxShadow: '0 10px 40px -10px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.02)',
                    marginBottom: '40px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
                }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 40px -10px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.02)'; }}
                >
                    {/* Decorative element */}
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '8px', height: '100%', background: 'linear-gradient(to bottom, #8b5cf6, #a78bfa)' }}></div>

                    <div style={{ display: 'flex', flexWrap: 'wrap-reverse', gap: '40px', alignItems: 'center' }}>
                        <div className="flex-item-400" style={{ paddingLeft: '20px' }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '6px 16px', background: '#f5f3ff', color: '#8b5cf6', borderRadius: '30px', fontSize: '0.9rem', fontWeight: '600', marginBottom: '15px' }}>
                                <span style={{ fontSize: '1.2rem' }}>🧠</span> Komplikasi Serebrovaskular
                            </div>
                            <h2 style={{ fontSize: '2.2rem', color: 'var(--text-color)', marginBottom: '20px', fontWeight: '700', lineHeight: '1.2' }}>Stroke</h2>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '15px', fontSize: '1.05rem' }}>
                                Hipertensi atau tekanan darah tinggi dapat merusak pembuluh darah di otak. Tekanan darah yang terus meningkat menyebabkan dinding pembuluh darah menebal dan menyempit sehingga aliran darah ke otak menjadi terganggu.
                            </p>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '30px', fontSize: '1.05rem' }}>
                                Kondisi ini dapat menyebabkan terbentuknya sumbatan yang memicu <strong style={{ color: 'var(--text-color)' }}>stroke iskemik</strong> atau bahkan pecahnya pembuluh darah yang menyebabkan <strong style={{ color: 'var(--text-color)' }}>stroke hemoragik</strong>.
                            </p>
                            <a href="https://doi.org/10.30574/wjarr.2024.21.1.0204" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', fontSize: '0.95rem', borderRadius: '12px', borderColor: '#8b5cf6', color: '#8b5cf6', marginBottom: '30px' }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                                Baca Referensi Lebih Lanjut
                            </a>

                            {/* Embedded YouTube Video */}
                            <div style={{
                                width: '100%',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                boxShadow: '0 8px 25px rgba(139, 92, 246, 0.15)',
                                background: '#000',
                                border: '4px solid #f5f3ff',
                            }}>
                                <iframe
                                    width="100%"
                                    height="315"
                                    src="https://www.youtube.com/embed/0Qjob61OP68"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    style={{ display: 'block' }}
                                ></iframe>
                            </div>
                        </div>
                        <div className="flex-item-300" style={{ display: 'flex', justifyContent: 'center' }}>
                            <div style={{ position: 'relative', padding: '10px', background: '#f5f3ff', borderRadius: '24px', width: '100%' }}>
                                <img src={strokeImg} alt="Ilustrasi Stroke" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 8px 25px rgba(139, 92, 246, 0.15)', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Gagal Ginjal Kronis */}
                <div className="card" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '30px',
                    background: '#fff',
                    borderRadius: '24px',
                    padding: '40px',
                    boxShadow: '0 10px 40px -10px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.02)',
                    marginBottom: '60px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
                }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 40px -10px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.02)'; }}
                >
                    {/* Decorative element */}
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '8px', height: '100%', background: 'linear-gradient(to bottom, #eab308, #fef08a)' }}></div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
                        <div className="flex-item-300" style={{ display: 'flex', justifyContent: 'center' }}>
                            <div style={{ position: 'relative', padding: '10px', background: '#fefce8', borderRadius: '24px', width: '100%' }}>
                                <img src={kidneyImg} alt="Ilustrasi Gagal Ginjal" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 8px 25px rgba(234, 179, 8, 0.15)', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
                            </div>
                        </div>
                        <div className="flex-item-400" style={{ paddingRight: '20px' }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '6px 16px', background: '#fefce8', color: '#ca8a04', borderRadius: '30px', fontSize: '0.9rem', fontWeight: '600', marginBottom: '15px' }}>
                                <span style={{ fontSize: '1.2rem' }}>🩺</span> Komplikasi Ginjal
                            </div>
                            <h2 style={{ fontSize: '2.2rem', color: 'var(--text-color)', marginBottom: '20px', fontWeight: '700', lineHeight: '1.2' }}>Gagal Ginjal Kronis</h2>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '15px', fontSize: '1.05rem' }}>
                                Hipertensi merupakan salah satu faktor risiko utama terjadinya penyakit ginjal kronik. Tekanan darah tinggi dapat menyebabkan kerusakan pada pembuluh darah kecil di ginjal sehingga mengganggu kemampuan ginjal dalam menyaring limbah dan cairan dari darah.
                            </p>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '15px', fontSize: '1.05rem' }}>
                                Kerusakan yang berlangsung dalam waktu lama dapat menyebabkan <strong style={{ color: 'var(--text-color)' }}>penurunan fungsi ginjal secara bertahap</strong>.
                            </p>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '25px', fontSize: '1.05rem' }}>
                                Apabila kondisi ini tidak ditangani dengan baik, maka kerusakan ginjal dapat berkembang menjadi penyakit ginjal kronik bahkan gagal ginjal.
                            </p>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', fontSize: '0.9rem', background: '#f8fafc', color: 'var(--text-muted)', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                                Sumber rujukan: Golafshan & Shafieyoon, 2024
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Risiko;
