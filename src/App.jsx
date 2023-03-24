import { useState,useEffect } from 'react'
import ImageSlider from './components/ImageSlider'
import './index.css'


function App() {
  // const [slides, setSlides] = useState([])

  const slides = [
    'https://i.redd.it/fj8vqooc8nd51.jpg',
    'https://i.redd.it/nbf6kvcbwm741.jpg',
    'https://i.redd.it/vd5ubvfxs1h31.jpg',
    
  ]

  console.log(slides)

  //console.log(data.children[0].data.preview.images[0].source.url)


  // async function getImages() {
  //   const response = await fetch('https://www.reddit.com/r/aww/top/.json?t=all')
  //   const data = await response.json()
  //   const images = data.data.children.map((image) => image.data.url)
  //   setSlides(images)
  // }

  // useEffect(() => {
  //   getImages()
  // }, [])



  return (
    <div className="carousel__container">
      <ImageSlider slides={slides} />
    </div>
  )
}

export default App
