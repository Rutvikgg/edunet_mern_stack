import React from "react";

const ProductPage = ({ products }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "10px",
      }}
    >
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <p>{product.title}</p>
          <img src={product.img} style={{ maxWidth: "250px" }} />
          <p>${product.price}</p>
          <p>It has {product.rating} rating</p>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
