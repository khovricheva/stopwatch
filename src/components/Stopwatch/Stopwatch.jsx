import React, { useState, useEffect } from 'react';
import Controls from '../Controls/Controls';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import './Stopwatch.scss';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isActive, setisActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const timer = new Subject();
    interval(1000)
      .pipe(takeUntil(timer))
      .subscribe(() => {
        if (isActive) {
          setTime((time) => time + 1);
        }
      });
    return () => {
      timer.next();
      timer.complete();
    };
  }, [isActive]);

  const handleStart = () => {
    setisActive(!isActive);
    setIsPaused(false);

    if (isActive === false && isPaused === false) {
      setTime(0);
    }
  };

  const handlePause = () => {
    setIsPaused(true);
    setisActive(false);
  };

  const handleReset = () => {
    setisActive(true);
    setTime(0);
    setIsPaused(false);
  };

  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <div className='stopwatch'>
      <h1 className='heading'>Stopwatch</h1>
      <div className='time'>{formatTime(time)}</div>
      <Controls
        isActive={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePause={handlePause}
        handleReset={handleReset}
      />
    </div>
  );
}

export default Stopwatch;
