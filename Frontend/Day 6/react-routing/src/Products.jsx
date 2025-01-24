import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setData(data.products));
  }, []);
  return (
    <>
      <div>fetching the data from API</div>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "10px",
          margin: "50px",
        }}
      >
        {data.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </ul>
    </>
  );
}

export default Products;
