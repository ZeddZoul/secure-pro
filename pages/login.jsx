import Link from "next/link";
import { useState } from "react";
import s from "./form.module.scss";

const Login = () => {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const update = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={s.BG}>
      <div className={s.FormWrapper}>
        <h1>Logo</h1>
        <h2>Welcome</h2>
        <p>Please sign-in to your account</p>
        <form action="">
          <span>
            {" "}
            <label htmlFor="email">Email/Username</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formValues.email}
              onChange={update}
            />
          </span>
          <span>
            <span>
              {" "}
              <label htmlFor="password">Password</label>
              <Link href="/forgot-password">Forgot password?</Link>
            </span>
            <input
              type="password"
              name="password"
              id="password"
              value={formValues.password}
              onChange={update}
            />
          </span>
          <span id={s.check}>
            {" "}
            <input
              type="checkbox"
              name="remember"
              value="remember"
              id="remember"
            />{" "}
            <label htmlFor="remember">Remember Me</label>
          </span>
          <input type="submit" value="LOG IN" />
        </form>
      </div>
    </div>
  );
};

export default Login;
