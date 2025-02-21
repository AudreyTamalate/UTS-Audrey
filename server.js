const express = require('express');
const db = require('./config/db');

const app = express();

app.get('/test-db', (req, res) => {
    db.query("SELECT 1", (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Koneksi ke database gagal" });
        }
        res.json({ message: "Koneksi ke database berhasil" });
    });
});

app.listen(3000, () => {
    console.log('Server berjalan di port 3000');
});
