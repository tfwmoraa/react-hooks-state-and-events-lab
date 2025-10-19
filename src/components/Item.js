import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  // toggle cart status
  function handleAddToCartClick() {
    setIsInCart((prev) => !prev);
  }

  const liClass = isInCart ? "in-cart" : "";

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={isInCart ? "remove" : "add"}
        onClick={handleAddToCartClick}
      >
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
