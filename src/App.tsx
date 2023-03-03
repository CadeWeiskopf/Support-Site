import "./App.css";
import { BrowserRouter, Route, Link } from "react-browser-router";
import Home from "./screens/Home";
import Login from "./screens/Login";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Cases from "./screens/Cases";
import AppContext, { AppContextProvider } from "./AppContext";
import { useContext } from "react";

function App() {
  const { user } = useContext(AppContext);
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
              <li>{user !== null && <Link to="/cases">Cases</Link>}</li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
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
              path="/cases"
              component={Cases}
            />
            <Route
              path="/about"
              component={About}
            />
            <Route
              path="/contact"
              component={Contact}
            />
          </div>
        </main>
        <footer>Brought to you by, Cade Weiskopf - All rights reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default () => {
  return (
    <AppContextProvider>
      <App />
    </AppContextProvider>
  );
};
