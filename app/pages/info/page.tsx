// PAGINA Informacion
import styles from "@/styles/styles.module.css";
import Link from "next/link";
export default function Info() {
  return (
    <div className={styles.infoPage}>
      <h1 className={styles.pageTitle}>Bienvenido a la Página de Ayuda....</h1>

      <div className={styles.imageContainer}>

        {/* Agrega más imágenes según sea necesario */}
      </div>

      <ul className={styles.pageList}>
        <li>Hola, estás en la página de Ayuda</li>
        <li>Otro elemento de la lista</li>
        {/* Puedes agregar más elementos a la lista */}
      </ul>

      
    </div>
  );
}
