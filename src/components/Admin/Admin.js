import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBorderAll, faPlus} from '@fortawesome/free-solid-svg-icons'
import AddProducts from '../AddProducts/AddProducts';
import ManageProduct from '../ManageProduct/ManageProduct';


const Admin = () => {
    return (
        <Router>
          <nav className="p-5 col-md-4">
              <h5>
              <FontAwesomeIcon icon={faBorderAll} /> <Link to="/manageProduct">ManageProducts</Link>
              </h5>
              <h5>
              <FontAwesomeIcon icon={faPlus} /> <Link to="/addProduct">AddProduct</Link>
              </h5>
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