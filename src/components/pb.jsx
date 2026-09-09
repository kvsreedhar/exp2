import React, { useState } from "react";

function PB() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Functional Counter</h1>
      <h2>{count}</h2>
      <button onClick={increment}>
        Increment
      </button>
    </div>
  );
}

export default PB;
