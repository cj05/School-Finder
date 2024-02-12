import styles from './aboutmeComponent.module.scss';
import WindowCookie from '../../assets/Windows/cookie'
import WindowNotest from '../../assets/Windows/notest'
import Test from '../../assets/Components/TestChoices/cards'
import Footer from '../../assets/Layout/Layout/Footer'
import Navbar from '../../assets/Layout/Layout/Layout'
const about = () => {
  return (
    <div className={styles.layout}>
      Testing Components
      <div className="bg-blue">---</div>
      <div className="bg-blue"><WindowCookie/></div>
      <div className="bg-blue">---</div>
      <div className="bg-blue"><WindowNotest/></div>
      <div className="bg-blue">---</div>
      <div className="bg-blue"><Test/></div>
      <div className="bg-blue">---</div>
    </div>
  );
};

export default about;