import React from 'react'
import { connect } from 'react-redux'
import { signUp } from '../../state/auth/authActions'
import SignUp from './SignUp'

const SignUpContainer = ({ isAuth, signUp }) => {
    return (
        <SignUp isAuth={isAuth} signUp={signUp} />
    )
}

const mapStateToProps = state => ({
    isAuth: state.authReducer.isAuth
})

export default connect(mapStateToProps, { signUp })(SignUpContainer)
