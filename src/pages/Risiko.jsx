import React from 'react';
import heartImg from '../assets/images/heart_failure_illustration_1772800864147.png';
import strokeImg from '../assets/images/stroke_illustration_1772800885269.png';
import kidneyImg from '../assets/images/kidney_failure_illustration_1772800902858.png';

const Risiko = () => {
    return (
        <div className="animate-fade-in-up">
            {/* Hero Section */}
            <div style={{
                background: 'linear-gradient(135deg, var(--danger, #dc2626) 0%, var(--primary) 100%)',
                padding: '80px 20px 60px',
                textAlign: 'center',
                color: 'white',
                marginBottom: '40px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}>
                <div className="container" style={{ padding: '0' }}>
                    <h1 style={{ color: 'white', margin: '0 0 20px 0', fontSize: '3rem', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>Risiko & Komplikasi Hipertensi</h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto', fontWeight: '300', lineHeight: '1.6' }}>
                        Hipertensi yang tidak terkontrol dapat merusak organ-organ vital di tubuh kita.
                        Mari kenali bahaya dan komplikasi utamanya agar kita lebih waspada.
                    </p>
                </div>
            </div>

            <div className="container" style={{ marginTop: '0', paddingTop: '0' }}>

                {/* 1. Gagal Jantung */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '30px',
                    background: 'var(--surface-solid)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '40px',
                    boxShadow: 'var(--shadow-sm)',
                    marginBottom: '40px'
                }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', alignItems: 'center' }}>
                        <div style={{ flex: '1 1 300px' }}>
                            <img src={heartImg} alt="Ilustrasi Gagal Jantung" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', objectFit: 'cover' }} />
                        </div>
                        <div style={{ flex: '1 1 400px' }}>
                            <h2 style={{ fontSize: '2rem', color: 'var(--text-color)', marginBottom: '15px' }}>1. Gagal Jantung & Serangan Jantung</h2>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '15px' }}>
                                Jika tidak dikendalikan, hipertensi dapat menyebabkan berbagai komplikasi pada sistem kardiovaskular, terutama pada jantung.
                            </p>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '15px' }}>
                                Tekanan darah yang tinggi membuat jantung harus bekerja lebih keras untuk memompa darah ke seluruh tubuh. Dalam jangka panjang, kondisi ini dapat menyebabkan penebalan otot jantung dan perubahan struktur jantung yang dapat meningkatkan risiko terjadinya gagal jantung.
                            </p>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '25px' }}>
                                Oleh karena itu, penting untuk melakukan skrining tekanan darah secara rutin, menjaga pola makan sehat, mengurangi konsumsi garam, rutin berolahraga, serta menghindari kebiasaan merokok untuk mencegah terjadinya komplikasi akibat hipertensi.
                            </p>
                            <a href="https://doi.org/10.3390/ijms25126661" target="_blank" rel="noopener noreferrer" className="btn" style={{ display: 'inline-flex', padding: '10px 20px', fontSize: '0.9rem', background: 'var(--section-alternate)', color: 'var(--primary)', border: '1px solid var(--primary)', borderRadius: '8px', textDecoration: 'none' }}>
                                Baca Referensi (Gallo & Savoia, 2024)
                            </a>
                        </div>
                    </div>
                </div>

                {/* 2. Stroke */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '30px',
                    background: 'var(--surface-solid)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '40px',
                    boxShadow: 'var(--shadow-sm)',
                    marginBottom: '40px'
                }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap-reverse', gap: '30px', alignItems: 'center' }}>
                        <div style={{ flex: '1 1 400px' }}>
                            <h2 style={{ fontSize: '2rem', color: 'var(--text-color)', marginBottom: '15px' }}>2. Stroke</h2>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '15px' }}>
                                Hipertensi atau tekanan darah tinggi dapat merusak pembuluh darah di otak. Tekanan darah yang terus meningkat menyebabkan dinding pembuluh darah menebal dan menyempit sehingga aliran darah ke otak menjadi terganggu.
                            </p>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '25px' }}>
                                Kondisi ini dapat menyebabkan terbentuknya sumbatan yang memicu stroke iskemik atau bahkan pecahnya pembuluh darah yang menyebabkan stroke hemoragik.
                            </p>
                            <a href="https://doi.org/10.30574/wjarr.2024.21.1.0204" target="_blank" rel="noopener noreferrer" className="btn" style={{ display: 'inline-flex', padding: '10px 20px', fontSize: '0.9rem', background: 'var(--section-alternate)', color: 'var(--primary)', border: '1px solid var(--primary)', borderRadius: '8px', textDecoration: 'none' }}>
                                Baca Referensi (Syukriyah & Fauzi, 2024)
                            </a>
                        </div>
                        <div style={{ flex: '1 1 300px' }}>
                            <img src={strokeImg} alt="Ilustrasi Stroke" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>

                {/* 3. Gagal Ginjal Kronis */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '30px',
                    background: 'var(--surface-solid)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '40px',
                    boxShadow: 'var(--shadow-sm)',
                    marginBottom: '60px'
                }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', alignItems: 'center' }}>
                        <div style={{ flex: '1 1 300px' }}>
                            <img src={kidneyImg} alt="Ilustrasi Gagal Ginjal" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', objectFit: 'cover' }} />
                        </div>
                        <div style={{ flex: '1 1 400px' }}>
                            <h2 style={{ fontSize: '2rem', color: 'var(--text-color)', marginBottom: '15px' }}>3. Gagal Ginjal Kronis</h2>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '15px' }}>
                                Hipertensi merupakan salah satu faktor risiko utama terjadinya penyakit ginjal kronik. Tekanan darah tinggi dapat menyebabkan kerusakan pada pembuluh darah kecil di ginjal sehingga mengganggu kemampuan ginjal dalam menyaring limbah dan cairan dari darah.
                            </p>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '15px' }}>
                                Kerusakan yang berlangsung dalam waktu lama dapat menyebabkan penurunan fungsi ginjal secara bertahap.
                            </p>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '25px' }}>
                                Apabila kondisi ini tidak ditangani dengan baik, maka kerusakan ginjal dapat berkembang menjadi penyakit ginjal kronik bahkan gagal ginjal.
                            </p>
                            <span style={{ display: 'inline-block', padding: '8px 16px', fontSize: '0.9rem', background: '#f8fafc', color: 'var(--text-muted)', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                                Sumber: (Golafshan & Shafieyoon, 2024)
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Risiko;
