import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Catalogue from "./components/Catalogue";
import Detail from "./components/Detail";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Copyright from "./components/Copyright";

function App() {
  let [data, setData] = useState([]);
  let url = "https://rooftop-api-rest-frontend.herokuapp.com/items?limit=4";

  useEffect(
    function () {
      axios.get(url).then((res) => setData(res.data.items));
    },
    [url]
  );

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <div>
                  <Carousel />
                  <h3>Más vistos...</h3>
                  <div className="listProducts-home">
                    {data.map((item) => (
                      <div key={item.id} className="products-home">
                        <div className="title">{item.title}</div>
                        <div className="currency">
                          {item.currency}
                          {item.price}
                        </div>
                        <img
                          src={item.images[0]}
                          alt="img"
                          width="100%"
                          height="60%"
                        ></img>
                      </div>
                    ))}
                  </div>
                  <h4>Todos los medios de pago</h4>
                  <div className="pay">
                    <h5>Tarjetas de crédito</h5>
                    <h5>Tarjetas de débito</h5>
                    <h5>Mercado pago</h5>
                    <h5>Efectivo</h5>
                  </div>
                </div>
              );
            }}
          ></Route>
          <Route path="/products" component={Catalogue}></Route>
          <Route path="/details" component={Detail}></Route>
        </Switch>
      </Router>
      <Copyright />
    </div>
  );
}

export default App;
