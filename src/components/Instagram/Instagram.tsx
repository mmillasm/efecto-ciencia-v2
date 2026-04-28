import Link from "next/link";
import Icon from "@/components/Icon";
import styles from "./Instagram.module.css";

const igPosts = [
  "https://www.instagram.com/efectociencia/p/DHH4eATseWq/",
  "https://www.instagram.com/efectociencia/p/DHH4cV-M_qF/",
  "https://www.instagram.com/efectociencia/p/DHH4ZUDMas5/",
  "https://www.instagram.com/efectociencia/p/DXnOg30kexy/",
  "https://www.instagram.com/efectociencia/p/DXnOW2GEXqR/",
  "https://www.instagram.com/efectociencia/reel/DXm4mM-EfmB/",
];

const phClasses = ["ph1", "ph2", "ph3", "ph4", "ph5", "ph6"];

export default function Instagram() {
  return (
    <section className="blockTight">
      <div className="container">
        <div className="sectionHead">
          <div>
            <div className="eyebrow" style={{ marginBottom: 14 }}>
              @efectociencia
            </div>
            <h2>
              Síguenos en <span className="accent">Instagram</span>.
            </h2>
          </div>
          <div className="sectionHeadRight">
            <a
              href="https://www.instagram.com/efectociencia/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
            >
              <Icon name="instagram" size={14} /> Ver perfil
            </a>
          </div>
        </div>
        <div className={styles.instaGrid}>
          {igPosts.map((url, i) => (
            <Link
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instaTile}
            >
              <div
                className={`${phClasses[i % 6]} phOverlay`}
                style={{ position: "absolute", inset: 0 }}
              />
              <div className={styles.igIcon}>
                <Icon name="instagram" size={28} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
