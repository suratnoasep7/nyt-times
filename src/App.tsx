import './index.css'
import { SearchArticle } from './components/SearchBar'

export default function App() {
  return (
    <div className="min-vh-100 bg-light text-dark">
      <header className="py-3 px-2 border-bottom shadow-sm bg-white text-center">
        <h3 className="fw-bold m-0 d-flex justify-content-center align-items-center gap-2">
          <span className="material-icons text-primary">library_books</span>
          <span className="fs-5">NYT Article Search</span>
        </h3>
      </header>

      <main className="container-fluid py-4 px-3">
        <SearchArticle />
      </main>
    </div>
  )
}
