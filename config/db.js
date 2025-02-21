const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",      
    password: "",      
    database: "tugas_mahasiswa"
});

db.connect((err) => {
    if (err) {
        console.error("Koneksi ke database gagal:", err);
    } else {
        console.log("Terhubung ke database MySQL");
    }
});

module.exports = db;
