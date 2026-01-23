import Counter from "./Counter";
import styles from "./Historial.module.css";
import { useLanguage } from "../../../i18n/LanguageContext";

const Historial = () => {
  const { t } = useLanguage();

  return (
    <section className={styles.historial}>
      <div className={styles.container}>
        {/* ITEM 1 */}
        <div className={styles.item}>
          <Counter end={50} />
          <div
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: t('history.experience') }}
          />
        </div>

        {/* ITEM 2 */}
        <div className={styles.item}>
          <div className={styles.million}>
            <Counter end={1000000} />
            <span className={styles.unit}>m²</span>
          </div>
          <div className={`${styles.text} ${styles.textCompact}`}>
            <span>{t('history.built')}</span>
          </div>
        </div>

        {/* ITEM 3 */}
        <div className={styles.item}>
          <Counter end={60} />
          <div
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: t('history.executed') }}
          />
        </div>
      </div>
    </section>
  );
};

export default Historial;
