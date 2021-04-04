import React from 'react'
import { connect } from 'react-redux'
import OwnProfile from './OwnProfile'

const OwnProfileContainer = ({ user }) => {
    return (
        <OwnProfile user={user} />
    )
}

const mapStateToProps = state => ({
    user: state.userReducer.user
})

export default connect(mapStateToProps)(OwnProfileContainer)
