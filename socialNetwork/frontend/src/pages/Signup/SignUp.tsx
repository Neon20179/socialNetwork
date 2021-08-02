import React, { FC, ChangeEvent } from "react";
import { Redirect } from "react-router-dom";
import { useInput } from "@/hooks";
import { SingUpData } from "@/typing/entities";

interface SignUpProps {
  isAuth: boolean;
  signUp: (payload: SingUpData) => void;
}

const SignUp: FC<SignUpProps> = ({ isAuth, signUp }) => {
  const {
    value: usernameValue,
    bind: usernameBind,
    reset: usernameReset
  } = useInput();
  const { value: emailValue, bind: emailBind, reset: emailReset } = useInput();
  const {
    value: passwordValue,
    bind: passwordBind,
    reset: passwordReset
  } = useInput();

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const payload = {
      username: usernameValue,
      email: emailValue,
      password: passwordValue
    };

    signUp(payload);
    usernameReset();
    emailReset();
    passwordReset();
  };

  if (isAuth) return <Redirect to="/feed/" />;

  return (
    <section className="signup-page">
      <div className="container">
        <h2>Sign up</h2>
        <form onSubmit={handleSubmit}>
          <input
            {...usernameBind}
            type="text"
            name="username"
            placeholder="Username"
            required
          />
          <input
            {...emailBind}
            type="text"
            name="email"
            placeholder="Email"
            required
          />
          <input
            {...passwordBind}
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
