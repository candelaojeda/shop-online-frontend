import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Catalogue from "./components/Catalogue";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navigation">
          <a href="/">
            <img
              src="/images/logo.png"
              alt="logo-business-name"
              className="logo-name"
            />
          </a>
          <Link className="link-nav" to="/">
            HOME
          </Link>
          <Link className="link-nav" to="/catalogue">
            CATALOGUE
          </Link>
          <Link className="link-nav" to="/detail">
            DETAILS
          </Link>
        </div>

        <Route
          exact
          path="/"
          render={() => {
            return (
              <div>
                <div>
                  <img src="/images/banner_1.jpg" alt="banner1"></img>
                  <img src="/images/banner_2.jpg" alt="banner2"></img>
                  <img src="/images/banner_3.jpg" alt="banner3"></img>
                </div>
                <div>

                </div>
              </div>
            );
          }}
        ></Route>
        <Route path="/catalogue" component={Catalogue} />
        <Route path="/detail" component={Detail} />
      </Router>
    </div>
  );
}

export default App;


// useEffect(
//     function () {
//       axios.get(url)
//         .then((res) => {
//             const products = res.data.items;
//             getData(products);
//         })
//     },
//     [url]
//   );