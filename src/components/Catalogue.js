import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Catalogue() {
  let [data, setData] = useState([]);
  let url = "https://rooftop-api-rest-frontend.herokuapp.com/items";

  useEffect(
    function () {
      axios.get(url).then((res) => setData(res.data.items));
    },
    [url]
  );
  if (!data.length) {
    return null;
  }
  return (
    <>
      <h3>PRODUCTOS</h3>
      <div className="listProducts">
        {data.map((item) => (
          <div key={item.id} className="products">
            <img src={item.images[0]} alt="img" width="100%" height="80%"></img>
            <div className="info-products">
              <div className="title">{item.title}</div>
              <div>
                {item.offer === null ? (
                  <div className="currency">
                    {item.currency}
                    {item.price}
                  </div>
                ) : (
                  <h6 className="offer">O F E R T A ¡{item.offer.price}!</h6>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
