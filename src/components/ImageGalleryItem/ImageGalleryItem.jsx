import { useState } from 'react'

function ImageGalleryItem({ arrImages, modal, togleModal }) {
  const [modalImg, setModalImg] = useState('')

  const click = (e) => {
    togleModal()

    modal(e.largeImageURL)
  }

  return arrImages.map((img) => (
    <div key={img.id} onClick={() => click(img)}>
      <li className="ImageGalleryItem">
        <img
          src={img.webformatURL}
          alt=""
          className="ImageGalleryItem-image "
        />
      </li>
    </div>
  ))
}

// export default class ImageGalleryItem extends Component {
//   state = {
//     modalImg: '',
//   }

//   click = (e) => {
//     this.props.togleModal()

//     this.props.modal(e.largeImageURL)
//   }
//   render() {
//     const test = this.props.arrImages

//     return test.map((img) => (
//       <div key={img.id} onClick={() => this.click(img)}>
//         <li className="ImageGalleryItem">
//           <img
//             src={img.webformatURL}
//             alt=""
//             className="ImageGalleryItem-image "
//           />
//         </li>
//       </div>
//     ))
//   }
// }
export default ImageGalleryItem
