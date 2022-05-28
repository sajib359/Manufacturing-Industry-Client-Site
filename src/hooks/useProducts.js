import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://agile-hamlet-27266.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [products, setProducts];
};

export default useProducts;
