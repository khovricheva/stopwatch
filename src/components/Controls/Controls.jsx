import React from 'react';
import Button from 'react-bootstrap/Button';
import './Controls.scss';

function Controls({
  isActive,
  isPaused,
  handleStart,
  handlePause,
  handleReset,
}) {
  return (
    <div className='controls'>
      <Button className='control-btn' onClick={handleStart}>
        {isActive && !isPaused ? 'Stop' : 'Start'}
      </Button>
      <Button className='control-btn' onDoubleClick={handlePause}>
        Wait
      </Button>
      <Button className='control-btn' onClick={handleReset}>
        Reset
      </Button>
    </div>
  );
}

export default Controls;
