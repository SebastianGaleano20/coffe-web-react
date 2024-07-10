import styles from '../styles/styles.module.css';
import { GiCoffeeBeans } from "react-icons/gi";

function Info() {
  return (
    <section>
      <article className={styles.info}>
        <h1><GiCoffeeBeans/> The Red Cafe <GiCoffeeBeans/></h1>
        <p>
          Bienvenido a nuestra cafetería de especialidad, donde el arte del café
          cobra vida con cada taza. En nuestro acogedor rincón, cada grano se
          selecciona con cuidado y se tuesta con pasión para ofrecerte una
          experiencia única en cada sorbo. Desde el aroma tentador de nuestro
          espresso hasta la suavidad de nuestros lattes artesanales, cada bebida
          se prepara con precisión y dedicación para deleitar tu paladar. Únete
          a nosotros y descubre un lugar donde el café se convierte en una
          experiencia extraordinaria.
        </p>
      </article>
    </section>
  );
}

export default Info;
