import { useState } from 'react'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import '../index.css'


export default function ImageSlider({ slides }) {

    console.log('slides', slides)

    const [current, setCurrent] = useState(0)
    const [activeIndex, setActiveIndex] = useState(0)
    const length = slides.length

    const goToNext = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
        setActiveIndex(current === length - 1 ? 0 : current + 1)
    }

    const goToPrevious = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
        setActiveIndex(current === 0 ? length - 1 : current - 1)
    }

    const styleImage = {
        backgroundImage: `url(${slides[current]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '10px',
        height: '60vh',
        width: '50%',
        margin: '0 auto',
    }

    const dotStyle = {
        height: '20px',
        width: '20px',
        backgroundColor: '#bbb',
        borderRadius: '50%',
        display: 'inline-block',
        margin: '0 2px',
        cursor: 'pointer',

    }

    const dots = slides.map((_, index) => (
        <div
          key={index}
          style={{ ...dotStyle, backgroundColor: activeIndex === index ? '#717171' : '#bbb' }}
          onClick={() => {
            setActiveIndex(index);
            setCurrent(index);
          }}
        />
      ));

    return(
        <>
            <div className="slider">
                <div className='leftArrow' onClick={goToPrevious}>
                <FaArrowCircleLeft size={30}/>                
                </div>

                <div className='rightArrow' onClick={goToNext}>
                <FaArrowCircleRight size={30} />                    
                </div>

                <div style={styleImage}></div>
                <div style={{ textAlign: 'center', marginTop: '10px' }}>{dots}</div>

            </div>
        </>
    )
}  