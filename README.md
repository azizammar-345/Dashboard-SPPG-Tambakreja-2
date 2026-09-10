# Dashboard SPPG Tambakreja V3

Dashboard SPPG MBG versi ringkas untuk GitHub Pages.

## Perubahan V3
- Menghapus menu **Distribusi** dan perubahan status distribusi.
- Menghapus **Waste Monitoring / input food waste**.
- Data **Sekolah & Penerima** hanya menampilkan: nama sekolah, jenjang, dan jumlah penerima manfaat.
- Menghapus status Selesai/Proses dari data sekolah.
- Menu **Menu Harian** sekarang langsung memiliki bagian **Informasi Gizi**.
- Dashboard utama diringkas menjadi statistik sekolah dan total penerima.
- Informasi gizi tetap tersedia sebagai menu terpisah.
- Data tersimpan di browser menggunakan `localStorage`.

## Upload ke GitHub
Replace tiga file di repository Anda:
`index.html`, `style.css`, dan `script.js`.

Tidak perlu membuat repository baru.

## Catatan
Data masih tersimpan di browser masing-masing perangkat. Jika nantinya ingin data yang sama untuk operator, Kepala SPPG, dan Ahli Gizi, tahap berikutnya dapat ditambahkan database online. Nilai gizi merupakan estimasi dan perlu divalidasi oleh Ahli Gizi SPPG.
