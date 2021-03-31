import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./components/Home/Home";
import AddProducts from "./components/AddProducts/AddProducts";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Checkout from "./components/Checkout/Checkout";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Header/>
      <Switch>
        <Route path="/about">
        
        </Route>
        <Route path="/addProducts">
         <AddProducts/>
        </Route>
        <PrivateRoute path="/checkout/:_id">
            <Checkout/>
          </PrivateRoute>
        <Route path="/login">
      <Login/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

  </Router>
  </UserContext.Provider>
  );
}

export default App;
