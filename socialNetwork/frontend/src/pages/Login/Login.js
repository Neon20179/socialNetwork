import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

const initialState = {
    username: "",
    password: "",
}

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = initialState
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.login(this.state)
        this.setState(initialState)
    }

    render() {
        if (this.props.isAuth) {
            return <Redirect to="/feed/" />
        }

        return (
            <section className="login-page">
                <div className="container">
                    <h2>Log in</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input placeholder="Username or email" type="text" value={this.state.username} name="username" onChange={this.handleChange} required />
                        <input placeholder="Password" type="password" value={this.state.password} name="password" onChange={this.handleChange} required />
                        <button type="submit">Enter Network</button>
                    </form>
                </div>
            </section>
        )
    }
}

export default Login
