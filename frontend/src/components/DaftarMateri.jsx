function DaftarMateri({ materi }) {
  return (
    <div>
      {materi.map((item, index) => (
        <div key={item.id || index}>
          <h3>{item.judul}</h3>
          <p>{item.mataKuliah}</p>
          <p>Pertemuan {item.pertemuan}</p>
        </div>
      ))}
    </div>
  );
}

export default DaftarMateri;
