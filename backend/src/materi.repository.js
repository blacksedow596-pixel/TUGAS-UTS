import pool from './db.js';

export async function semua() {
  const [rows] = await pool.query(
    'SELECT id, judul, mata_kuliah, pertemuan, tautan, created_at FROM materi ORDER BY id ASC'
  );

  return rows.map((row) => ({
    id: row.id,
    judul: row.judul,
    mataKuliah: row.mata_kuliah,
    pertemuan: row.pertemuan,
    tautan: row.tautan ? row.tautan : null,
    created_at: row.created_at,
  }));
}
