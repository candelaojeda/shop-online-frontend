import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useLocation } from "react-router-dom";
import Formulary from "./Formulary";
import Question from "./Question";
import dayjs from "dayjs";
import { difference } from "lodash";

export default function Detail() {
  const location = useLocation();
  const product = location.state.product;

  const images = product.images.map((img) => {
    return {
      original: img,
      thumbnail: img,
    };
  });

  function datetime(difference) {
    let date1 = dayjs(new Date(product.offer.expires_at));
    let now = dayjs();
    return difference = date1.diff(now, "days");
  }

  if (!Object.keys(product).length) {
    return null;
  }
  return (
    <>
      <div>
        <h1 className="title-detail">{product.title}</h1>
        <div className="img-detail">
          <ImageGallery
            items={images}
            slideDuration={500}
            showPlayButton={false}
          />
        </div>
        <div>
          {product.offer === null ? (
            <div className="offer-detail">
              {product.currency}
              {product.price}
            </div>
          ) : (
            <div>
              <p className="offer-detail">
                O F E R T A ¡{product.offer.price}!
              </p>

              <p className="currency-price-detail">
                Antes: {product.currency}
                {product.price}
              </p>
              <p className="expire-at">
                Expira en {datetime(difference)} días.
              </p>
            </div>
          )}
        </div>
      </div>
      <Question />
      <div>
        <Formulary />
      </div>
    </>
  );
}
