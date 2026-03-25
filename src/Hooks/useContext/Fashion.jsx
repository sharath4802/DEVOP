import React, { createContext } from "react";

export const FashionContext = createContext();

function Fashion({ children }) {
  const data = {
    brand: "Nike",
    category: "Clothing",
  };

  return (
    <FashionContext.Provider value={data}>
      {children}
    </FashionContext.Provider>
  );
}

export default Fashion;