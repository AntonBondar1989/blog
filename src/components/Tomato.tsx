import React, { useState, useEffect } from 'react';
import { pauseTomato, playTomato, stopTomato } from '../other/pictures';

function TomatoTimer() {
  const [timer, setTimer] = useState(25 * 60); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: any = null;

    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer(timer => timer - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, timer]);

  function handleStart() {
    setIsActive(true);
  }

  function handlePause() {
    setIsActive(false);
  }

  function handleReset() {
    setIsActive(false);
    setTimer(25 * 60);
  }

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  
  return (
    <div className='tomato_box' >
      <h1 style={{marginTop: '50px'}}><span style={{ color: 'tomato' }}>Tomato</span>  <span style={isActive === true ? { animation: 'blink 1s infinite', color: '#000' } : {color: '#cbd4de'}}>Timer</span> </h1>
      <div className='display_tomato'>
        <span className='display_text'  style={isActive === true ? {color: '#8a2cb6', textShadow: '#8a2cb6 1px 0 15px'} : {color: '#4a4d5c'}}>{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</span>
      </div>
      <div className='wer'>
        {isActive ? (
          <button className='btn_pause_tomato' onClick={handlePause}><img src={pauseTomato} alt="pause" /></button>
        ) : (
          <button  className='btn_start_tomato' onClick={handleStart}><img src={playTomato} alt="play" /></button>
        )}
        <button className='btn_reset_tomato' onClick={handleReset}><img src={stopTomato} alt="stop" /></button>
      </div>
    </div>
  );
}

export default TomatoTimer;