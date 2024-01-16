
import styles from './AccountComponent.module.scss';
import { Image } from 'react-bootstrap';
const Account = () => {
    const getAvatar = () => {
        const fallback = "/img/fallbackAvatar.png"; 
        return fallback;
    }
  return (
    <div className={styles.right}>
        Your Account
        <Image src={getAvatar()} style={{height:20, width:20}}/>
    </div>
  )
};

export default Account;