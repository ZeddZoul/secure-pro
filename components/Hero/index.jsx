import Link from "next/link";
import Nav from "../Nav";
import s from "./index.module.scss"
const Hero = () => {

  
  return (
    <div className={s.Hero}>
      <Nav />
      <div className={s.Banner}>
        <h1>TRADE SHARES AND FOREX WITH FINANCIAL THINKING </h1>
        <p>
          Access 40,000+ instruments – across asset classes – to trade, hedge
          and invest from a single account.
        </p>
        <Link href="/auth/signup" >Open An Account</Link>
      </div>
    </div>
  );
}

export default Hero