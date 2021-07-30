import React, { FC, ChangeEvent } from "react";
import { Redirect } from "react-router-dom";
import { useInput } from "@/hooks";
import { LoginData } from "@/typing/entities";

interface LoginProps {
  isAuth: boolean;
  login: (payload: LoginData) => void;
}

const Login: FC<LoginProps> = ({ isAuth, login }) => {
  const username = useInput();
  const password = useInput();

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const payload = { username: username.value, password: password.value };
    login(payload);
  };

  if (isAuth) {
    return <Redirect to="/feed/" />;
  }

  return (
    <section className="login-page">
      <div className="container">
        <h2>Log in</h2>
        <form onSubmit={handleSubmit}>
          <input
            {...username}
            placeholder="Username or email"
            type="text"
            name="username"
            required
          />
          <input
            {...password}
            placeholder="Password"
            type="password"
            name="password"
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
