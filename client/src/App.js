import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/Navbar';
// import NavBar2 from './components/Navbar2';
import Header from './components/Header';
import Featured from './components/Featured';
// import SignIn from './components/SignIn2';
// import Signup from './components/SignUp2';
import Favorites from './components/Favorites';
import Footer from './components/Footer';
import Routes from './routes/Routes';
import AuthApi from './utils/AuthApi';
import './App.css';




function App() {
  const [auth, setAuth] = useState(false);

  return (
    <AuthApi.Provider value={{ auth, setAuth }}>
      <Router>  
        <div>
          <NavBar />
            <Route exact path="/" component={Header} />
            <Routes />
            {/* <Route exact path="/login" component={SignIn} />
            <Route exact path="/signup" component={Signup} /> */}
            <Route exact path="/featured" component={Featured} />
            <Route exact path="/Favorites" component={Favorites} />
          <Footer />
        </div>
      </Router>
    </AuthApi.Provider>
  );
}
   
 
export default App;
