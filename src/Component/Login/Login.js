import React, { useContext, useEffect } from 'react';
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}
const Login = () => {
    const { user } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = user;

    let history = useHistory()
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const parseJwt = (token) => {
        try {
            return (JSON.parse(atob(token.split('.')[1])))
        } catch (e) {
            return (false);
        }
    };
    const data = sessionStorage.getItem('token')
    const loggedUser = parseJwt(data)
    const email = (loggedInUser.email || loggedUser.email)


    // useEffect(() => {
    //     console.log(email)

    // }, [])


    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSign = () => {
        firebase.auth().signInWithPopup(provider).then(function (result) {
            var token = result.credential.accessToken;
            var user = result.user;
            const newUser = { ...loggedInUser }
            newUser.name = user.displayName;
            newUser.email = user.email;
            newUser.photo = user.photoURL;
            fetch('http://localhost:5000/isAdmin?email=' + newUser.email)
                .then(res => res.json())
                .then(result => {
                    if (result.length == 0) {
                        storeAuthToken()
                        setLoggedInUser(newUser)
                        history.replace(from)
                    }
                    else {
                        storeAuthToken()
                        setLoggedInUser(newUser)
                        history.replace('/adminServiceList')
                    }
                }
                )

        }).catch(function (error) {
            var errorMessage = error.message;
            var credential = error.credential;
        });

    }



    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
            }).catch(function (error) {
                // Handle error
            });
    }

    return (
        <div className="SignIn-wrapper text-center  p-5">
            <div className="SignIn-Header text-enter  m-auto pt-3">
                <img src="https://i.imgur.com/SsnK22Z.png" alt="" />
            </div>
            <div className="SignIn-body   ">
                <div className="w-50 mx-auto p-5 text-center mt-5   ">
                    <h1 className="mb-5">Login With</h1>
                    <button onClick={handleGoogleSign} className="btn btn-custom w-100 h-25 m-1  d-block m-auto  d-flex">
                        <img className="" src="https://i.imgur.com/qMCPtll.png" alt="" />
                        <h4 className="m-2">Continue With google</h4>
                    </button>
                    <p className="mt-4">Don't have an acount  <a href="/">Create an acount</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;