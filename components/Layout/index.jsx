import Image from "next/image";
import s from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dashboard_nav from "../Dashboard_nav";
import Sidebar from "../Dashboard_Sidebar";
const Layout = ({ children }) => {
  return (
    <div className={s.Layout}>
      <Sidebar />
      <div>
        <Dashboard_nav />
        <div className={s.view}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
