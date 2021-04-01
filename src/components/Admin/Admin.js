import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import AddProducts from '../AddProducts/AddProducts';
import ManageProduct from '../ManageProduct/ManageProduct';
const Admin = () => {
    return (

    
        <Router>
          <nav>
         
              <li>
                <Link to="/manageProduct">ManageProducts</Link>
              </li>
              <li>
                <Link to="/addProduct">AddProduct</Link>
              </li>
         
          </nav>
  
          <Switch>
            <Route path="/manageProduct">
            <ManageProduct/>
            </Route>
            <Route path="/addProduct">
            <AddProducts/>
            </Route>
          </Switch>
       
      </Router>
    );
};

export default Admin;

{/* <div>


</div> */}