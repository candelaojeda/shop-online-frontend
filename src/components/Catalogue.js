import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import List from "./List";
import { useHistory } from "react-router-dom";

export default function Catalogue() {
  let [data, setData] = useState([]);
  const history = useHistory();
  let url = "https://rooftop-api-rest-frontend.herokuapp.com/items";

  useEffect(
    function () {
      axios.get(url).then((res) => setData(res.data.items));
    },
    [url]
  );

  const handleSelectedProduct = (product) => {
    history.push("/details", {product})
  }

  if (!data.length) {
    return null;
  }
  return (
    <>
      <h3>PRODUCTOS</h3>
      <div>
        <List onProductSelected={handleSelectedProduct} products={data}/>
      </div>
    </>
  );
}
