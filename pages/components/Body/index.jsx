import Image from "next/image";
import s from "./index.module.scss";
import fold1 from "../../../public/sed.webp";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const Body = () => {
  return (
    <>
      <section className={s.Fold1}>
        <span>
          <h2>Trade With Low Commision And Tight Spreads</h2>
          <p>
            With secure Pro Market you get a transparent pricing structure and a
            secure and regulated trading environment. As an active trader you
            can also qualify for lower fees and extra benefits.
          </p>
          <Link href="/">See our packages</Link>
        </span>
        <Image src={fold1} alt="" />
      </section>
      <section className={s.Fold2}>
        <h2>INDUSTRY LEADING PRICES</h2>
        <p>
          Get ultra-competitive spreads and commissions across all asset
          classes. Receive even better rates as your volume increases.
        </p>
        <div className={s.prices}>
          <div data-title="FX" className={s.card}>
            <p>Spread as low as</p>
            <span>
              {" "}
              <h3>0.2</h3>
              <p>pip</p>
            </span>
            <p>
              Trade 182 FX spot pairs and 140 forwards across majors, minors,
              exotics and metals
            </p>
          </div>
          <div data-title="Crypto" className={s.card}>
            <p>Trade From</p>
            <span>
              {" "}
              <h3>0.4</h3>
              <p>on $500</p>
            </span>
            <p>
              Trade and invest confidently in top performing Cryptocurrencies
              with our timely Trading signals that ensure your profitability
              from day one.
            </p>
          </div>
          <div data-title="Stocks" className={s.card}>
            <p>commissions from</p>
            <span>
              {" "}
              <h3>$3</h3>
              <p>on all stocks</p>
            </span>
            <p>
              Access 19,000+ stocks across core and emerging markets on 36
              exchanges worldwide.
            </p>
          </div>
          <div data-title="Real Estate" className={s.card}>
            <p>Procure for as low as</p>
            <span>
              {" "}
              <h3>$100</h3>
              <p>per slot</p>
            </span>
            <p>
              Simplified Real Estate investment for relatively small amounts
              through our crowdfunding model..
            </p>
          </div>
        </div>
        <div className={s.start}>
          <p>With the little you have tried, join now!</p>
          <Link href="/signup">Start Trading</Link>
        </div>
        <div className={s.details}>
          <span>
            <FontAwesomeIcon icon={faHeadphones} />
            <p>AWARD WINNING SUPPORT</p>
          </span>
          <span>
            <FontAwesomeIcon icon={faBuildingColumns} />
            <p>REGULATED BY THE GSE,USA</p>
          </span>
          <span>
            <FontAwesomeIcon icon={faClock} />
            <p>30 YEARS EXPERIENCE</p>
          </span>
        </div>
      </section>
      <section className={s.Fold3}>
        <h2>COMPLETE PACKAGES FOR EVERY TRADER</h2>
        <div className={s.pkgs}>
          <div className={s.card}>
            <h3>
              MINIMUM FUNDING <mark>$1000</mark>
            </h3>
            <p>Starter</p>
            <hr />
            <ul>
              <li>
                {" "}
                <FontAwesomeIcon icon={faCheckCircle} /> 10% Deposit Bonus
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faCheckCircle} /> Negative Balance
                Protection
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faCheckCircle} /> Scalping
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faCheckCircle} /> Financial Plan
              </li>
            </ul>

            <Link href="/signup">Open An Account</Link>
          </div>
          <div className={s.card}>
            {" "}
            <h3>
              MINIMUM FUNDING <mark>$5000</mark>
            </h3>
            <p>Classic</p>
            <hr />
            <ul>
              <li>
                {" "}
                <FontAwesomeIcon icon={faCheckCircle} /> 15% Deposit Bonus
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} /> Negative Balance
                Protection
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} /> Scalping
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} /> Financial Plan
              </li>
            </ul>
            <Link href="/signup">Open An Account</Link>
          </div>
          <div className={s.card}>
            {" "}
            <h3>
              MINIMUM FUNDING <mark>$10000</mark>
            </h3>
            <p>Pro</p>
            <hr />
            <ul>
              <li>
                {" "}
                <FontAwesomeIcon icon={faCheckCircle} /> 25% Deposit Bonus
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faCheckCircle} /> Negative Balance
                Protection
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faCheckCircle} /> Scalping
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faCheckCircle} /> Financial Plan
              </li>
            </ul>
            <Link href="/signup">Open An Account</Link>
          </div>
          <div className={s.card}>
            {" "}
            <h3>
              MINIMUM FUNDING <mark>$50000</mark>
            </h3>
            <p>Executive</p>
            <hr />
            <ul>
              <li>
                {" "}
                <FontAwesomeIcon icon={faCheckCircle} /> 35% Deposit Bonus
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faCheckCircle} /> Negative Balance
                Protection
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faCheckCircle} /> Scalping
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faCheckCircle} /> Financial Plan
              </li>
            </ul>
            <Link href="/signup">Open An Account</Link>
          </div>
        </div>
      </section>
      <section className={s.Fold4}>
        <div>
          <h2>900,000+</h2>
          <p>Daily trades</p>
        </div>
        <hr />
        <div>
          {" "}
          <h2>750,000+</h2>
          <p>Clients</p>
        </div>
        <hr />
        <div>
          {" "}
          <h2>20 billion+</h2>
          <p>USD daily trade volume</p>
        </div>
        <hr />
        <div>
          {" "}
          <h2>95 billion+</h2>
          <p>USD assets under management</p>
        </div>
      </section>
    </>
  );
};

export default Body;
