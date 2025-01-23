import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      {data.map((product) => (
        <div key={product.id}>
          <img src={product.img} alt="" />
          <h1>{product.title}</h1>
          <h3>${product.price}</h3>
          <h3>It has {product.rating} rating</h3>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
