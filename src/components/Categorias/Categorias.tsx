import Link from "next/link";
import Icon from "@/components/Icon";
import styles from "./Categorias.module.css";

const cats = [
  { name: "Ciencia", num: "01" },
  { name: "Tecnología", num: "02" },
  { name: "Innovación", num: "03" },
  { name: "Sociedad", num: "04" },
];

const subs = [
  "Biología", "Salud", "Medio ambiente", "Química", "Física",
  "Inteligencia artificial", "Transformación digital", "Software", "Datos",
  "Emprendimiento científico", "Transferencia tecnológica", "Startups",
  "Vinculación universidad-empresa", "Educación", "Políticas públicas",
  "Cultura científica", "Impacto social",
];

export default function Categorias() {
  return (
    <section className={styles.catsSection}>
      <div className="container">
        <div className="sectionHead" style={{ borderBottomColor: "#dfe2eb" }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 14 }}>
              Sección 03
            </div>
            <h2>
              Explora por <span className="accent">categoría</span>.
            </h2>
          </div>
          <div className="sectionHeadRight">
            <span>04 categorías · 17 subcategorías</span>
          </div>
        </div>
        <div className={styles.catsGrid}>
          {cats.map((c) => (
            <Link key={c.name} href="#" className={styles.catCard}>
              <div className={styles.catNum}>{c.num}</div>
              <div className={styles.catName}>{c.name}</div>
              <div className={styles.catArrow}>
                <Icon name="arrow-up" size={18} />
              </div>
            </Link>
          ))}
        </div>
        <div className={styles.subsRow}>
          {subs.map((s) => (
            <Link key={s} href="#" className={styles.subChip}>
              {s}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
