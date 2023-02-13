import Image from "next/image";
import logo from "@/public/smalllogo.png";
import s from "./index.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faCashRegister } from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
  
  return (
    <ul className={s.Sidebar}>
      <Link href="/dashboard">
        <Image src={logo} height={35} weight={35} alt="" />
      </Link>
      <Link href="/dashboard">
        <FontAwesomeIcon icon={faHome} />
        <p>Dashboard</p>
      </Link>
      <Link href="/dashboard/deposit">
        <FontAwesomeIcon icon={faMoneyBill} />
        <p>Deposit</p>
      </Link>
      <Link href="/dashboard/withdraw">
        <FontAwesomeIcon icon={faMoneyBillTransfer} />
        <p>Withdraw</p>
      </Link>
      <Link href="/dashboard/referraL">
        <FontAwesomeIcon icon={faUserGroup} />
        <p>Referral</p>
      </Link>
      <Link href="/dashboard/transactions">
        <FontAwesomeIcon icon={faCashRegister} />
        <p>Transaction History</p>
      </Link>
      <Link href="/">
        <FontAwesomeIcon icon={faDoorOpen} />
        <p>Logout</p>
      </Link>
    </ul>
  );
};

export default Sidebar;
