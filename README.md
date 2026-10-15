# PJOK SMART

Prototipe dashboard digital untuk pengelolaan pembelajaran PJOK. Antarmuka menggunakan HTML, CSS, dan JavaScript tanpa proses build atau dependensi instalasi.

## Menjalankan

Jalankan `node server.js`, lalu buka `http://127.0.0.1:4173` di browser. Gunakan formulir masuk demo yang sudah terisi. Tidak ada autentikasi server; tombol masuk hanya membuka dashboard demo. Berkas juga dapat dibuka langsung melalui `index.html`.

## Data prototipe

Data awal merupakan contoh. Perubahan siswa, jadwal, presensi, nilai, tugas, dan pengaturan disimpan di `localStorage` browser yang digunakan. Data tidak tersinkron antarpiranti dan bukan penyimpanan produksi. Hindari memasukkan informasi sensitif siswa ke prototipe ini.

Fitur ekspor CSV tersedia untuk siswa, presensi, penilaian, dan laporan. Backend, autentikasi, serta kontrol akses belum terhubung.
