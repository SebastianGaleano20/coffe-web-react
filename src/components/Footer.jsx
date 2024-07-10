import styles from '../styles/styles.module.css'
import '../styles/main.css'
export default function Footer() {
    return (
        <>
            <footer>
                <div className="logo-container">
                    <img
                        className={styles.logo}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ80A1T7fyKwl7SuoXkL1oVZaC9j37jh1bPhnQMVVHQjBC1p5ak2U2ddoR9Ba9sfF2Ickc&usqp=CAU"
                        alt="logo"
                    />
                </div>
                <div>
                    <h3>Contacto</h3>
                    <ul>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Telefono</li>
                        <li>Email</li>
                        <li>Direccion</li>
                    </ul>
                </div>
                <p>&copy; <span>2024</span> The Red Coffe. Todos los derechos reservados.</p>
            </footer>
        </>
    )

}