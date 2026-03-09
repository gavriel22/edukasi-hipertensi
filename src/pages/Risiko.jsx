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

            {/* 1. Gagal Jantung */}
            <section className="section-full section-white">
                <div className="split-layout">
                    <div className="split-media image-blob-bg">
                        <img src={heartImg} alt="Ilustrasi Gagal Jantung" />
                    </div>
                    <div className="split-content">
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 16px', background: '#fef2f2', color: '#ef4444', borderRadius: '30px', fontSize: '0.9rem', fontWeight: '600', marginBottom: '20px' }}>
                            <span style={{ fontSize: '1.2rem' }}>🫀</span> Komplikasi Kardiovaskular
                        </div>
                        <h2 style={{ fontSize: '2.5rem', color: 'var(--text-color)', marginBottom: '20px', fontWeight: '800', lineHeight: '1.2' }}>Gagal Jantung & Serangan Jantung</h2>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '15px', fontSize: '1.1rem' }}>
                            Jika tidak dikendalikan, hipertensi dapat menyebabkan berbagai komplikasi pada sistem kardiovaskular, terutama pada jantung.
                        </p>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '15px', fontSize: '1.1rem' }}>
                            Tekanan darah yang tinggi membuat jantung harus bekerja lebih keras untuk memompa darah ke seluruh tubuh. Dalam jangka panjang, kondisi ini dapat <strong style={{ color: 'var(--primary)' }}>menyebabkan penebalan otot jantung</strong> dan perubahan struktur jantung yang dapat meningkatkan risiko terjadinya gagal jantung.
                        </p>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '30px', fontSize: '1.1rem' }}>
                            Oleh karena itu, penting untuk melakukan skrining tekanan darah secara rutin, menjaga pola makan sehat, dan mengurangi konsumsi garam.
                        </p>
                        <a href="https://doi.org/10.3390/ijms25126661" target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '12px 24px', fontSize: '1rem', background: '#ef4444' }}>
                            Baca Referensi Lebih Lanjut
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. Stroke */}
            <section className="section-full section-light">
                <div className="split-layout" style={{ flexWrap: 'wrap-reverse' }}>
                    <div className="split-content">
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 16px', background: '#f5f3ff', color: '#8b5cf6', borderRadius: '30px', fontSize: '0.9rem', fontWeight: '600', marginBottom: '20px' }}>
                            <span style={{ fontSize: '1.2rem' }}>🧠</span> Komplikasi Serebrovaskular
                        </div>
                        <h2 style={{ fontSize: '2.5rem', color: 'var(--text-color)', marginBottom: '20px', fontWeight: '800', lineHeight: '1.2' }}>Stroke Iskemik & Hemoragik</h2>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px', fontSize: '1.1rem' }}>
                            Hipertensi atau tekanan darah tinggi dapat merusak pembuluh darah di otak. Tekanan darah yang terus meningkat menyebabkan dinding pembuluh darah menebal dan menyempit sehingga aliran darah ke otak menjadi terganggu.
                        </p>
                        <div style={{ background: '#fff', padding: '20px', borderRadius: '16px', borderLeft: '4px solid #8b5cf6', marginBottom: '30px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                            <p style={{ color: 'var(--text-color)', lineHeight: '1.6', margin: 0, fontWeight: '500' }}>
                                Kondisi ini dapat menyebabkan terbentuknya sumbatan yang memicu <strong>stroke iskemik</strong> atau bahkan pecahnya pembuluh darah yang menyebabkan <strong>stroke hemoragik</strong>.
                            </p>
                        </div>

                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
                            <a href="https://doi.org/10.30574/wjarr.2024.21.1.0204" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#8b5cf6', padding: '12px 24px', fontSize: '1rem' }}>
                                Referensi Lanjut
                            </a>
                            <a href="#video-stroke" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '999px', border: '2px solid #8b5cf6', color: '#8b5cf6', textDecoration: 'none', fontWeight: '600', transition: 'all 0.3s' }} onClick={(e) => { e.preventDefault(); document.getElementById('video-stroke').scrollIntoView({ behavior: 'smooth' }); }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                                Tonton Video
                            </a>
                        </div>
                    </div>
                    <div className="split-media image-blob-bg">
                        <img src={strokeImg} alt="Ilustrasi Stroke" style={{ border: '4px solid white' }} />
                    </div>
                </div>

                {/* Embedded YouTube Video outside the split to look cleaner */}
                <div id="video-stroke" style={{ maxWidth: '800px', margin: '60px auto 0', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(139, 92, 246, 0.2)', border: '8px solid white' }}>
                    <iframe
                        width="100%"
                        height="450"
                        src="https://www.youtube.com/embed/0Qjob61OP68"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        style={{ display: 'block' }}
                    ></iframe>
                </div>
            </section>

            {/* 3. Gagal Ginjal Kronis */}
            <section className="section-full section-white">
                <div className="split-layout">
                    <div className="split-media image-blob-bg">
                        <img src={kidneyImg} alt="Ilustrasi Gagal Ginjal" style={{ border: '4px solid white' }} />
                    </div>
                    <div className="split-content">
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 16px', background: '#fefce8', color: '#ca8a04', borderRadius: '30px', fontSize: '0.9rem', fontWeight: '600', marginBottom: '20px' }}>
                            <span style={{ fontSize: '1.2rem' }}>🩺</span> Komplikasi Ginjal
                        </div>
                        <h2 style={{ fontSize: '2.5rem', color: 'var(--text-color)', marginBottom: '20px', fontWeight: '800', lineHeight: '1.2' }}>Gagal Ginjal Kronis</h2>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px', fontSize: '1.1rem' }}>
                            Hipertensi merupakan salah satu faktor risiko utama terjadinya penyakit ginjal kronik. Tekanan darah tinggi dapat menyebabkan kerusakan pada pembuluh darah kecil di ginjal.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                            <div style={{ padding: '20px', background: '#fafafa', borderRadius: '16px', border: '1px solid #eee' }}>
                                <h4 style={{ margin: '0 0 10px 0', color: 'var(--text-color)', fontSize: '1.1rem' }}>Dampak Primer</h4>
                                <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-muted)' }}>Mengganggu kemampuan ginjal dalam menyaring limbah dan cairan dari darah.</p>
                            </div>
                            <div style={{ padding: '20px', background: '#fafafa', borderRadius: '16px', border: '1px solid #eee' }}>
                                <h4 style={{ margin: '0 0 10px 0', color: 'var(--text-color)', fontSize: '1.1rem' }}>Risiko Lanjut</h4>
                                <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-muted)' }}>Cairan berlebih di pembuluh darah, meningkatkan tekanan darah lebih lanjut.</p>
                            </div>
                        </div>
                        <a href="https://doi.org/10.3390/ijms25137452" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#ca8a04', padding: '12px 24px', fontSize: '1rem' }}>
                            Baca Referensi Lebih Lanjut
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Risiko;
