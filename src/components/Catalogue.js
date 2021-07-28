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
    <div className="listProducts">
      {data.map((item) => (
        <a href="/detail">
          <ul key={item.id} className="products">
            <li>{item.images}</li>
            <li>{item.title}</li>
            <li>{item.currency}</li>
            <li>{item.price}</li>
          </ul>
        </a>
      ))}
    </div>
  );
}
