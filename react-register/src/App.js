import React from "react";


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Customer from "./pages/Customer";
import AddCustomer from "./pages/AddCustomer";
import EditCustomer from "./pages/EditCustomer";

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Customer}/>
      <Route path="/add-customer" component={AddCustomer}/>
      <Route path="/edit-customer/:id" component={EditCustomer} exact/>
    </Switch>
  </Router>
  );
}


export default App;
