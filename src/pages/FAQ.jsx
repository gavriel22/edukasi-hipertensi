import React, { useState } from 'react';

const FAQ = () => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    pesan: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ganti nomor ini dengan nomor WhatsApp yang dituju (pakai kode negara tanpa +)
    // Contoh: 6281234567890
    const phoneNumber = '6285326378976';

    // Format pesan yang akan dikirim
    const message = `Halo, saya memiliki pertanyaan dari web Edukasi Hipertensi:\n\n*Nama:* ${formData.nama}\n*Email:* ${formData.email}\n*Pertanyaan:* ${formData.pesan}`;

    // Encode pesan agar bisa digunakan di URL
    const encodedMessage = encodeURIComponent(message);

    // Buka link WhatsApp API di tab baru
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="container">
      <h1>Pertanyaan Sering Diajukan (FAQ)</h1>
      <div className="card">
        <p><strong>Bolehkah obat medis dan herbal diminum bersamaan?</strong></p>
        <p>Tanpa pemahaman yang tepat, penggunaan bersamaan dapat menimbulkan risiko interaksi. Dianjurkan memberi jeda 1-2 jam.</p>
      </div>

      <h2 style={{ marginTop: '40px' }}>Hubungi Kami</h2>
      <p>Jika Anda memiliki pertanyaan terkait penggunaan obat diuretik atau herbal, silakan hubungi kami melalui formulir berikut yang akan diteruskan ke WhatsApp:</p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
        <input
          type="text"
          name="nama"
          placeholder="Nama"
          required
          value={formData.nama}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="pesan"
          placeholder="Pesan"
          required
          value={formData.pesan}
          onChange={handleChange}
          style={{ height: '100px' }}
        ></textarea>
        <button type="submit" className="btn">Kirim ke WhatsApp</button>
      </form>
    </div>
  );
};

export default FAQ;