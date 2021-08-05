import React from "react";
import ListItem from "./ListItem"

export default function List({ products, onProductSelected }) {

  return (
    <div>
      <div className="listProducts">
        {products.map((item) => (
          <ListItem key={item.id} product={item} onProductSelected={onProductSelected} />
        ))}
      </div>
    </div>
  );
}
