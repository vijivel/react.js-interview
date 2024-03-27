// ExampleComponent.js
import React from 'react';
import { useStateValue } from './viji91';

const ExampleComponent = () => {
  const { state, dispatch } = useStateValue();

  const handleClick = () => {
    // Dispatch an action to update the data
    dispatch({ type: 'UPDATE_DATA', payload: 'New data' });
  };

  return (
    <div>
      <p>{state.data}</p>
      <button onClick={handleClick}>Update Data</button>
      <hr/>
    </div>
    
  );
};

export default ExampleComponent;
