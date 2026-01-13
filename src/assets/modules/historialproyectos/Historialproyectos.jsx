import Counter from "./Counter";
import styles from "./Historial.module.css";

const Historial = () => {
  return (
    <section className={styles.historial}>
      <div className={styles.container}>
        {/* ITEM 1 */}
        <div className={styles.item}>
          <Counter end={50} />
          <div className={styles.text}>
            <span>Años de experiencia en el</span>
            <span>sector de la construcción</span>
          </div>
        </div>

        {/* ITEM 2 */}
        <div className={styles.item}>
          <div className={styles.million}>
            <Counter end={1000000} />
            <span className={styles.unit}>m²</span>
          </div>
          <div className={`${styles.text} ${styles.textCompact}`}>
            <span>Construidos en proyectos residenciales y comerciales</span>
          </div>
        </div>

        {/* ITEM 3 */}
        <div className={styles.item}>
          <Counter end={60} />
          <div className={styles.text}>
            <span>Proyectos ejecutados</span>
            <span>con éxito garantizado</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Historial;
