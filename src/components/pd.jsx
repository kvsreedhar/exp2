import React, { useState } from "react";

function PD() {
  const [name, setName] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>React Form</h1>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Hello {name}</h2>
    </div>
  );
}

export default PD;
