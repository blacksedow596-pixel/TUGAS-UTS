import { useState, useEffect } from 'react';
import DaftarMateri from './components/DaftarMateri';
import { ambilMateri } from './api/materi';

function App() {
  const [materi, setMateri] = useState([]);
  const [memuat, setMemuat] = useState(true);
  const [galat, setGalat] = useState(null);

  async function muatMateri() {
    setMemuat(true);
    setGalat(null);

    try {
      const data = await ambilMateri();
      setMateri(data);
    } catch (err) {
      setGalat(err.message);
    } finally {
      setMemuat(false);
    }
  }

  useEffect(() => {
    muatMateri();
  }, []);

  return (
    <div>
      <h1>ArsipMateri</h1>

      {memuat && <p>Memuat…</p>}

      {!memuat && galat && (
        <div>
          <p>{galat}</p>
          <button type="button" onClick={muatMateri}>
            Coba lagi
          </button>
        </div>
      )}

      {!memuat && !galat && materi.length === 0 && (
        <p>Belum ada materi</p>
      )}

      {!memuat && !galat && materi.length > 0 && (
        <DaftarMateri materi={materi} />
      )}
    </div>
  );
}

export default App;
