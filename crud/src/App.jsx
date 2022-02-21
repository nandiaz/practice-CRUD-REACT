import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <h1>All ok...</h1>
        <hr />
        <Routes>
          <Route path="/">This is the homepage </Route>
          <Route path="/contact">This is the contact page</Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
