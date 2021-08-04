import React from "react";

export default function ListItem({ product, onProductSelected }) {
  return (
    <div className="products" onClick={() => onProductSelected(product)}>
      <img src={product.images[0]} alt="img" width="100%" height="80%"></img>
      <div className="info-products">
        <div className="title">{product.title}</div>
        <div>
          {product.offer === null ? (
            <div className="currency">
              {product.currency}
              {product.price}
            </div>
          ) : (
            <h6 className="offer">O F E R T A ¡{product.offer.price}!</h6>
          )}
        </div>
      </div>
    </div>
  );
}
