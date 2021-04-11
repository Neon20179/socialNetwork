import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { LoginProps } from "./loginTypes";

const initialState = {
  username: "" as string,
  password: "" as string
};

type InitialStateType = typeof initialState;

class Login extends Component<LoginProps, InitialStateType> {
  constructor(props: LoginProps) {
    super(props);
    this.state = initialState;
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.login(this.state);
    this.setState(initialState);
  };

  render() {
    if (this.props.isAuth) {
      return <Redirect to="/feed/" />;
    }

    return (
      <section className="login-page">
        <div className="container">
          <h2>Log in</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder="Username or email"
              type="text"
              value={this.state.username}
              name="username"
              onChange={this.handleChange}
              required
            />
            <input
              placeholder="Password"
              type="password"
              value={this.state.password}
              name="password"
              onChange={this.handleChange}
              required
            />
            <button type="submit">Enter Network</button>
          </form>
        </div>
      </section>
    );
  }
}

export default Login;
