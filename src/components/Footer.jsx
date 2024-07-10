import styles from '../styles/styles.module.css'
import '../styles/main.css'
import { FaInstagram, FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMarkEmailRead, MdOutlineMapsHomeWork } from "react-icons/md";


export default function Footer() {
    return (
        <>
            <footer>
                <div className={styles.contact}>
                    <h4>Contacto</h4>
                    <ul>
                        <li><a href="#"><FaInstagram />Instagram</a></li>
                        <li><a href="#"><FaFacebookF />Facebook</a></li>
                        <li><a href="#"><FaPhoneAlt />Telefono</a></li>
                        <li><a href="#"><MdOutlineMarkEmailRead />Email</a></li>
                        <li><a href="#"><MdOutlineMapsHomeWork />Direccion</a></li>
                    </ul>
                </div>
                <p>&copy; <span>2024</span> The Red Coffe. <br /> Todos los derechos reservados.</p>
            </footer>
        </>
    )

}