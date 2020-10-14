import React from "react";
import { useState } from "react";
import { useContext } from "react";
import jwt_decode from "jwt-decode";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
} from "react-router-dom";
import { UserContext } from "../../App";

export default function PrivateRoute({ children, ...rest }) {
    const { user } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = user;

    // const parseJwt = (token) => {
    //     try {
    //         return (JSON.parse(atob(token.split('.')[1])))
    //     } catch (e) {
    //         return (false);
    //     }
    // };

    // const info = sessionStorage.getItem('token')
    // const loggedUser = parseJwt(info)
    const isLoggedIn = () => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            return false;
        }
        const decodedToken = jwt_decode(token);
        const currentTime = new Date().getTime() / 1000;
        return decodedToken.exp > currentTime;
    }



    return (
        <Route
            {...rest}
            render={({ location }) =>
                (loggedInUser.email || isLoggedIn()) ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}
