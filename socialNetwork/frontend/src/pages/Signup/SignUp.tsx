import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { SignUpProps } from "./signUpTypes";

const initialState = {
  username: "",
  email: "",
  password: ""
};

type InitialStateType = typeof initialState;

class SignUp extends Component<SignUpProps, InitialStateType> {
  constructor(props: SignUpProps) {
    super(props);

    this.state = initialState;
  }

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState((prevState) => ({ ...prevState, [e.currentTarget.name]: e.currentTarget.value }));
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.signUp(this.state);
    this.setState(initialState);
  };

  render() {
    if (this.props.isAuth) {
      return <Redirect to="/feed/" />;
    }

    return (
      <section className="signup-page">
        <div className="container">
          <h2>Sign up</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={this.handleChange}
              required
              value={this.state.username}
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
              required
              value={this.state.email}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
              required
              value={this.state.password}
            />
            <button type="submit">Sign up</button>
          </form>
        </div>
      </section>
    );
  }
}

export default SignUp;
