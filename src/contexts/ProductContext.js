import React, { createContext, useState, useEffect } from "react";

//Create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // Products state
  const [products, setProducts] = useState([]);
  //fetch products
  useEffect(() => {
    const fecthProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fecthProducts();
  }, []);
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
