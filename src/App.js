import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Reports from "./pages/Reports";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/reports" component={Reports} />
          <Route path="/products" component={Products} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
