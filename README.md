# SPPG MBG Dashboard

Dashboard web **mobile-first** untuk operasional SPPG / Program Makan Bergizi Gratis (MBG).

## Fitur
- Dashboard ringkas
- Menu harian
- Data sekolah & penerima manfaat
- Monitoring distribusi
- Informasi gizi
- Waste monitoring
- Pencarian & filter sekolah
- Export data penerima ke CSV
- Pengaturan identitas yang tersimpan di `localStorage`
- Responsive untuk HP, tablet, dan desktop
- Tidak membutuhkan database/backend untuk demo

## Struktur
```text
sppg-mbg-dashboard/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Menjalankan
Cukup buka `index.html` di browser.

## Deploy ke GitHub Pages
1. Buat repository baru, misalnya `sppg-mbg-dashboard`.
2. Upload `index.html`, `style.css`, `script.js`, dan `README.md`.
3. Buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
5. Simpan. GitHub akan memberikan URL website.

## Catatan data
Data sekolah, menu, penerima, dan nilai gizi di dalam versi ini adalah **data contoh/demo**. Nilai gizi sebaiknya diganti berdasarkan perhitungan resmi Ahli Gizi SPPG.

## Pengembangan berikutnya
Versi ini sengaja dibuat tanpa backend agar langsung bisa dipakai sebagai prototype GitHub Pages. Untuk versi produksi dapat ditambahkan:
- login admin/operator
- database
- input menu melalui form
- data sekolah dinamis
- rekap harian/bulanan
- grafik
- upload foto menu
- cetak laporan PDF
- integrasi Google Sheets/API
- role Kepala SPPG, Gizi, Keuangan, Produksi, dan Distribusi
