import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBanner}>
        <Image
          src="/herp-efecto2-ciencia.jpg"
          alt="Efecto Ciencia"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <div className={styles.heroTaglineBand}>
        <div className={`container ${styles.inner}`}>
          <div className={styles.heroEyebrow}>Repositorio digital</div>
          <h1>
            <strong>Ciencia, innovación y entrevistas</strong> en radio y formato digital.
          </h1>
        </div>
      </div>
    </section>
  );
}
