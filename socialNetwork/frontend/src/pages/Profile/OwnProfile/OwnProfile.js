import React from 'react'

const headerImageStyles = (headerImage) => ({
    backgroundImage: `url(${headerImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
})

const OwnProfile = ({ user }) => {
    return (
        <section className="own-profile-page">
            <div className="head">
                <div className="head-image"
                    style={user.header_image ? headerImageStyles(user.header_image) : { background: "#a4c7ee" }}>
                    <h2>{user.username}</h2>
                </div>
                <img src={user.avatar_image} alt={user.username} className="avatar-image" />
            </div>
        </section>
    )
}

export default OwnProfile
