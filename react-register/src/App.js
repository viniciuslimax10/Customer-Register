import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Customer from "./pages/Customer";
import AddCustomer from "./pages/AddCustomer";
import EditCustomer from "./pages/EditCustomer";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Customer />}/>
      <Route path="/add-customer" element={<AddCustomer />}/>
      <Route path="/edit-customer/:id" element={<EditCustomer />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
