import s from './index.module.scss'

const Footer = () => {
  return (
    <div className={s.Footer}>
      <section>
        <ul>
          <li>
            <h3>Markets</h3>
          </li>
          <li>Forex</li>
          <li>Cryptos</li>
          <li>Shares</li>
          <li>Indices</li>
        </ul>
        <ul>
          <li>
            <h3>Trading</h3>
          </li>
          <li>Platform</li>
          <li>Pricing</li>
          <li>PAMM</li>
          <li>FAQ</li>
        </ul>
        <ul>
          <li>
            <h3>Company</h3>
          </li>
          <li>Why Us</li>
          <li>Contact Us</li>
        </ul>
        <ul>
          <li>
            <h3>Account</h3>
          </li>
          <li>Login</li>
          <li>Sign Up</li>
        </ul>
        <ul>
          <li>
            <h3>Legal</h3>
          </li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </section>
      <hr />
      <p>
        This website can be accessed worldwide however the information on the
        website is related to secure Pro Market A/S and is not specific to any
        entity of secure Pro Market. All clients will directly engage with
        secure Pro Market A/S and all client agreements will be entered into
        with secure Pro Market A/S .
        <br />
        <br />
        Forex and CFDs are leveraged products and can result in losses that
        exceed your deposits. Please ensure you fully understand all of the
        risks. Contracts for Difference (&quot;CFDs&quot;) are leveraged
        products and carry a significant risk of loss to your capital, as prices
        may move rapidly against you and you may be required to make further
        payments to keep any trades open. These products are not suitable for
        all clients, therefore please ensure you fully understand the risks and
        seek independent advice.
        <br /> <br />
        Apple and the Apple logo are trademarks of Apple Inc, registered in the
        US and other countries and regions. App Store is a service mark of Apple
        Inc. Google Play and the Google Play logo are trademarks of Google LLC.
      </p>
      <hr />
      <br />
      <small>Copyright &copy; All Rights Reserved</small>
    </div>
  );
}

export default Footer