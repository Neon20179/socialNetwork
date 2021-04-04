import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUserData } from './state/user/userActions'
import routes from './routes'

const App = ({ isAuth, getUserData }) => {
    useEffect(() => {
        if (isAuth)
            getUserData()
    })

    return (
        <>
            {routes}
        </>
    )
}

const mapStateToProps = state => ({
    isAuth: state.authReducer.isAuth
})

export default connect(mapStateToProps, { getUserData })(App)
