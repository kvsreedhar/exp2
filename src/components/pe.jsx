function PE() {
  const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Mango"
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Fruit List</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default PE;
