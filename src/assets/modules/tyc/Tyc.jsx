import React from "react";
import styles from "./tyc.module.css";

const TerminosCondiciones = () => {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>TÉRMINOS Y CONDICIONES DE USO</h1>
        <h2>CONSTRUCTORA AMCO LTDA</h2>
      </header>

      <section className={styles.section}>
        <h3><strong>1. Aceptación de los términos</strong></h3>
        <p>
          El acceso, navegación y uso del sitio web de <strong>Constructora AMCO LTDA</strong>,
          con domicilio en Bogotá D.C., Colombia, implica la aceptación plena y sin reservas
          de los presentes Términos y Condiciones de Uso.
        </p>
        <p>
          Si el usuario no está de acuerdo con alguno de los términos aquí establecidos,
          deberá abstenerse de utilizar este sitio web.
        </p>
      </section>

      <section className={styles.section}>
        <h3><strong>2. Objeto del sitio web</strong></h3>
        <p>
          El sitio web tiene como finalidad proporcionar información general sobre los
          proyectos, servicios, desarrollos inmobiliarios, actividades corporativas y
          datos de contacto de Constructora AMCO LTDA.
        </p>
        <p>
          La información publicada no constituye una oferta comercial vinculante ni
          compromiso contractual, salvo que se indique expresamente lo contrario.
        </p>
      </section>

      <section className={styles.section}>
        <h3><strong>3. Uso adecuado del sitio</strong></h3>
        <p>
          El usuario se compromete a utilizar el sitio web de manera responsable, lícita
          y conforme a la normativa colombiana vigente.
        </p>
        <ul>
          <li>No utilizar el sitio con fines ilícitos o fraudulentos.</li>
          <li>No afectar la disponibilidad, seguridad o funcionamiento del sitio.</li>
          <li>No intentar acceder a información restringida o sistemas internos.</li>
          <li>No introducir virus, malware o cualquier código malicioso.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3><strong>4. Propiedad intelectual</strong></h3>
        <p>
          Todo el contenido del sitio web, incluyendo textos, imágenes, renders,
          fotografías de proyectos, planos, diseños, logotipos, marcas, videos y material
          gráfico, es propiedad exclusiva de Constructora AMCO LTDA o cuenta con las
          autorizaciones correspondientes.
        </p>
        <p>
          Queda estrictamente prohibida la reproducción, distribución, modificación,
          uso comercial o divulgación del contenido sin autorización previa y expresa
          por escrito de AMCO.
        </p>
      </section>

      <section className={styles.section}>
        <h3><strong>5. Uso de imágenes y proyectos</strong></h3>
        <p>
          Las imágenes de proyectos, renders, diseños arquitectónicos y material visual
          publicados en el sitio web tienen fines exclusivamente informativos y
          promocionales.
        </p>
        <ul>
          <li>No pueden ser utilizadas con fines comerciales sin autorización.</li>
          <li>No pueden ser alteradas o manipuladas.</li>
          <li>No pueden ser presentadas como proyectos de terceros.</li>
        </ul>
        <p>
          El uso indebido de este material podrá dar lugar a acciones legales conforme
          a la legislación vigente.
        </p>
      </section>

      <section className={styles.section}>
        <h3><strong>6. Formularios y contacto</strong></h3>
        <p>
          Al diligenciar formularios o contactar a AMCO mediante el sitio web o WhatsApp,
          el usuario declara que la información suministrada es veraz, completa y actualizada.
        </p>
        <p>
          El uso de estos canales no genera relación contractual automática ni obligación
          de respuesta inmediata por parte de la empresa.
        </p>
      </section>

      <section className={styles.section}>
        <h3><strong>7. Enlaces a terceros</strong></h3>
        <p>
          El sitio web puede contener enlaces a sitios web de terceros. Constructora AMCO
          LTDA no se hace responsable por el contenido, políticas o prácticas de dichos
          sitios externos.
        </p>
      </section>

      <section className={styles.section}>
        <h3><strong>8. Limitación de responsabilidad</strong></h3>
        <p>
          AMCO no garantiza que el sitio esté libre de errores, interrupciones o fallos
          técnicos, ni que el acceso sea continuo o ininterrumpido.
        </p>
        <p>
          El uso del sitio se realiza bajo responsabilidad exclusiva del usuario.
        </p>
      </section>

      <section className={styles.section}>
        <h3><strong>9. Modificaciones</strong></h3>
        <p>
          Constructora AMCO LTDA se reserva el derecho de modificar en cualquier momento
          los presentes Términos y Condiciones.
        </p>
        <p>
          Las modificaciones entrarán en vigencia desde su publicación en el sitio web.
        </p>
      </section>

      <section className={styles.section}>
        <h3><strong>10. Legislación aplicable</strong></h3>
        <p>
          Los presentes Términos y Condiciones se rigen por las leyes de la República
          de Colombia. Cualquier controversia será sometida a la jurisdicción de los
          tribunales competentes de Bogotá D.C.
        </p>
      </section>
    </main>
  );
};

export default TerminosCondiciones;
