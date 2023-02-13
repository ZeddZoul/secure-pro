import Image from "next/image";
import s from "./index.module.scss";
const Sidebar = () => {
  return (
    <ul className={s.Sidebar}>
      <Image />
      <li>
        <p>Dashboard</p>
      </li>
      <li>
        <p>Deposit</p>
      </li>
      <li>
        <p>Withdraw</p>
      </li>
      <li>
        <p>Referral</p>
      </li>
      <li>
        <p>Transaction History</p>
      </li>
    </ul>
  );
};

export default Sidebar;
