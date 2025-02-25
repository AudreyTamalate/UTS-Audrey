# UTS Perancangan dan Pemrograman Web 2 Audrey Tamalate

## Deskripsi Proyek
Aplikasi ini dikembangkan sebagai tugas Mini Project UTS dalam mata kuliah Perancangan dan Pemrograman Web. 

## Fitur Utama
- **Autentikasi Pengguna (JWT)**: Register, Login, dan Logout.
- **Manajemen Tugas**: Menambahkan, mengedit, dan menghapus tugas.
- **Kategori Tugas**: Kategorisasi tugas seperti "Kuliah", "Organisasi", dan "Pribadi".
- **Filter Tugas dengan AJAX**: Menampilkan daftar tugas berdasarkan kategori tanpa reload halaman.
- **Notifikasi Real-Time**: Menggunakan WebSockets untuk memberikan notifikasi jika ada tugas baru.
- **Validasi Data**: Middleware Node.js untuk validasi input sebelum disimpan ke database.
- **Database**: Menggunakan MySQL untuk menyimpan data tugas.

## Teknologi yang Digunakan
- **Frontend**: HTML, CSS, JavaScript (dapat menggunakan Bootstrap atau framework lain).
- **Backend**: Node.js dengan Express.js.
- **Database**: MySQL.
- **Real-Time**: WebSockets untuk notifikasi tugas baru.
- **AJAX**: Untuk pengambilan data tanpa reload halaman.

## Struktur Folder
/tugas_mahasiswa
│── /config         # Konfigurasi database, environment, dll.
│── /controllers    # Logika dari tiap fitur
│── /middlewares    # Middleware seperti autentikasi, validasi, dll.
│── /models        # Model database (schema/tabel MySQL)
│── /routes        # Rute API
│── /public        # Static assets 
│── .env           # Konfigurasi environment
│── server.js      # Entry point backend
│── package.json   # Dependencies
│── README.md      # Dokumentasi proyek
```

## Endpoint API
| Method | Endpoint       | Deskripsi                   |
|--------|--------------- |-----------------------------|
| POST   | /auth/register | Mendaftarkan pengguna baru  |
| POST   | /auth/login    | Login dan mendapatkan JWT   |
| POST   | /auth/logout   | Logout                      |
| POST   | /tasks         | Menambahkan tugas baru      |
| GET    | /tasks         | Mengambil daftar tugas      |
| PUT    | /tasks/:id     | Mengupdate tugas            |
| DELETE | /tasks/:id     | Menghapus tugas             |

## Cara Menjalankan Proyek

### 1. Clone Repository
git clone <repository-url>
cd <repository-folder>

### 2. Install Dependencies
npm install

### 3. Konfigurasi Environment
Buat file `.env` dan tambahkan konfigurasi berikut:

DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=tugas_mahasiswa
JWT_SECRET=your_jwt_secret
PORT=3000

### 4. Menjalankan Server
npm start

Aplikasi akan berjalan di `http://localhost:3000`.

## Catatan Penting
- Pastikan database MySQL sudah dibuat dengan nama `tugas_mahasiswa`.
- Setiap perubahan kode harus di-commit secara berkala di GitHub.
- Tidak diperbolehkan menyalin kode tanpa memahami fungsinya.
- Setiap mahasiswa harus dapat menjelaskan kode yang mereka tulis.

---
**Selamat Mengerjakan dan Semoga Sukses!** 🚀