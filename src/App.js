import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Catalogue from "./components/Catalogue";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navigation">
          <div>
            <a href="/">
              <img
                src="../public/images/logo.png"
                height="100px
            "
                alt="logo-business-name"
              />
            </a>
          </div>
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
                <h1>WELCOME TO THE PAGE !</h1>
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
