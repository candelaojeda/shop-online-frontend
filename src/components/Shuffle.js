import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import _ from "underscore";

export default function Shuffle() {
  let [data, setData] = useState([]);
  let url = "https://rooftop-api-rest-frontend.herokuapp.com/items?limit=4";

  useEffect(
    function () {
      axios.get(url).then((res) => setData(res.data.items));
    },
    [url]
  );
  let shuffleArray = _.shuffle(data);
  return (
    <div>
      <h3>MAS VISTOS...</h3>
      <div className="listProducts-home">
        {shuffleArray.map((shuffles) => (
          <div key={shuffles.id} className="products-home">
            <div className="title">{shuffles.title}</div>
            <div className="currency">
              {shuffles.currency}
              {shuffles.price}
            </div>
            <img
              src={shuffles.images[0]}
              alt="img"
              width="100%"
              height="60%"
            ></img>
          </div>
        ))}
      </div>
      <h4>TODOS LOS MEDIOS DE PAGO</h4>
      <div className="pay">
        <h5>
          <i class="fas fa-credit-card"></i>Tarjetas de crédito
        </h5>
        <h5>
          <i class="far fa-credit-card"></i>Tarjetas de débito
        </h5>
        <h5>
          <i class="fas fa-handshake"></i>Mercado pago
        </h5>
        <h5>
          <i class="fas fa-hand-holding-usd"></i>Efectivo
        </h5>
      </div>
    </div>
  );
}

