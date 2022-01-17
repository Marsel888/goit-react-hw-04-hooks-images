import { createPortal } from 'react-dom'
import { useEffect } from 'react'

function Modal({ img, togleModal }) {
  // const div = document.querySelector('.Overlay')
  const openModal = (e) => {
    if ('Escape' === e.code) {
      togleModal()
    }
    if (e.target === e.currentTarget) {
      togleModal()
    }
  }

  useEffect(() => {
    const div = document.querySelector('.Overlay')

    window.addEventListener('keydown', openModal)
    div.addEventListener('click', openModal)

    // return (
    //   window.removeEventListener('keydown', openModal),
    //   console.log('розмонтирования')
    // )
  })
  const modal = document.querySelector('#modal-root')

  return createPortal(
    <div className="Overlay">
      <div className="Modal">
        <img src={img} />
      </div>
    </div>,

    modal,
  )
}

export default Modal
