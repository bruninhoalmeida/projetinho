import React, { useState, useEffect } from 'react';

function SlideShow() {
  const [seconds, setSeconds] = useState(0);
  const [slideAtual, setSlideAtual] = useState(0);

  const slides = [
    "Slide 1",
    "Slide 2",
    "Slide 3",
  
    
  ];

  function proximoSlide() {
    setSlideAtual((prev) => (prev + 1) % slides.length);
  }

  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  
  useEffect(() => {
    const interval = setInterval(proximoSlide, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>SlideShow</h1>

      <h2>{slides[slideAtual]}</h2>

      <p>Tempo: {seconds} segundos</p>
    </div>
  );
}

export default SlideShow;