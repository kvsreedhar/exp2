import React from "react";

function PC() {
  const handleClick = () => {
    alert("Button Clicked");
  };

  return (
    <div>
      <h1>Button Event Example</h1>
      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default PC;
