import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Formulario.module.css";
import { RiMailLine, RiPhoneLine, RiCheckLine, RiCloseLine } from "react-icons/ri";

const Formulario = () => {
  const formRef = useRef();
  const [estado, setEstado] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);

  const enviarEmail = (e) => {
    e.preventDefault();
    setEstado("enviando");

    emailjs
      .sendForm(
        "service_n6t9pup",
        "template_u3cv9tb",
        formRef.current,
        "2u_-aq9Wcg1Kw68dn"
      )
      .then(
        () => {
          setEstado("enviado");
          setMostrarModal(true);
          formRef.current.reset();
        },
        () => {
          setEstado("error");
          setMostrarModal(true);
        }
      );
  };

  // ⏱️ Autocierre del modal
  useEffect(() => {
    if (mostrarModal) {
      const timer = setTimeout(() => {
        setMostrarModal(false);
        setEstado("");
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [mostrarModal]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* IZQUIERDA - FORMULARIO */}
        <div className={styles.formBox}>
          <h1 style={{ textAlign: "center" }}>
            <strong>Contáctanos</strong>
          </h1>

          <p style={{ textAlign: "center" }}>
            Cuéntanos qué tienes en mente y te contactamos.
          </p>

          <form ref={formRef} onSubmit={enviarEmail}>
            <input
              type="text"
              name="user_name"
              placeholder="Tu nombre"
              maxLength={50}
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder="Tu correo electrónico"
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              title="Ingresa un correo válido"
              required
            />

            <textarea
              name="message"
              placeholder="Escribe tu mensaje"
              rows="5"
              required
            />

            <button type="submit">
              {estado === "enviando" ? "Enviando..." : "Enviar mensaje"}
            </button>
          </form>
        </div>

        {/* DERECHA - INFO */}
        <div className={styles.infoBox}>
          <div className={styles.contactoHorizontal}>
            <div className={styles.cardHorizontal}>
              <h3>
                Correo <RiMailLine size={18} />
              </h3>
              <p>constructoraamcoltda@gmail.com</p>
            </div>

            <div className={styles.cardHorizontal}>
              <h3>
                Teléfono <RiPhoneLine size={18} />
              </h3>
              <p>+57 300 123 4567</p>
            </div>
          </div>

          <div className={styles.mapCard}>
            <iframe
              title="Ubicación Constructora AMCO"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5000!2d-74.0519526!3d4.6786749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a931ebe1a1d%3A0x1d267cdfe5b0e062!2sBusiness%20center%2093!5e0!3m2!1ses-419!2sco!4v1768488991782"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>


          </div>
        </div>

        {/* MODAL */}
        {mostrarModal && (
          <div className={styles.modalOverlay}>
            <div className={styles.modal}>
              {estado === "enviado" ? (
                <>
                  <div className={styles.iconSuccess}>
                    <RiCheckLine size={40} />
                  </div>
                  <h3>Mensaje enviado</h3>
                  <p>Gracias por escribirnos. Te responderemos pronto.</p>
                </>
              ) : (
                <>
                  <div className={styles.iconError}>
                    <RiCloseLine size={40} />
                  </div>
                  <h3>Error al enviar</h3>
                  <p>Intenta nuevamente en unos segundos.</p>
                </>
              )}

              <button onClick={() => setMostrarModal(false)}>
                Aceptar
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Formulario;