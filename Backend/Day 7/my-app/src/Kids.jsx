import { useEffect, useState } from "react";
import ProductPage from "./ProductPage";

const Kids = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/kids`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <ProductPage products={data} />
    </div>
  );
};

export default Kids;
