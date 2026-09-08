function Card({ title, description, color }) {
  return (
    <div
      style={{
        borderLeft: `4px solid ${color}`,
        padding: "15px",
        margin: "10px 0",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;