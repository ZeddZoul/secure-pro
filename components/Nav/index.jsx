import s from "./index.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRef } from "react";
const Nav = () => {
  const nav = useRef()
  let el = nav.current
  console.log(el);
  const menu = () => {
    nav.current.classList.toggle(`${s.showMenu}`);
  }
  return (
    <header className={s.Header}>
      {/* <Image src={#} alt="LOGO" placeholder="blur" /> */}
      <p>Logo</p>
      <nav ref={nav} className={`${s.Nav}`}>
        <Link href="/">Home</Link>
        <Link href="/">Market</Link>
        <Link href="/">Trading</Link>
        <Link href="/">Account Types</Link>
        <Link className={`${s.btn} ${s.login}`} href="/auth/login">
          Log in
        </Link>
        <Link className={`${s.btn} ${s.signup}`} href="/auth/signup">
          Sign up
        </Link>
      </nav>
      <FontAwesomeIcon onClick={menu} className={s.menubar} icon={faBars} />
    </header>
  );
};

export default Nav;
