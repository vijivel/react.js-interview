import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
   
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    
    return () => {
      clearInterval(interval);
      };
    }, [seconds]); 

  return (
    <div>
      <h2>Timer: {seconds} seconds</h2>
      <hr/>
    </div>
    
  );
}


