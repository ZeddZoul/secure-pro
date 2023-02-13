import s from './index.module.scss'

const Dashboard_nav = () => {
  return (
    <nav className={s.Dashboard_nav}>
      <span>
        {" "}
        <p>WA</p> {/* user profile */}
        <span>
          <h3>Wisdom Adele</h3>
          <p>UD00080659512</p>
        </span>
      </span>
        <p>Practice: $0.00</p>
    </nav>
  );
}

export default Dashboard_nav