# Suara Hati Rani - Media Pembelajaran Interaktif (MPI)

**Suara Hati Rani** adalah aplikasi web pembelajaran interaktif yang dirancang untuk siswa Pendidikan Kesetaraan Paket B (Fase D) pada mata pelajaran Pemberdayaan (Elemen Kesadaran Diri - Sub Unit: Pendapat Diri).

Aplikasi ini mengajarkan tentang keberanian mengenali pendapat diri sendiri, membedakan opini pribadi dengan sekadar ikut-ikutan (*bandwagon*), menyampaikan pendapat secara santun, serta menghargai perbedaan pendapat orang lain.

---

## 🌟 Fitur Utama

1. **Cover & Pemantik (Warm-Up Poll):**
   - Halaman pembuka dengan visual sekolah SKB yang khas.
   - Fitur polling interaktif mengenai penggunaan gawai dilengkapi grafik batang persentase untuk merangsang pendapat awal siswa.

2. **Kisah Alur Cerita Rani (Halaman 3–8):**
   - Panel komik horizontal dengan dialog dalam balon kata asimetris ala komik bergambar.
   - Mengisahkan Rani (siswi SMP) yang awalnya takut berpendapat hingga akhirnya berani menyuarakan gagasan setelah mendapat nasihat Ayah dan motivasi dari gurunya, Bu Fitri.

3. **Ruang Refleksi & Materi Inti (Halaman 9–10):**
   - Evaluasi kesadaran diri mandiri mengenai kecenderungan ikut-ikutan versus memiliki pemikiran mandiri.
   - Rangkuman materi inti ciri-ciri pendapat diri (*Jujur, Berani, Mandiri, Santun*) dikemas dalam grid ikon neobrutalisme yang interaktif.

4. **Kuis Interaktif (Halaman 11–15):**
   - Evaluasi pemahaman 5 soal pilihan ganda.
   - Umpan balik visual instan: menyala hijau + ✅ jika benar, bergetar (*shake*) + menyala merah + ❌ jika salah.
   - Penjelasan materi singkat (*explanation*) muncul setelah menjawab dan pelacakan skor di pojok kanan atas.

5. **Pojok Game Edukatif (3 Game):**
   - **Game 1 - Pasar Pendapat:** Memilah kartu opini dengan memasukkannya ke keranjang *Santun* atau *Tidak Santun* (+10 poin per jawaban benar).
   - **Game 2 - Pilih Pendapat Asli:** Memilih antara dua opini berdampingan, kartu berputar (3D *flip-card*) untuk mengungkap analisis keaslian pemikiran.
   - **Game 3 - Tangga Keberanian:** Rani menaiki atau menuruni tangga diagonal berdasarkan ketepatan pilihan perilaku siswa menuju puncak *Bintang Kemandirian*.

6. **Halaman Penutup & Rangkuman Refleksi:**
   - Menampilkan kembali semua jawaban bebas yang diketik oleh siswa pada sesi refleksi dan materi inti ke dalam kartu ringkasan untuk mempermudah evaluasi guru.
   - Tantangan menuliskan pendapat lokal dan slogan motivasi belajar.

---

## 🎨 Panduan Desain & Estetika

Aplikasi ini menggunakan **Gaya Estetika Neobrutalisme Komik**:
- **Warna Latar:** `#FFF3E0` (warna krem hangat kertas kuno).
- **Aksen Utama:** `#FF6F3C` (oranye berani).
- **Latar Kartu:** `#F9E4B7` (kuning pucat).
- **Umpan Balik Positif:** `#A8D8A8` (hijau mint).
- **Teks Utama:** `#4A3728` (cokelat hangat gelap, menghindari hitam pekat/abu-abu korporat).
- **Batas (Borders):** Outline tebal 3px solid/dashed berwarna cokelat gelap dengan bayangan tegas (*heavy offset shadows*) tanpa blur khas neobrutalisme.
- **Tipografi:** Heading menggunakan font *Nunito ExtraBold*, sedangkan paragraf menggunakan font *Lato* (di-load dari Google Fonts).
- **Responsivitas:** Layout akan memanjang menjadi grid/kolom samping-menyamping di layar laptop/desktop dan berubah vertikal menumpuk (*stack*) di layar ponsel agar tetap nyaman dibaca.

---

## 💻 Teknologi

- **Core:** HTML5, CSS3 (Vanilla), JavaScript (React 18).
- **Build Tool:** Vite 8.
- **Library Tambahan:**
  - `lucide-react` (untuk penyediaan ikon garis outline hangat).
  - `canvas-confetti` (untuk efek hujan konfeti saat kuis selesai).

---

## 🚀 Cara Menjalankan Project

Ikuti perintah terminal di bawah ini pada direktori proyek:

### 1. Instalasi Node Modules
```bash
npm install
```

### 2. Jalankan Local Development Server (HMR aktif)
```bash
npm run dev
```
Setelah dijalankan, buka alamat localhost yang tertera (biasanya `http://localhost:5173`) di browser Anda.

### 3. Build untuk Produksi
```bash
npm run build
```
Hasil build yang teroptimasi akan masuk ke folder `dist/`.
