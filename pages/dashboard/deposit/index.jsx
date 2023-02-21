import Layout from '@/components/Layout'
import Image from 'next/image'
import s from './index.module.scss'
const Deposit = () => {
  return (
    <div className={s.Wrapper}>
      <Image src={logo} alt="" height={80} />
      <h2>Deposit Funds</h2>
      <p>Funds are to be deposited to the providus account below. <br /> Click the Done button when deposit is done</p>
      <form action="" className={s.Form}>
        <input type="text" placeholder='Amount' />
        <input type="text" readOnly placeholder='Deposit Address'/>
      </form>
    </div>
  )
}
Deposit.getLayout = Layout
export default Deposit;