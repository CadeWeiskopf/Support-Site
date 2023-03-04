import "./App.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Cases from "./screens/Cases";
import AppContext, { AppContextProvider } from "./AppContext";
import { useContext } from "react";
import Account from "./screens/Account";
import Case from "./screens/Case";

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
                {user === null ? (
                  <Link to="/login">Login</Link>
                ) : (
                  <Link to="/account">Account</Link>
                )}
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
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/account"
                element={<Account />}
              />
              <Route
                path="/cases"
                element={<Cases />}
              />
              <Route
                path="/case/:id/:guid"
                element={<Case />}
              />
              <Route
                path="/about"
                element={<About />}
              />
              <Route
                path="/contact"
                element={<Contact />}
              />
            </Routes>
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
