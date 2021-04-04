import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => {
    return (
        <Route {...rest}
            render={props => isAuth ?
                <Component {...props} /> : <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
            }
        />
    )
}

const mapStateToProps = state => ({
    isAuth: state.authReducer.isAuth
})

export default connect(mapStateToProps)(PrivateRoute)
