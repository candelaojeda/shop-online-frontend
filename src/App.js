import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Catalogue from "./components/Catalogue";
import Detail from "./components/Detail";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Copyright from "./components/Copyright";
//import { shuffle } from "lodash";

function App() {
  let [data, setData] = useState([]);
  let url = "https://rooftop-api-rest-frontend.herokuapp.com/items?limit=4";

  useEffect(
    function () {
      axios.get(url).then((res) => setData(res.data.items));
    },
    [url]
  );

  // const shuffleArray = (array) => {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     const temp = array[i];
  //     array[i] = array[j];
  //     array[j] = temp;
  //   }
  //   return array;
  // };

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
                  <div className="listProducts">
                    {data.map((item) => (
                      <div key={item.id} className="products">
                        <div>{item.id}</div>
                        <div>{item.title}</div>
                        <div>{item.price}</div>
                        <div>{item.images}</div>
                      </div>
                    ))}
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
