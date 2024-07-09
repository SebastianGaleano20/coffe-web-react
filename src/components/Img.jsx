import styles from '../styles/styles.module.css';

function Img() {
  return (
    <>
    <article className={styles.imgContainer}>
      <h3>Arte latte y mucho mas</h3>
      <p>Veni a disfrutar del mejor cafe con su presentacion tan peculiar y brillante.</p>
      <img
        className={styles.img}
        src="https://http2.mlstatic.com/D_NQ_NP_606269-MLA54879022793_042023-O.webp"
        alt="taza de cafe"
      />
      <img className={styles.img} src="https://images.creativefabrica.com/products/previews/2023/07/10/sdGHlLnpt/2SNtAOPslienfpHQ5TzhkZvcT1o-mobile.jpg" alt="artelatte" />
    </article>
    </>
  );
}

export default Img;
