import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Header from './Component/Home/Header/Header';
import Footer from './Component/Footer/Footer';
import Login from './Component/Login/Login';
import DashboardServiceList from './Component/Dashboard/DashboardServiceList/DashboardServiceList';
import AddService from './Component/Dashboard/AddService/AddService';
import MakeAdmin from './Component/Dashboard/MakeAdmin/MakeAdmin';
import Review from './Component/Dashboard/Review/Review';
import UserServiceList from './Component/Dashboard/UserServiceList/UserServiceList';
import Order from './Component/Dashboard/Order/Order';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={{ user: [loggedInUser, setLoggedInUser] }}>
      <Router>
        <Switch>
          {/* admin panel */}
          <PrivateRoute path="/adminServiceList" >
            <DashboardServiceList />
          </PrivateRoute>
          <PrivateRoute path="/addService" >
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/MakeAdmin" >
            <MakeAdmin />
          </PrivateRoute>
          {/* user panel */}
          <PrivateRoute path="/order/:id" >
            <Order />
          </PrivateRoute>
          <PrivateRoute path="/order" >
            <Order />
          </PrivateRoute>
          <Route path="/serviceList" >
            <UserServiceList />
          </Route>
          <Route path="/review" >
            <Review />
          </Route>
          {/* UI */}
          <Route path="/login" >
            <Login />
          </Route>
          <Route path="/home" >
            <Header />
            <Footer />
          </Route>
          <Route exact path="/" >
            <Header />
            <Footer />
          </Route>
          <Route path="*">
            <h1>Not found</h1>
          </Route>
        </Switch>
      </Router>

    </UserContext.Provider>
  );
}

export default App;
