import { useState,useEffect } from 'react'
import ImageSlider from './components/ImageSlider'
import './index.css'


function App() {
  const [slides, setSlides] = useState([])

  console.log(slides)

  async function getImages() {
    const response = await fetch('https://www.reddit.com/r/aww/top/.json?t=all')
    const data = await response.json()
    const images = data.data.children
    //  extracts an array of image URLs from the data object.
    .map(child => child.data.url_overridden_by_dest)
    //  filters out any URLs that don't end with .jpg
    .filter(url => url.toLowerCase().endsWith('.jpg'))
    setSlides(images)
  }

  // call getImages() when the component mounts.
  useEffect(() => {
    getImages()
  }, [])

  return (
    <div className="carousel__container">
      <h1 className='heading__text'>Image Carousel</h1>
      <ImageSlider slides={slides} />
    </div>
  )
}

export default App
