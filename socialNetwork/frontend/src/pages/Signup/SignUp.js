import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

const initialState = {
    username: "",
    email: "",
    password: "",
}

class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = initialState
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signUp(this.state)
        this.setState(initialState)
    }

    render() {
        if (this.props.isAuth) {
            return <Redirect to="/feed/" />
        }

        return (
            <section className="signup-page">
                <div className="container">
                    <h2>Sign up</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="username" placeholder="Username" onChange={this.handleChange} required value={this.state.username} />
                        <input type="text" name="email" placeholder="Email" onChange={this.handleChange} required value={this.state.email} />
                        <input type="password" name="password" placeholder="Password" onChange={this.handleChange} required value={this.state.password} />
                        <button type="submit">Sign up</button>
                    </form>
                </div>
            </section>
        )
    }
}

export default SignUp
