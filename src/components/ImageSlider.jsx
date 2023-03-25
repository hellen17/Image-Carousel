import { useState, useEffect, useRef } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import '../index.css';

export default function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const length = slides.length;

  const goToNext = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    setActiveIndex(current === length - 1 ? 0 : current + 1);
    resetTimer();
  };

  const goToPrevious = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    setActiveIndex(current === 0 ? length - 1 : current - 1);
    resetTimer();
  };

  const resetTimer = () => {
    clearInterval(timer.current);
    timer.current = setInterval(goToNext, 3000);
  };
  
  //styles
  const styleImage = {
    backgroundImage: `url(${slides[current]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: '10px',
    border: '3px solid pink',
    height: '70vh',
    width: '100%',
    margin: '0 auto',
  };

  const dotStyle = {
    height: '15px',
    width: '15px',
    backgroundColor: 'transparent',
    border: '3px solid pink',
    borderRadius: '50%',
    display: 'inline-block',
    margin: '0 2px',
    cursor: 'pointer',
  };

  const dots = slides.map((_, index) => (
    <div
      key={index}
      style={{ ...dotStyle, backgroundColor: activeIndex === index ? 'pink' : '' }}
      onClick={() => {
        setActiveIndex(index);
        setCurrent(index);
        resetTimer();
      }}
    />
  ));

  const timer = useRef(null);
  
  //display next image after 3 seconds
  useEffect(() => {
    timer.current = setInterval(goToNext, 3000);
    return () => clearInterval(timer.current);
  }, [current]);

  return (
    <>
      <div className="slider">
        <div className="leftArrow" onClick={goToPrevious}>
          <FaArrowCircleLeft size={30} />
        </div>

        <div className="rightArrow" onClick={goToNext}>
          <FaArrowCircleRight size={30} />
        </div>

        <div style={styleImage}></div>
        <div className='dots__wrapper' style={{ textAlign: 'center', marginBottom: '10px' }}>{dots}</div>
      </div>
    </>
  );
}
