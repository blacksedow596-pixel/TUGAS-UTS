export async function ambilMateri() {
  const baseUrl = import.meta.env.VITE_API_URL;
  let res;

  try {
    res = await fetch(`${baseUrl}/materi`);
  } catch {
    throw new Error('Tidak dapat terhubung ke server. Periksa koneksi jaringan Anda.');
  }

  if (!res.ok) {
    let pesan = `Gagal memuat materi (Status ${res.status})`;
    try {
      const body = await res.json();
      if (body && body.error) {
        pesan = body.error;
      }
    } catch {
      // Abaikan jika respons bukan JSON
    }
    throw new Error(pesan);
  }

  return await res.json();
}
