import React from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from "../client/src/components/SignIn2";
import SignUp from "../client/src/components/SignUp2";


function Routes() {
    return <Switch>
        <Route path="/SignIn" component={SignIn} /> 
        <Route path="/SignUp" component={SignUp} /> 

    </Switch>
}

export default Routes;