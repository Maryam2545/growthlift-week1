import { useState, useEffect } from "react";

function QuoteBox() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setLoading(false);
      })
      .catch(() => {
        setQuote("Unable to load quote.");
        setLoading(false);
      });
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        marginTop: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h2>Random Quote</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>"{quote}"</p>
      )}
    </div>
  );
}

export default QuoteBox;