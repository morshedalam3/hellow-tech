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
import ManageProduct from "./components/ManageProduct/ManageProduct";
import Order from "./components/Order/Order";
import Admin from "./components/Admin/Admin";
// import Page from "./components/Page/Page";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Header/>
      <Switch>
        <Route path="/admin">
       <Admin/>
        </Route>
        {/* <Route path="/page">
        <Page/>
        </Route> */}
        <Route path="/addProducts">
         <AddProducts/>
        </Route>
        <PrivateRoute path="/order">
          <Order/>
        </PrivateRoute>
        <PrivateRoute path="/manageProduct">
         <ManageProduct/>
        </PrivateRoute>
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
