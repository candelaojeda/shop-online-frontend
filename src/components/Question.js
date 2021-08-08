import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

let url = "https://rooftop-api-rest-frontend.herokuapp.com/questions?item_id=";

export default function Question() {
  let [questions, setQuestions] = useState([]);
  const location = useLocation();
  const product = location.state.product;

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await axios.get(url + product.id);
      setQuestions(response.data);
    };
    if (product) {
      fetchQuestions();
    }
  }, [product]);

  const orderAnswers = questions.sort((x, y) => {
    return new Date(y.sent_at).getTime() - new Date(x.sent_at).getTime();
  });

  if (!Object.keys(product).length) {
    return null;
  }
  return (
    <>
      <h3>CONSULTAS SOBRE ESTE PRODUCTO</h3>
      <div className="questions">
        {questions.map((questionItem, index) => (
          <div key={index}>
            <div>{questionItem.customer_name}</div>
            <div>{questionItem.question}</div>
            <div>{questionItem.answer}</div>
            <div {...orderAnswers}>{questionItem.sent_at}</div>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}
