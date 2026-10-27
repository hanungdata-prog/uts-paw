import { Link } from 'react-router-dom'

export default function KartuItem({ item }) {
  const { id, judul, kategori, alamat, hargaRataRata, jamBuka } = item
  return (
    <article className="kartu">
      <h3>
        <Link to={`/koleksi/${id}`}>{judul}</Link>
      </h3>
      <p>
        Kategori : {kategori}
        <br/>
        Alamat   : {alamat}
        <br/>
        Harga Rata-Rata   : {hargaRataRata}
        <br />
        Jam Buka : {jamBuka}
      </p>
    </article>
  )
}
