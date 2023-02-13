import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import s from "./form.module.scss";

const Signup = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    username: "",
    password: "",
    confpassword: "",
  });
  const update = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={s.BG}>
      <div className={s.FormWrapper}>
        <Link href="/">
          <Image src="" alt="" height={100} weight={100} />
        </Link>
        <h2>Welcome</h2>
        <p>Please sign-in to your account</p>
        <form action="">
          <span>
            {" "}
            <label htmlFor="username">Username</label>
            <input
              required
              type="text"
              name="username"
              id="username"
              onChange={update}
              value={formValues.username}
            />
          </span>
          <span>
            {" "}
            <label htmlFor="email">Email</label>
            <input
              required
              type="email"
              name="email"
              id="email"
              onChange={update}
              value={formValues.email}
            />
          </span>
          <span>
            <label htmlFor="password">Password</label>
            <input
              required
              type="password"
              name="password"
              id="password"
              onChange={update}
              value={formValues.password}
            />
          </span>
          <span>
            <label htmlFor="confpassword">Confirm password</label>
            <input
              required
              type="password"
              name="confpassword"
              id="confpassword"
              onChange={update}
              value={formValues.confpassword}
            />
          </span>
          <span id={s.check}>
            {" "}
            <input
              type="checkbox"
              name="accept"
              value="accept"
              id="accept"
            />{" "}
            <label htmlFor="accept">
              I agree to the <a href="#d">terms of service</a> and{" "}
              <a href="#">Privacy Policy</a>
            </label>
          </span>
          <input type="submit" value="SIGN UP" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
