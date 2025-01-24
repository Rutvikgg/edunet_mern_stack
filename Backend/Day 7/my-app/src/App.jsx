import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Button } from "antd";
import Kids from "./Kids";
import Mens from "./Mens";
import Womens from "./Women";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <nav style={{ display: "flex", justifyContent: "space-around" }}>
        <a
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "24px",
            padding: "10px",
            fontWeight: "700",
          }}
          href="/"
        >
          <Button type="primary">Home</Button>
        </a>
        <a
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "24px",
            padding: "10px",
            fontWeight: "700",
          }}
          href="/kids"
        >
          <Button type="primary">Kids Wear</Button>
        </a>
        <a
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "24px",
            padding: "10px",
            fontWeight: "700",
          }}
          href="/mens"
        >
          <Button type="primary">Mens Wear</Button>
        </a>
        <a
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "24px",
            padding: "10px",
            fontWeight: "700",
          }}
          href="/womens"
        >
          <Button type="primary">Women Wear</Button>
        </a>
      </nav>

      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <h1 style={{ textAlign: "center", padding: "250px 0" }}>
                {data.message}
              </h1>
            }
          />
          <Route path="/kids" element={<Kids />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/womens" element={<Womens />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
