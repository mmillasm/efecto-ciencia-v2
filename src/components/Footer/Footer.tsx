import Link from "next/link";
import Icon from "@/components/Icon";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div>
            <div className={styles.footerBrand}>
              Efecto<span className={styles.footerBrandAccent}> Ciencia</span>
            </div>
            <p className={styles.footerDesc}>
              Repositorio de noticias, columnas y entrevistas sobre ciencia, tecnología e innovación.
              Desde Chile, en formato digital.
            </p>
            <div className={styles.footerDomain}>efectociencia.cl</div>
          </div>
          <div>
            <h4>Menú</h4>
            <ul>
              {["Inicio", "Opinión", "Actualidad", "Sobre nosotros"].map((l) => (
                <li key={l}>
                  <Link href="#">{l}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Categorías</h4>
            <ul>
              {["Ciencia", "Tecnología", "Innovación", "Sociedad"].map((c) => (
                <li key={c}>
                  <Link href="#">{c}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Subcategorías</h4>
            <ul>
              {[
                "Inteligencia artificial",
                "Salud · Biología",
                "Medio ambiente",
                "Startups",
                "Educación · Políticas públicas",
              ].map((s) => (
                <li key={s}>
                  <Link href="#">{s}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span>© 2026 Efecto Ciencia · Todos los derechos reservados</span>
          <div className={styles.socials}>
            <a
              href="https://www.instagram.com/efectociencia/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="Instagram"
            >
              <Icon name="instagram" />
            </a>
            <a href="#" className={styles.socialBtn} aria-label="YouTube">
              <Icon name="youtube" />
            </a>
            <a href="#" className={styles.socialBtn} aria-label="Facebook">
              <Icon name="facebook" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
