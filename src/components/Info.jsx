import styles from '../styles/styles.module.css';
import { GiCoffeeBeans } from "react-icons/gi";

function Info() {
  return (   
      <section className={styles.info}>
        <h1 className={styles.title}>The Red Cafe</h1>
        <article className={styles.container}>
          <p>
            Bienvenido a nuestra cafetería de especialidad.
            <br />
            En nuestro acogedor rincón, cada grano se
            selecciona con cuidado y se tuesta con pasión para ofrecerte una
            experiencia única en cada sorbo y cada bebida que
            se prepara con precisión y dedicación para deleitar tu paladar.
          </p>
        </article>
      </section>
  );
}

export default Info;
