import { useEffect, useState } from "react";
import ProductPage from "./ProductPage";

const Womens = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/womens`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <ProductPage products={data} />
    </div>
  );
};

export default Womens;
