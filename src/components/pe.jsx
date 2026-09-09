import React from "react";

function PE() {
  const message = "Welcome to React JS";
  const course = "React Basics";
  const college = "SVPCET";

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Display Text using String Literals</h1>
      <h2>{message}</h2>
      <h3>{course}</h3>
      <h4>{college}</h4>
    </div>
  );
}

export default PE;
