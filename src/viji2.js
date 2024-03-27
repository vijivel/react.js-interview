import React, { useState } from 'react';

// Functional component for a counter
export default function Count(){ 
    const [count, setCount] = useState(0);
  
    const increment = () => {
      setCount(count + 1);
    };
    const decrement = () => {
      setCount(count - 1);
    };
  
    return (
      <div>
        <h2>Counter: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <hr/>
      </div>
    );
  }
  
  
  