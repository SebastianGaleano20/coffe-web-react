import styles from '../styles/styles.module.css';
import { GiCoffeeBeans } from "react-icons/gi";

function CoffeGallery() {
  return (
    <>
      <article className={styles.imgContainer}>
        <div>
          <h2><GiCoffeeBeans color='black'/> Arte latte y mucho mas</h2>
          <p>
            Veni a disfrutar del mejor cafe con su presentacion tan peculiar y brillante.
            En nuestra cafetería, el arte latte es más que una habilidad; es la expresión viva de nuestro compromiso con la excelencia y la creatividad. Nuestros talentosos baristas no solo dominan la técnica para crear impresionantes diseños en cada taza, sino que también infunden cada bebida con pasión y dedicación.
            Cada creación es una obra maestra, meticulosamente elaborada para deleitar tanto los ojos como el paladar de nuestros clientes. Descubre el arte del café en su máxima expresión en un ambiente acogedor y vibrante, donde cada visita es una experiencia única que te invita a disfrutar y compartir momentos especiales con cada sorbo.
            </p>
                    
        </div>
        <div className='img-container'>
          <img
            className={styles.img}
            src="https://img.freepik.com/fotos-premium/descanso-taza-roja-capuchino-hermoso-arte-latte-sobre-fondo-madera-vieja-latte-art-coffee-aroma-coffee-taza-ceramica-roja-copia-espacio-mesa-madera-cafeteria-restaurante_85672-1615.jpg"
            alt="artelatte1"
          />
          <img
            className={styles.img}
            src="https://static.vecteezy.com/system/resources/previews/013/425/770/non_2x/close-up-red-coffee-cup-with-heart-shape-latte-art-on-wood-table-free-photo.jpg"
            alt="artelatte2" />
          <img
            className={styles.img}
            src="https://img.freepik.com/fotos-premium/cafe-recien-hecho-arte-latte-taza-roja-cerca-laicos-plana_160315-1415.jpg"
            alt="artelatte3" />
          <img
            className={styles.img}
            src="https://img.freepik.com/fotos-premium/primer-plano-taza-roja-arte-latte-cafe-mano-mujer-cafeteria-cafeteria_34263-255.jpg"
            alt="artelatte4" />
        </div>
      </article>
    </>
  );
}

export default CoffeGallery;
