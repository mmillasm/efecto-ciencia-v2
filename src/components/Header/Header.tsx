import Link from "next/link";
import Icon from "@/components/Icon";
import styles from "./Header.module.css";

const links = ["Inicio", "Opinión", "Actualidad", "Sobre nosotros"];

export default function Header() {
  return (
    <header className={styles.nav}>
      <div className={`container ${styles.navInner}`}>
        <Link href="/" className={styles.brand}>
          Efecto<span className={styles.brandAccent}> Ciencia</span>
        </Link>
        <nav className={styles.primaryNav}>
          {links.map((l, i) => (
            <Link key={l} href="#" className={i === 0 ? styles.active : ""}>
              {l}
            </Link>
          ))}
        </nav>
        <div className={styles.navRight}>
          <button className="iconBtn" aria-label="Buscar">
            <Icon name="search" />
          </button>
          <a
            href="https://www.instagram.com/efectociencia/"
            target="_blank"
            rel="noopener noreferrer"
            className="iconBtn"
            aria-label="Instagram"
          >
            <Icon name="instagram" />
          </a>
        </div>
      </div>
    </header>
  );
}
