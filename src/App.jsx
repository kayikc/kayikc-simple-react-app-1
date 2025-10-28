import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";

function App() {
  return (
    <BrowserRouter>
      <div style={{ paddig: "5px", fontFamily: "consola" }}>
        {/* Nav*/}
        <nav
          style={{
            marginBottom: "20px",
            padding: "10px",
            backgroundColor: "#f0f0f0",
            borderRadius: "8px",
          }}
        >
          <Link to="/" style={{ marginRight: "10px" }}>
            Home
          </Link>
          <Link to="/about">About</Link>
        </nav>

        {/*Routes*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
