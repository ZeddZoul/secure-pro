import Image from "next/image";
import Link from "next/link";
import s from "./index.module.scss";
import award from "@/public/award.svg";
import fold1 from "@/public/sed.webp";
import mt4 from "@/public/latest.jpg";
import l1 from "@/public/1.png";
import s1 from "@/public/1_2.svg";
import l2 from "@/public/2.png";
import s2 from "@/public/2_2.svg";
import l3 from "@/public/3.png";
import s3 from "@/public/3_2.svg";
import l4 from "@/public/4.png";
import s4 from "@/public/4_2.svg"
import l5 from "@/public/5.png";
import l6 from "@/public/6.png";
import t1 from "@/public/team1.jpg";
import t2 from "@/public/team2.jpg";
import t3 from "@/public/team3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faShield } from "@fortawesome/free-solid-svg-icons";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import { faUsersLine } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons"; 
import { faStar } from "@fortawesome/free-solid-svg-icons"; 
import { useEffect, useRef } from "react";

const Body = () => {

  const ref = useRef([]);
     const reflist = ref.current;
     //push elements into the ref array
     const take = (el) => {
       el && !reflist.includes(el) ? reflist.push(el) : null;
     };
  useEffect(
    () => {
        //create observer
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            entry.isIntersecting
              ? entry.target.classList.add(`${s.animate}`)
              // : entry.target.classList.remove(`${s.animate}`); causing glitch
              :null
          });
        });
        //tell observer to observe each el on the reflist
        reflist.forEach((el) => {
          observer.observe(el);
        });
      }
      , [reflist]
      )


  return (
    <>
      <section className={s.Fold1}>
        <span ref={take}>
          <h2>Trade With Low Commision And Tight Spreads</h2>
          <p>
            With secure Pro Market you get a transparent pricing structure and a
            secure and regulated trading environment. As an active trader you
            can also qualify for lower fees and extra benefits.
          </p>
          <Link href="/">See our packages</Link>
        </span>
        <Image ref={take} src={fold1} alt="" />
      </section>
      <section className={s.Fold2}>
        <h2>INDUSTRY LEADING PRICES</h2>
        <p>
          Get ultra-competitive spreads and commissions across all asset
          classes. Receive even better rates as your volume increases.
        </p>
        <div className={s.prices}>
          <div ref={take} data-title="FX" className={s.card}>
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
          <div ref={take} data-title="Crypto" className={s.card}>
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
          <div ref={take} data-title="Stocks" className={s.card}>
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
          <div ref={take} data-title="Real Estate" className={s.card}>
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
        <div ref={take} className={s.start}>
          <p>With the little you have tried, join now!</p>
          <Link href="/auth/signup">Start Trading</Link>
        </div>
        <div ref={take} className={s.details}>
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
          <div ref={take}  className={s.card}>
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

            <Link href="/auth/signup">Open An Account</Link>
          </div>
          <div ref={take} className={s.card}>
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
            <Link href="/auth/signup">Open An Account</Link>
          </div>
          <div ref={take} className={s.card}>
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
            <Link href="/auth/signup">Open An Account</Link>
          </div>
          <div ref={take} className={s.card}>
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
            <Link href="/auth/signup">Open An Account</Link>
          </div>
        </div>
      </section>
      <section className={s.Fold4}>
        <div ref={take}>
          <h2>900,000+</h2>
          <p>Daily trades</p>
        </div>
        <hr />
        <div ref={take}>
          {" "}
          <h2>750,000+</h2>
          <p>Clients</p>
        </div>
        <hr />
        <div ref={take}>
          {" "}
          <h2>20 billion+</h2>
          <p>USD daily trade volume</p>
        </div>
        <hr />
        <div ref={take}>
          {" "}
          <h2>95 billion+</h2>
          <p>USD assets under management</p>
        </div>
      </section>
      <section className={s.Fold5}>
        <h2 ref={take}>SWITCH TO SECURE PRO MARKET</h2>
        <p ref={take}>
          At secure Pro Market we work hard to enhance your trading experience.
          As a global, 5 star rated broker, our client&quot;s satisfaction is in
          the center of our focus.
        </p>
        <div>
          <div ref={take} className={s.card}>
            <FontAwesomeIcon icon={faBriefcase} />
            <h3>2100+ INSTRUMENTS</h3>
            <p>
              Wide range of global markets, including Forex, Indices,
              Commodities, ETFs and more.
            </p>
          </div>
          <div ref={take} className={s.card}>
            {" "}
            <FontAwesomeIcon icon={faShield} />
            <h3>SAFE & SECURE</h3>
            <p>
              Secure Pro Market is regulated by the world&quot;s biggest
              supervision authorities, including the Financial Conduct Authority
            </p>
          </div>
          <div ref={take} className={s.card}>
            <FontAwesomeIcon icon={faBookOpenReader} />
            <h3>COMPREHENSIVE EDUCATION</h3>
            <p>
              Make use of our extensive video library and get to know more about
              trading.
            </p>
          </div>
          <div ref={take} className={s.card}>
            <FontAwesomeIcon icon={faMoneyBill} />
            <h3>INNOVATIVE PLATFORM</h3>
            <p>
              We are constantly improving our trading platform to make it the
              best on the market.
            </p>
          </div>
          <div ref={take} className={s.card}>
            <FontAwesomeIcon icon={faUsersLine} />
            <h3>495,000+ CUSTOMERS</h3>
            <p>
              With years of activity in the financial markets, secure Pro Market
              has gained thousands of customers.
            </p>
          </div>
          <div ref={take} className={s.card}>
            <FontAwesomeIcon icon={faComment} />
            <h3>FAST & HIGHLY QUALIFIED SUPPORT</h3>
            <p>
              Our multilingual customer support team is ready to help you - 24h
              hours a day.
            </p>
          </div>
        </div>
      </section>

      <section className={s.Fold6}>
        <p ref={take}>DEPOSIT WITH CRYPTO</p>
        <h3 ref={take}>WE ACCEPT CRYPTO DEPOSITS</h3>
        <p ref={take}>
          DEPOSIT, WITHDRAW AND HOLD YOUR BALANCE IN BITCOIN, ETHEREUM
        </p>

        <Link ref={take} href="/auth/signup">
          Get started
        </Link>
      </section>

      <section className={s.Fold7}>
        <div ref={take}>
          <h2>Free Demo And Live MT4 Accounts</h2>
          <p>
            Instant market access and endless possibilities for trading,
            analysis and automation. Metaquotes 5 is an evolution of MT4 with
            additional features that supercharge your trading.
          </p>
          <Link href="/auth/signup">Open An Account</Link>
        </div>
        <Image ref={take} src={mt4} alt=" " />
      </section>

      <section className={s.Fold8}>
        <h2>WE ARE TRUSTED</h2>
        <div>
          <div ref={take} className={s.card}>
            <Image src={l1} alt="" />
            <h2>8.9</h2>
          </div>
          <div ref={take} className={s.card}>
            <Image src={l2} alt="" />
            <h2>7.9</h2>
          </div>
          <div ref={take} className={s.card}>
            <Image src={l3} alt="" />
            <h2>9.0</h2>
          </div>
          <div ref={take} className={s.card}>
            <Image src={l4} alt="" />
            <h2>7.4</h2>
          </div>
          <div ref={take} className={s.card}>
            <Image src={l5} alt="" />
            <h2>8.0</h2>
          </div>
          <div ref={take} className={s.card}>
            <Image src={l6} alt="" />
            <h2>8.7</h2>
          </div>
        </div>
      </section>

      <section className={s.Fold9}>
        <div ref={take} className={s.card}>
          <div>
            <Image src={t1} alt="" />
            <span>
              <h3>SCOTT SMITH</h3>
              <span>
                {" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />
              </span>
            </span>
          </div>
          <p>
            I am an engineer in Washington DC when an account manager KLOE
            AURORA brought this opportunity to me I just said casually to invest
            with $500 but my story today is on a premium plan.
          </p>
        </div>
        <div ref={take} className={s.card}>
          <div>
            <Image src={t2} alt="" />
            <span>
              <h3>ALEX GYSON</h3>
              <span>
                {" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />
              </span>
            </span>
          </div>
          <p>
            I have only been a member for a few months and i have already earned
            a decent amount of money. Finally a real and honest company that
            does what it says. Thank you so much for this great opportunity!
          </p>
        </div>
        <div ref={take} className={s.card}>
          <div>
            <Image src={t3} alt="" />
            <span>
              <h3>RUKKY SANDERS</h3>
              <span>
                {" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />
              </span>
            </span>
          </div>
          <p>
            Secure Pro Market runs a quick and reliable system. It feels great
            to know that I Can always trust their support system to come through
            for me. Their response speed is prompt and the delivery precise to
            the last detail.
          </p>
        </div>
      </section>

      <section className={s.Fold10}>
        <div>
          <h2>Trusted for more than 7 years</h2>
          <p>
            Secure Pro Market is an online Forex and cryptocurrency STP broker
            providing CFD trading on hundreds of assets and optimal trading
            conditions within the award-winning MT4 platform. secure Pro Market
            offers deep liquidity, generous leverage up to 1:500, and some of
            the best spreads in the industry. As part of our commitment to our
            client’s satisfaction, we offer 24/7 live customer service, charge
            no deposit or withdrawal fees, and process withdrawals within
            30-minutes or less. We feel that these, along with many other
            advantages, help to set us apart from the rest.
          </p>

          <h3>Multi-award winner</h3>
          <hr />
          <div>
            <span ref={take}>
              <Image src={award} alt="" />
              <span>
                <h4>Best CFD Broker</h4>
                <p>TradeON Summit 2020</p>
              </span>
            </span>
            <span ref={take}>
              <Image src={award} alt="" />
              <span>
                <h4>Best CFD Broker</h4>
                <p>TradeON Summit 2020</p>
              </span>
            </span>
            <span ref={take}>
              <Image src={award} alt="" />
              <span>
                <h4>Best CFD Broker</h4>
                <p>TradeON Summit 2020</p>
              </span>
            </span>
          </div>
        </div>
      </section>
      <div className={s.sponsors}>
        <p>As seen on </p>
      </div>
      <section className={s.Fold11}>
        <h2>FOUR STEPS TO START TRADING</h2>
        <div className={s.steps}>
          <div ref={take} className={s.card}>
            <Image src={s1} alt="" />
            <h4>Registration</h4>
            <p>Open your live trading account after registration</p>
          </div>
          <div ref={take} className={s.card}>
            <Image src={s2} alt="" />
            <h4>Verify</h4>
            <p>Upload your documents to activate your account</p>
          </div>
          <div ref={take} className={s.card}>
            <Image src={s3} alt="" />
            <h4>Fund</h4>
            <p>Log in to your account and make a deposit</p>
          </div>
          <div ref={take} className={s.card}>
            <Image src={s4} alt="" />
            <h4>Trade</h4>
            <p>Start trading using over 250 different trading tools</p>
          </div>
        </div>
        <h2>Open Your Account</h2>
        <p>
          Connect with over 450,000 investors in the world’s leading FX Broker
        </p>
        <Link href="/auth/signup">Start Trade</Link>
      </section>
    </>
  );
};

export default Body;
