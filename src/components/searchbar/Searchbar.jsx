import { useState } from 'react'

function Searchbar({ searches, pages }) {
  const [page, setPage] = useState(1)
  const [imageSeatch, setImageSeatch] = useState('')

  const saveState = (event) => {
    setImageSeatch(event.target.value)
  }

  const importImage = (event) => {
    event.preventDefault()
    searches(imageSeatch)
    pages(page)
  }

  return (
    <header className="Searchbar">
      <form className="form" onSubmit={importImage}>
        <button type="submit" className="Button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={saveState}
        />
      </form>
    </header>
  )
}

export default Searchbar
