// ParentComponent.js
import React, { useState } from 'react';
import ChildComponent from './viji8';

export default function ParentComponent(){
  const [data, setData] = useState('Some data');

  return (
    <div>
      <ChildComponent data={data} />
      <hr/>
    </div>
  );
};


