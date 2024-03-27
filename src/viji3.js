import React, { useState } from 'react';

// Functional component for conditional rendering
export default function ConditionalRender(){
  // State variable to toggle the condition
  const [showMessage, setShowMessage] = useState(false);

  // Function to toggle the condition
  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div>
      <button onClick={toggleMessage}>
        Toggle Message
      </button>
      {/* Conditional rendering using ternary operator */}
      {showMessage ? (
        <p>This message is shown because the condition is true.</p>
      ) : (
        <p>This message is shown because the condition is false.</p>
      )}

      {/* Conditional rendering using logical && operator */}
      {showMessage && (
        <p>This message is shown using logical && operator.</p>
      )}

      {/* Conditional rendering using if statement */}
      {(() => {
        if (showMessage) {
          return <p>This message is shown using if statement.</p>;
        } else {
          return <p>Another message is shown using if statement.</p>;
        }
      })()}
      <hr/>
    </div>
  );
}

