import useKoleksi from '../hooks/useKoleksi.js'
import { Link } from 'react-router-dom'
import mahasiswa from '../../mahasiswa.json'

export default function Detail() {
  const { items, loading } = useKoleksi()
  const jumlahKategori = new Set(items.map((item) => item.kategori)).size
  return (
    <section>
    <p>Tema: {mahasiswa.tema}</p>
    {loading ? (
      <p>Memuat ringkasan...</p>
    ) : (
      <p>
        Ada {items.length} tugas dalam {jumlahKategori} kategori.
      </p>
    )}
    <Link to="/koleksi">Ayo Kulineran disini!</Link>
    </section>
  )
}
