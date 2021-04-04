import React from 'react'
import { connect } from 'react-redux'
import { login } from '../../state/auth/authActions'
import Login from './Login'

const LoginContainer = ({ isAuth, login }) => {
    return (
        <Login isAuth={isAuth} login={login} />
    )
}

const mapStateToProps = state => ({
    isAuth: state.authReducer.isAuth
})

export default connect(mapStateToProps, { login })(LoginContainer)
