import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import useToken from './useToken';

function App() {
    const { token, setToken } = useToken();

    console.log("App component")

    //if(!token) { 
    //  console.log("Token check")
    //  return <Login setToken={setToken} />
    //}

    return (
        <div className="wrapper">

            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/login">
                        <Login setToken={setToken} />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
