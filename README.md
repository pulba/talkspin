<p align="center">
  <img src="logo%20web.png" alt="TalkSpin Logo" width="150" />
</p>

<h1 align="center">TalkSpin</h1>

<p align="center">
  <strong>Spin Wheel Topik Spontan</strong><br>
  Latih respons spontanmu dalam satu layar!
</p>

## ✨ Tentang TalkSpin

TalkSpin adalah aplikasi web interaktif yang didesain secara khusus dengan prinsip *Swiss Minimalist* untuk melatih kemampuan *Public Speaking* secara spontan. Aplikasi ini menyajikan roda putar (Spin Wheel) dengan 20 kategori topik.

Tanpa perlu berpindah tab atau halaman, seluruh latihan dilakukan dalam satu layar (_single-screen application_). Tekan tombol SPIN, dapatkan topiknya, siapkan materinya, dan mulailah berbicara!

## 🚀 Fitur Utama

- **1000 Topik Spontan**: Tersedia 1000 pertanyaan dan topik menarik yang tersebar di 20 kategori (Teknologi, Pendidikan, Kehidupan Remaja, Kesehatan, dll).
- **Brain Boost**: Butuh pancingan ide? Tersedia 3 sub-pertanyaan yang akan membantumu merancang alur pemikiran sebelum berbicara.
- **Sistem Anti-Duplikasi**: Selama sesi berlangsung, topik yang sudah pernah keluar tidak akan muncul lagi sampai seluruh 50 topik di kategori tersebut selesai digunakan.
- **Waktu Persiapan (Preparation Timer)**: Kamu diberikan 30 detik untuk berpikir dan menyusun struktur opini.
- **Waktu Bicara (Speaking Timer)**: _Timer_ hitung mundur yang akan mendisiplinkanmu saat berbicara. Bisa dipilih antara 1, 2, 3, hingga 5 Menit.
- **Swiss Minimalist Design**: Desain UI yang mulus, elegan, *responsive*, dengan palet warna yang cerah namun profesional.

## 🛠 Teknologi yang Digunakan

Aplikasi ini dibangun menggunakan tumpukan teknologi (Tech Stack) yang ringan dan super cepat:
- **[Astro](https://astro.build/)**: Framework statis super cepat.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Untuk _styling_ dan desain *utility-first*.
- **HTML5 Canvas**: Untuk membuat dan menganimasi *Spin Wheel*.
- **Bun**: Sebagai *runtime* dan *package manager* utama yang kencang.

## 🏃 Cara Menjalankan Secara Lokal

1. Pastikan Anda telah menginstal [Bun](https://bun.sh/) di komputer Anda.
2. Clone _repository_ ini:
   ```bash
   git clone https://github.com/pulba/talkspin.git
   cd talkspin
   ```
3. Instal semua _dependencies_:
   ```bash
   bun install
   ```
4. Jalankan server pengembangan lokal:
   ```bash
   bun run dev
   ```
5. Buka `http://localhost:4321` di peramban (browser) kesayangan Anda.

## 💡 Cara Berlatih

1. Di tengah roda (Spin Wheel), tekan tombol **SPIN**.
2. Roda akan berputar dan berhenti di satu kategori.
3. *Pop-up* (Modal) akan muncul menampilkan topik secara acak.
4. (Opsional) Buka menu **Brain Boost** jika ingin melihat ide bantuan pemikiran.
5. Tekan **Persiapan** untuk memulai timer *30 Detik*.
6. Setelah siap, tekan **Mulai Bicara** dan berbicaralah sesuai durasi yang dipilih!

---
*Dikembangkan untuk membantu kamu berbicara lebih lancar dan percaya diri!*
