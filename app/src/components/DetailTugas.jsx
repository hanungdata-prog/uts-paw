import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import '../style/Beranda.css'
import mahasiswa from '../../mahasiswa.json'

export default function Detail() {
  const { items, loading } = useKoleksi()
  const navigate = useNavigate()
  const jumlahKategori = new Set(items.map((item) => item.kategori)).size
  const tombolKeKoleksi = () => {
    navigate('/koleksi')
  }
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
    <button id='btn-kekoleksi' onClick={tombolKeKoleksi}>Ayo cek kulineran!</button>
    </section>
  )
}
