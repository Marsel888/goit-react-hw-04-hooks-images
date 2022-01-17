import { useState, useEffect } from 'react'
import React from 'react'

import Searchbar from './components/searchbar/Searchbar'
import ImageGallery from './components/imageGallery/ImageGallery'
import { images } from './PixabayApi'
import Button from './components/button/Button'
import Spiner from './components/Spiner/spiner'
import Modal from './components/modal/Modal'

function App() {
  const [page, setPage] = useState(1)
  const [image, setImages] = useState([])
  const [search, setSearch] = useState('')
  const [load, setLoad] = useState(false)
  const [modalImg, setModalImg] = useState(false)
  const [imgModal, setImgModal] = useState('')

  const saveSearch = (search) => {
    setSearch(search)
  }
  const nextImg = () => {
    setPage((page) => page + 1)
  }
  const modal = (modalImg) => {
    setImgModal(modalImg)
  }
  const togleModal = () => {
    setModalImg(!modalImg)
  }
  const pages = () => {
    setPage(1)
  }

  useEffect(() => {
    if (search !== '') {
      setLoad(true)
      const api = async () => {
        return await images(search, page)
          .then((data) => {
            setImages(page === 1 ? data.hits : [...image, ...data.hits])
          })
          .finally(function () {
            setLoad(false)
          })
      }

      api()
    }
  }, [search, page])

  return (
    <>
      {' '}
      <Searchbar searches={saveSearch} pages={pages} />
      {load && <Spiner />}
      <ImageGallery arrImages={image} modal={modal} togleModal={togleModal} />
      {modalImg && <Modal img={imgModal} togleModal={togleModal} />}
      {image.length ? <Button nextImg={nextImg} /> : ''}
    </>
  )
}

export default App
