import styles from "./About.module.css";

export default function About() {
  return (
    <section>
      <div className={`container ${styles.about}`}>
        <div className={styles.copy}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>
            Sobre nosotros
          </div>
          <h2>
            Acercamos la ciencia <span className="accent">a la vida</span> de las personas.
          </h2>
          <p>
            Efecto Ciencia es un repositorio digital dedicado a la divulgación. Reunimos noticias,
            columnas de opinión y entrevistas sobre ciencia, tecnología, innovación y sociedad, en
            lenguaje claro y con la fuente al lado.
          </p>
          <p>
            Trabajamos con investigadoras, investigadores y comunicadores para acercar el conocimiento
            a quienes toman decisiones — y a quienes quieren entender el mundo que viene.
          </p>
        </div>
        <div className={styles.vis}>
          <div className={`${styles.ring} ${styles.ring1}`} />
          <div className={`${styles.ring} ${styles.ring2}`} />
          <div className={styles.core} />
          <div className={styles.visLabel}>Efecto Ciencia · 2026</div>
        </div>
      </div>
    </section>
  );
}
