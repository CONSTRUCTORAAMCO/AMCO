import styles from "./valores.module.css";
import { useLanguage } from "../../../i18n/languagecontext.jsx";

const Valores = () => {
  const { t } = useLanguage();
  const valores = t('valores.items', { returnObjects: true }) || [];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <span className={styles.kicker}>{t('valores.kicker')}</span>
          <h2>
            {t('valores.title')}
          </h2>
          <p>
            {t('valores.subtitle')}
          </p>
        </header>

        {/* Grid */}
        <div className={styles.grid}>
          {valores.map((item, index) => (
            <article key={index} className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Valores;