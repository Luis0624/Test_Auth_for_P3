import React from "react";
// import { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SignIn from "../components/SignIn2";
import SignUp from "../components/SignUp2";
import SignedIn from "../components/Navbar2";
// import MyFavs from "../components/Favorites";


import AuthApi from "../utils/AuthApi"
// import dashboard, it might be a seperate nav with a logout btn instead of sign in and sign in

function Routes() {
    return (
        <Switch>
            <RouteRegistration path="/SignIn" component={SignIn} /> 
            <RouteRegistration path="/SignUp" component={SignUp} /> 
            <RouteProtected path="/SignedIn" component={SignedIn} />
        </Switch>
    );
}

const RouteRegistration = ({component: Component, ...rest}) => {

    const authApi = React.useContext(AuthApi);
    return <Route {...rest} render= {props=> !authApi.auth ? (<Component {...props} />) : <Redirect to='/SignedIn' />} />;

};
const RouteProtected = ({component: Component, ...rest}) => {
    const authApi = React.useContext(AuthApi);
    return <Route {...rest} render= {(props)=> authApi.auth ? (<Component {...props} />) : <Redirect to='/SignIn'/>} />;
};

export default Routes;