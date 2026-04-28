import Link from "next/link";
import Icon from "@/components/Icon";
import styles from "./Opinion.module.css";

interface OpinionItem {
  cat: string;
  title: string;
  excerpt: string;
  author: string;
  role: string;
  glyph: string;
}

const opinionData: OpinionItem[] = [
  {
    cat: "Cultura científica",
    title: "La divulgación no es marketing: por qué Chile necesita más periodistas con bata",
    excerpt:
      "Tres décadas después del primer suplemento científico en castellano, seguimos confundiendo viralidad con comprensión pública. Una hipótesis incómoda para la sala de redacción.",
    author: "Dra. Andrea Saavedra",
    role: "Bióloga molecular · U. de Chile",
    glyph: "[ Foto · Autora ]",
  },
  {
    cat: "Políticas públicas",
    title: "Si el 1% del PIB en I+D es la meta, ¿de qué sirve sin transferencia tecnológica?",
    excerpt:
      "El presupuesto importa, pero la conversación pendiente es otra: cómo conectamos los laboratorios con las empresas que pueden escalar el conocimiento al territorio.",
    author: "Felipe Cárdenas",
    role: "Economista · Ex‑CORFO",
    glyph: "[ Foto · Autora ]",
  },
];

function OpinionCard({ c }: { c: OpinionItem }) {
  return (
    <Link href="#" className={styles.opinionCard}>
      <div className={styles.opinionPhoto}>
        <div className="phOverlay" />
        <div className="phGlyph">{c.glyph}</div>
      </div>
      <div className={styles.body}>
        <div className={styles.cat}>Opinión · {c.cat}</div>
        <h3>{c.title}</h3>
        <p>{c.excerpt}</p>
        <div className={styles.author}>
          <div>
            <div className={styles.authorName}>{c.author}</div>
            <div className={styles.authorRole}>{c.role}</div>
          </div>
          <div className={styles.readTime}>5 min</div>
        </div>
      </div>
      <div className={styles.arrow}>
        <Icon name="arrow-up" size={14} />
      </div>
    </Link>
  );
}

export default function Opinion() {
  return (
    <section className="block">
      <div className="container">
        <div className="sectionHead">
          <div>
            <div className="eyebrow" style={{ marginBottom: 14 }}>
              Sección 01
            </div>
            <h2>
              Columnas de <span className="accent">opinión</span>.
            </h2>
          </div>
          <div className="sectionHeadRight">
            <span>02 columnas</span>
            <Link href="#">Ver todas</Link>
          </div>
        </div>
        <div className={styles.opinionGrid}>
          {opinionData.map((c) => (
            <OpinionCard key={c.author} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
