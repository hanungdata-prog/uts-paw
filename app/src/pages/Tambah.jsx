import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import '../style/Tambah.css'

const AWAL = {
  judul: '',
  kategori: '',
  alamat: '',
  hargaRataRata: 0,
  jamBuka: ''
}

export default function Tambah() {
  const { tambah } = useKoleksi()
  const navigate = useNavigate()
  const [form, setForm] = useState(AWAL)
  const [galat, setGalat] = useState('')

  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const kata = form.judul.trim().split(" ")
  const simpan = (e) => {
    e.preventDefault()
    setGalat('')
    if (kata.length < 2 || form.judul.trim().length < 10) {
      setGalat('Nama Kuliner minimal 2 kata, Contoh: Mie Ayam atau Geprek Rudi')
      return
    }
    tambah({ ...form, judul: form.judul.trim() })
    navigate('/koleksi')
  }

  return (
    <form className="formulir" onSubmit={simpan} noValidate>
      <h1>Tambah Kuliner</h1>

      <label htmlFor="judul">Tempat Kuliner</label>
      <input id="judul" name="judul" placeholder="Nama Tempat" value={form.judul} onChange={ubah} />
      {galat && <p role="alert">{galat}</p>}

      <label htmlFor="kategori">Kategori</label>
      <select id="kategori" name="kategori" value={form.kategori} onChange={ubah}>
        <option>Makanan</option>
        <option>Minuman</option>
        <option>Jajanan</option>
      </select>

      <label htmlFor="alamat">Alamat</label>
      <input id="alamat" name="alamat" placeholder="Alamat Tempat" value={form.alamat} onChange={ubah} />

      <label htmlFor="hargaRataRata">Harga Rata-Rata</label>
      <input id="hargaRataRata" name="hargaRataRata" value={form.hargaRataRata} onChange={ubah}></input>

      <label htmlFor="jamBuka">Jam Buka</label>
      <input id="jamBuka" name="jamBuka" value={form.jamBuka} onChange={ubah}></input>

      <button type="submit">Simpan</button>
    </form>
  )
}
