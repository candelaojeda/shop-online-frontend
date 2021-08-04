import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ImageGallery from "react-image-gallery";

export default function Detail() {
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
            <div>{item.id}</div>

            <ImageGallery items={item.images}/>

            {/* <img src={item.images[0]} alt="img" width="50%" height="50%"></img>
            <img src={item.images[1]} alt="img" width="50%" height="50%"></img>
            <img src={item.images[2]} alt="img" width="50%" height="50%"></img> */}
            <div>{item.currency}</div>
            <div>{item.price}</div>
          </div>
        ))}
      </div>
      <div className="form-detail">
        <form>
          <div className="textarea">
            <textarea
              name="about"
              cols="15"
              rows="6"
              placeholder="Me gustaría consultar acerca de este producto..."
              required=""
              pattern="[a-zA-Z]+"
            ></textarea>
          </div>
          <div className="input-email">
            <input
              type="text"
              name="mail"
              placeholder="Correo electrónico"
              required=""
              pattern="[a-zA-Z]+"
            />
          </div>
          <div>
            <button type="submit" className="btn-submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
