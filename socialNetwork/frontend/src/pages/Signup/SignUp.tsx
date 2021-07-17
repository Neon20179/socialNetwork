import React, { FC, ChangeEvent } from "react";
import { Redirect } from "react-router-dom";
import { useInput } from "@/hooks";
import { SingUpData } from "@/typing";

interface SignUpProps {
  isAuth: boolean;
  signUp: (payload: SingUpData) => void;
}

const SignUp: FC<SignUpProps> = ({ isAuth, signUp }) => {
  const username = useInput();
  const email = useInput();
  const password = useInput();

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const payload = {
      username: username.value,
      email: email.value,
      password: password.value
    };

    signUp(payload);
  };

  if (isAuth) return <Redirect to="/feed/" />;

  return (
    <section className="signup-page">
      <div className="container">
        <h2>Sign up</h2>
        <form onSubmit={handleSubmit}>
          <input
            {...username}
            type="text"
            name="username"
            placeholder="Username"
            required
          />
          <input
            {...email}
            type="text"
            name="email"
            placeholder="Email"
            required
          />
          <input
            {...password}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button type="submit">Sign up</button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
