import { useEffect, useState } from "react";
import ProductPage from "./ProductPage";

const Mens = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/mens`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <ProductPage products={data} />
    </div>
  );
};

export default Mens;
