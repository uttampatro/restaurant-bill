import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { Route, Switch, Redirect } from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';
import Menu from './pages/menu';

function App() {
    const userExists = localStorage.getItem('user');
    const isAuthenticated = userExists;
    return (
        <div className="app">
            <Switch>
                <Route exact path={'/'}>
                    <Redirect
                        to={isAuthenticated ? '/home' : '/login'}
                    ></Redirect>
                </Route>
                <Route path={'/login'} component={Login} />
                <Route path={'/register'} component={Register} />
                <Route path={'/home'} component={HomePage} />
                <Route path={'/menu/:id'} component={Menu} />
            </Switch>
        </div>
    );
}

export default App;
