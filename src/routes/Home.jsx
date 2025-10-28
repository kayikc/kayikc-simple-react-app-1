import { useState } from "react";
import Button from "../components/Button";

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

      <Button onClick={getFact} disabled={loading}>
        {loading ? "Loading..." : "Get Random Fact"}
      </Button>

      <div
        style={{
          padding: "20px",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          border: "2px solid #ddd",
          marginTop: "20px",
        }}
      >
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>{fact}</p>
      </div>
    </div>
  );
}

export default Home;
