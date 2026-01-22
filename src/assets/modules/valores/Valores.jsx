import styles from "./Valores.module.css";

const valores = [
  {
    title: "Compromiso con la calidad",
    text:
      "Priorizamos la precisión y la atención al detalle en cada proyecto, garantizando una calidad excepcional que resiste el paso del tiempo.",
  },
  {
    title: "Responsable y oportuno",
    text:
      "Entendemos la importancia de los plazos y entregamos los proyectos a tiempo sin comprometer la calidad.",
  },
  {
    title: "Sostenible",
    text:
      "Implementamos prácticas sustentables y materiales ecológicos para minimizar el impacto ambiental.",
  },
  {
    title: "Comunicación asertiva",
    text:
      "Creemos en la comunicación honesta y constante durante todo el ciclo del proyecto, garantizando tranquilidad y confianza.",
  },
  {
    title: "Soluciones innovadoras",
    text:
      "Aplicamos tecnología de vanguardia y técnicas modernas para convertir ideas en realidades sólidas.",
  },
  {
    title: "Enfoque en el cliente",
    text:
      "Escuchamos, entendemos y personalizamos cada solución para que la visión del cliente se haga realidad.",
  },
];

const Valores = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <span className={styles.kicker}>Constructora AMCO Ltda.</span>
          <h2>
            Más de <strong>50 años</strong> construyendo confianza
          </h2>
          <p>
            Combinamos experiencia, innovación y responsabilidad para crear
            proyectos que perduran en el tiempo.
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
