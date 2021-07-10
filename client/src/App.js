import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WineBar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
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
          <WineBar />
            <Route exact path="/" component={Header} />
            <Route exact path="/about" component={About} />
            <Routes />
            {/* <Route exact path="/login" component={SignIn} />
            <Route exact path="/signup" component={Signup} /> */}
            <Route exact path="/featured" component={Featured} />
            <Route exact path="/favorites" component={Favorites} />
          <Footer />
        </div>
      </Router>
    </AuthApi.Provider>
  );
}
   
 
export default App;
