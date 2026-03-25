import React, { useContext } from "react";
import { FashionContext } from "./Fashion";

function Men() {
  const data = useContext(FashionContext);

  return (
    <div>
      <h3>Brand: {data.brand}</h3>
      <h3>Category: {data.category}</h3>
    </div>
  );
}

export default Men;