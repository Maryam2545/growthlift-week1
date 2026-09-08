import { useState } from "react";

function Toggle() {
  const [visible, setVisible] = useState(false);

  return (
    <div
      style={{
        padding: "20px",
        marginTop: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"}
      </button>

      {visible && (
        <p>This content is now visible!</p>
      )}
    </div>
  );
}

export default Toggle;