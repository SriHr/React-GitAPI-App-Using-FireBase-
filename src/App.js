import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import firebase from "firebase/app";
import "firebase/auth";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PageNotFound from "./pages/PageNotFound";
import { UserContext } from "./context/UserContext";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import firebaseCongig from "./config/firebaseconfig";

//init firebase
firebase.initializeApp(firebaseCongig);

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
