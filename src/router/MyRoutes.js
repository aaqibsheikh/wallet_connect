import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// importing all the themes
import MainBoard from "../components/Main/MainBoard";
import Profile from "../components/Main/Profile";
import Header from "../components/Header/Header"; 

function MyRouts() {
    return (
        <React.Fragment>
            <Router basename={'/'}>
                <Switch>
                    <Route exact path="/" >
                        <Header />
                        <MainBoard />
                    </Route>
                    <Route exact path="/profile" >
                        <Header />
                        <Profile />
                    </Route>
                </Switch>
            </Router>
        </React.Fragment>
    );
}

export default MyRouts;