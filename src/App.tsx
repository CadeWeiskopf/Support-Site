import "./App.css";
import { BrowserRouter, Route, Link } from "react-browser-router";
import Home from "./screens/Home";
import Login from "./screens/Login";
import About from "./screens/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <div className="main-div">
            <Route
              exact
              path="/"
              component={Home}
            />
            <Route
              path="/login"
              component={Login}
            />
            <Route
              path="/about"
              component={About}
            />
          </div>
        </main>
        <footer>footer</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
