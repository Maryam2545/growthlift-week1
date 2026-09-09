function InternList() {
  const interns = [
    { id: 1, name: "Mary", city: "Lahore" },
    { id: 2, name: "Sara", city: "Karachi" },
  ];

  return (
    <div
      style={{
        padding: "20px",
        marginTop: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h2>Interns</h2>

      {interns.map((intern) => (
        <div
          key={intern.id}
          style={{
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ddd",
            borderRadius: "6px",
          }}
        >
          <h3>{intern.name}</h3>
          <p>City: {intern.city}</p>
        </div>
      ))}
    </div>
  );
}

export default InternList;