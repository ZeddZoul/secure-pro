import s from "./index.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png"
const Nav = () => {
  return (
      <header className={s.Header}>
        <Image src={logo} alt="" placeholder="blur" />
        <nav className={`${s.Nav}`}>
          <Link href="/">Home</Link>
          <Link href="/">Market</Link>
          <Link href="/">Trading</Link>
          <Link href="/">Account Types</Link>
          <Link className={`${s.btn} ${s.login}`} href="/login">
            Log in
          </Link>
          <Link className={`${s.btn} ${s.signup}`} href="/signup">
            Sign up
          </Link>
        </nav>
        <FontAwesomeIcon className={s.menubar} icon={faBars} />
      </header>
  );
};

export default Nav;
