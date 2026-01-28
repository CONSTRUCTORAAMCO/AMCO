import React from "react";
import styles from "./Politicaprivacidad.module.css";

const Politicaprivacidad = () => {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>POLÍTICA DE PRIVACIDAD</h1>
        <h2>CONSTRUCTORA AMCO LTDA</h2>
      </header>

      <section className={styles.section}>
        <p>
          Constructora <strong>AMCO LTDA</strong>, con domicilio en Bogotá D.C.,
          Colombia, en cumplimiento de lo dispuesto en la Ley 1581 de 2012, el
          Decreto 1377 de 2013 y demás normas que regulan la protección de datos
          personales, informa a los usuarios de su sitio web la presente Política
          de Tratamiento de Datos Personales.
        </p>

        <p>
          AMCO valora la privacidad de sus usuarios y se compromete a proteger la
          información personal recolectada, garantizando su uso responsable,
          seguro y conforme a la ley.
        </p>
      </section>

      <section className={styles.section}>
        <h3><strong>1. Datos personales recolectados</strong></h3>
        <p>
          A través de este sitio web y de los canales de contacto asociados,
          Constructora AMCO LTDA podrá recolectar los siguientes datos personales:
        </p>
        <ul>
          <li>Nombre</li>
          <li>Correo electrónico</li>
          <li>
            Número telefónico (cuando el usuario contacta voluntariamente mediante
            WhatsApp u otros medios)
          </li>
        </ul>
        <p>
          No se recolectan datos sensibles ni información innecesaria para las
          finalidades descritas en esta política.
        </p>
      </section>

      <section className={styles.section}>
        <h3><strong>2. Origen de los datos personales</strong></h3>
        <ul>
          <li>Formularios disponibles en el sitio web</li>
          <li>Contacto directo por correo electrónico</li>
          <li>Comunicación voluntaria mediante el botón de WhatsApp</li>
          <li>
            Interacciones comerciales relacionadas con proyectos y servicios de
            la empresa
          </li>
        </ul>
        <p>
          AMCO no adquiere bases de datos de terceros ni utiliza información
          obtenida por medios no autorizados.
        </p>
      </section>

      <section className={styles.section}>
        <h3><strong>3. Finalidad del tratamiento de los datos</strong></h3>
        <ul>
          <li>Atender solicitudes de información realizadas por los usuarios</li>
          <li>
            Contactar a personas interesadas en proyectos y servicios de
            construcción
          </li>
          <li>Brindar asesoría comercial y seguimiento a solicitudes</li>
          <li>
            Dar respuesta a mensajes enviados por WhatsApp o formularios del sitio
            web
          </li>
          <li>
            Mantener comunicaciones relacionadas con proyectos e información
            comercial
          </li>
        </ul>
        <p>
          En ningún caso los datos personales serán vendidos, alquilados, cedidos
          o compartidos con terceros sin autorización expresa del titular, salvo
          obligación legal.
        </p>
      </section>

      <section className={styles.section}>
        <h3><strong>4. Uso de WhatsApp y contacto directo</strong></h3>
        <p>
          Al utilizar el botón de WhatsApp disponible en el sitio web, el usuario
          acepta de manera voluntaria que su número telefónico sea utilizado
          exclusivamente para atender su solicitud.
        </p>
        <p>
          El número telefónico no será utilizado para fines distintos ni será
          compartido con terceros.
        </p>
      </section>

      <section className={styles.section}>
        <h3><strong>5. Uso de información técnica y cookies</strong></h3>
        <p>El sitio web puede recopilar información técnica básica como:</p>
        <ul>
          <li>Dirección IP</li>
          <li>Tipo de navegador</li>
          <li>Sistema operativo</li>
          <li>Comportamiento de navegación</li>
        </ul>
        <p>
          Esta información se utiliza con fines estadísticos y de mejora de la
          experiencia del usuario y no permite su identificación personal.
        </p>
      </section>

      <section className={styles.section}>
        <h3><strong>6. Derechos del titular de los datos</strong></h3>
        <ul>
          <li>Conocer, actualizar y rectificar sus datos personales</li>
          <li>Solicitar la supresión de sus datos</li>
          <li>Revocar la autorización otorgada</li>
          <li>Presentar consultas o reclamos</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3><strong>7. Conservación de los datos personales</strong></h3>
        <p>
          Los datos personales serán conservados únicamente durante el tiempo
          necesario para cumplir las finalidades para las cuales fueron
          recolectados o por obligaciones legales.
        </p>
      </section>

      <section className={styles.section}>
        <h3><strong>8. Seguridad de la información</strong></h3>
        <p>
          AMCO adopta medidas técnicas, administrativas y organizativas razonables
          para proteger los datos personales contra accesos no autorizados, uso
          indebido o divulgación.
        </p>
      </section>

      <section className={styles.section}>
        <h3><strong>9. Modificaciones a la política</strong></h3>
        <p>
          Constructora AMCO LTDA se reserva el derecho de modificar esta política
          en cualquier momento. Las modificaciones entrarán en vigencia desde su
          publicación en el sitio web.
        </p>
      </section>

      <section className={styles.section}>
        <h3><strong>10. Aceptación de la política</strong></h3>
        <p>
          El uso del sitio web, el envío de información mediante formularios o el
          contacto vía WhatsApp implica que el usuario ha leído, entendido y
          aceptado esta Política de Tratamiento de Datos Personales.
        </p>
      </section>
    </main>
  );
};

export default Politicaprivacidad;
