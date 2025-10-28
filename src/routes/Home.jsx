import { useState } from "react";

function Home() {
  const [fact, setFact] = useState("Click the button to get a cat fact!");
  const [loading, setLoading] = useState(false);

  const getFact = async () => {
    setLoading(true);

    try {
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      setFact("Oops! Could not fetch a fact. Try again!");
    }

    setLoading(false);
  };

  return (
    <div>
      <h1>🐱 Cat Facts</h1>

      <button
        onClick={getFact}
        disabled={loading}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: loading ? "not-allowed" : "pointer",
          backgroundColor: loading ? "#ccc" : "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        {loading ? "Loading..." : "Get Random Fact"}
      </button>

      <div
        style={{
          padding: "20px",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          border: "2px solid #ddd",
        }}
      >
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>{fact}</p>
      </div>
    </div>
  );
}

export default Home;
