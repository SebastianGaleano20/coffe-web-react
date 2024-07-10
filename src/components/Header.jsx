import '../styles/main.css';
import { GiCoffeeBeans } from "react-icons/gi";
import styles from '../styles/styles.module.css';

function Header() {
  return (
    <header>
      <div className="logo-container">
        <a href="#">
          <img
            className={styles.logo}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ80A1T7fyKwl7SuoXkL1oVZaC9j37jh1bPhnQMVVHQjBC1p5ak2U2ddoR9Ba9sfF2Ickc&usqp=CAU"
            alt="logo"
          />
        </a>
      </div>
      <h3><GiCoffeeBeans/> Bienvenido a Red cafe <GiCoffeeBeans/></h3>
    </header>
  );
}

export default Header;
