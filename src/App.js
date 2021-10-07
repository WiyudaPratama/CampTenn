import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { Home, Checkout, Login, Registrasi } from "./components/pages/index.js"

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth/login" exact component={Login} />
          <Route path="/auth/registrasi" exact component={Registrasi} />
          <Route path="/checkout" exact component={Checkout} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
