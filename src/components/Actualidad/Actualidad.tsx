import Link from "next/link";
import Icon from "@/components/Icon";
import styles from "./Actualidad.module.css";

interface NewsItem {
  cat: string;
  title: string;
  date: string;
  read: string;
  ph: string;
  glyph: string;
}

const newsData: NewsItem[] = [
  {
    cat: "Inteligencia artificial",
    title: "Investigadores chilenos entrenan un modelo de lenguaje en mapudungun con dos millones de oraciones",
    date: "27 abr 2026",
    read: "6 min",
    ph: "ph2",
    glyph: "[ Foto · Lab NLP ]",
  },
  {
    cat: "Salud",
    title: "Una vacuna contra el cáncer de piel desarrollada en Chile inicia su Fase II en cinco hospitales",
    date: "26 abr 2026",
    read: "4 min",
    ph: "ph3",
    glyph: "[ Foto · Microscopía ]",
  },
  {
    cat: "Medio ambiente",
    title: "El glaciar Echaurren perdió 62% de su masa: el agua para Santiago se acabaría en 30 años",
    date: "25 abr 2026",
    read: "8 min",
    ph: "ph5",
    glyph: "[ Foto · Glaciar ]",
  },
  {
    cat: "Startups",
    title: "Una empresa chilena de proteínas alternativas abre laboratorio con cuarenta científicos en San Joaquín",
    date: "24 abr 2026",
    read: "3 min",
    ph: "ph6",
    glyph: "[ Foto · Laboratorio ]",
  },
];

const phMap: Record<string, string> = {
  ph2: "ph2",
  ph3: "ph3",
  ph5: "ph5",
  ph6: "ph6",
};

function NewsCard({ n }: { n: NewsItem }) {
  return (
    <Link href="#" className={styles.newsCard}>
      <div className={styles.newsThumb}>
        <div className={`${styles.newsThumbInner} ${phMap[n.ph]}`}>
          <div className="phOverlay" />
          <div className="phGlyph">{n.glyph}</div>
        </div>
        <span className={`tag tagCoral ${styles.badge}`}>{n.cat}</span>
      </div>
      <div className={styles.meta}>
        <span>{n.date}</span>
        <span className={styles.dot}>●</span>
        <span>{n.read} de lectura</span>
      </div>
      <h3>{n.title}</h3>
    </Link>
  );
}

export default function Actualidad() {
  return (
    <section className="block" style={{ paddingTop: 32 }}>
      <div className="container">
        <div className="sectionHead">
          <div>
            <div className="eyebrow" style={{ marginBottom: 14 }}>
              Sección 02
            </div>
            <h2>
              Todas las <span className="accent">noticias</span>.
            </h2>
          </div>
          <div className="sectionHeadRight">
            <span>04 publicaciones recientes</span>
          </div>
        </div>
        <div className={styles.newsGrid}>
          {newsData.map((n) => (
            <NewsCard key={n.title} n={n} />
          ))}
        </div>
        <div className="ctaRow">
          <Link href="#" className="btnOutline">
            Ver todas las noticias <Icon name="arrow" size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
