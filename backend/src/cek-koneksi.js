import pool from './db.js';

try {
  const [rows] = await pool.query('SELECT VERSION() AS versi, DATABASE() AS db');
  console.log('Koneksi berhasil:', rows[0]);
} catch (error) {
  console.error('Koneksi gagal:', error.message);
} finally {
  await pool.end();
}