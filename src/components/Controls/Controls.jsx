import React from 'react';

function Controls({
  isActive,
  isPaused,
  handleStart,
  handlePause,
  handleReset,
}) {
  return (
    <div>
      <button className='' onClick={handleStart}>
        {isActive && !isPaused ? 'Stop' : 'Start'}
      </button>
      <button className='' onDoubleClick={handlePause}>
        Wait
      </button>
      <button className='' onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default Controls;
