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
      <div className="listProducts">
        {data.map((item) => (
          
            <div key={item.id} className="products">
              <div>{item.images}</div>
              <div>{item.title}</div>
              <div>{item.currency}</div>
              <div>{item.price}</div>
            </div>
          
        ))}
      </div>
    </>
  );
}
