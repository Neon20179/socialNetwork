import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PrivateRoute from './common/components/PrivateRoute'

import Navbar from './layout/Navbar/Navbar'

import LoginContainer from './pages/Login/LoginContainer'
import SignUpContainer from './pages/Signup/SignUpContainer'
import OwnProfileContainer from './pages/Profile/OwnProfile/OwnProfileContainer'


const routes = (
    <BrowserRouter>
        <Navbar />
        <main>
            <Switch>
                <Route exact path="/login/" component={LoginContainer} />
                <Route exact path="/sign_up/" component={SignUpContainer} />

                <PrivateRoute exact path="/profile/own/" component={OwnProfileContainer} />
            </Switch>
        </main>
    </BrowserRouter>
)

export default routes
