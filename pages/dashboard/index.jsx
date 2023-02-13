import Layout from "@/components/Layout";
import Link from "next/link";
import s from "./index.module.scss";

const Dashboard = () => {
  return (
    <Layout>
      <main className={s.overview}>
        <div className={`${s.card} ${s.welcome}`}>
          <p>Welcome 🎉 Wisdom</p>
          <small>You have earned</small>

          <h3>$ 0.00</h3>

          <Link href="#">Start Trading</Link>
        </div>
        <div className={`${s.card} ${s.earning}`}>
          <p>Earnings</p>
          <span>
            {" "}
            <p>
              This week <br /> $0
            </p>
            <p>
              0 <br /> Positive
            </p>
          </span>
          <small>0% Won since last week</small>
        </div>
        <div className={`${s.card} ${s.bal}`}>
          <h3>Balance</h3>
          <span>
            <h5>
              VALID THRU <br /> <br />
              08/22
            </h5>
            <h5>
              CARD HOLDER <br /> <br />
              Wisdom Adele
            </h5>
          </span>
        </div>
        <div className={s.card}>
          <div className={s.small_card}>
            <h2>0</h2>
            <p>Total Trades</p>
          </div>
          <div className={s.small_card}>
            <h2>0</h2>
            <p>Trades Won</p>
          </div>
          <div className={s.small_card}>
            <h2>0</h2>
            <p>Trades Drawn</p>
          </div>
          <div className={s.small_card}>
            <h2>0</h2>
            <p>Trades Lost</p>
          </div>
        </div>
        <div className={s.card}>
          <h3>Contracts</h3>
          <p>No results found</p>
        </div>
        <div className={s.card}>
          <h3>Refer & Earn</h3>
          <p>
            Refer your friends & Earn for 5% of every customer that complete 1
            deposit in the platform.
          </p>
          <Link href="#">Invite</Link>
        </div>
      </main>
    </Layout>
  );
};

export default Dashboard;
