import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import styles from "./formulario.module.css";
import { Link } from "react-router-dom";
import {
  RiMailLine,
  RiPhoneLine,
  RiCheckLine,
  RiCloseLine,
} from "react-icons/ri"
import { Building2 } from "lucide-react";
import { useLanguage } from "../../../i18n/languagecontext.jsx";

const Formulario = () => {
  const { t } = useLanguage();
  const formRef = useRef();
  const [estado, setEstado] = useState("");
  const [mostrarToast, setMostrarToast] = useState(false);
  const [emailError, setEmailError] = useState(""); 
  const [nameError, setNameError] = useState("");
  const [messageError, setMessageError] = useState("");
  const mainTitleRef = useRef(null);
  const statsRef = useRef(null);

  // Función de validación de email (adaptada para React)
  const validarEmailEstricto = (email) => {
    const emailTrimmed = email.trim().toLowerCase();
    
    if (!emailTrimmed) {
      return t('contact.emailValidation.required');
    }
    
    const partes = emailTrimmed.split('@');
    
    // 1. Debe tener exactamente un @
    if (partes.length !== 2) {
      return t('contact.emailValidation.atSymbol');
    }
    
    const [usuario, dominio] = partes;
    
    // 2. Validar parte del usuario (antes del @)
    if (!usuario || usuario.length === 0) {
      return t('contact.emailValidation.userPart');
    }
    
    // Caracteres válidos en usuario
    const usuarioValido = /^[a-zA-Z0-9._%+-]+$/.test(usuario);
    if (!usuarioValido) {
      return t('contact.emailValidation.invalidCharsUser');
    }
    
    // No puede empezar o terminar con punto
    if (usuario.startsWith('.') || usuario.endsWith('.')) {
      return t('contact.emailValidation.dotUsage');
    }
    
    // No puntos consecutivos
    if (usuario.includes('..')) {
      return t('contact.emailValidation.consecutiveDots');
    }
    
    // 3. Validar dominio (después del @)
    if (!dominio || dominio.length === 0) {
      return t('contact.emailValidation.domainPart');
    }
    
    // El dominio DEBE contener al menos un punto
    if (!dominio.includes('.')) {
      return t('contact.emailValidation.domainDot');
    }
    
    // Dividir el dominio en partes
    const partesDominio = dominio.split('.');
    
    // Debe tener al menos 2 partes después del último punto
    if (partesDominio.length < 2) {
      return t('contact.emailValidation.domainIncomplete');
    }
    
    // Verificar cada parte del dominio
    for (let i = 0; i < partesDominio.length; i++) {
      const parte = partesDominio[i];
      
      // Cada parte no puede estar vacía
      if (!parte || parte.length === 0) {
        return t('contact.emailValidation.consecutiveDotsDomain');
      }
      
      // No puede empezar o terminar con guión
      if (parte.startsWith('-') || parte.endsWith('-')) {
        return t('contact.emailValidation.hyphenUsage');
      }
      
      // Caracteres válidos en cada parte del dominio
      const parteValida = /^[a-zA-Z0-9-]+$/.test(parte);
      if (!parteValida) {
        return t('contact.emailValidation.invalidCharsDomain');
      }
    }
    
    // 4. Validar TLD (última parte)
    const tld = partesDominio[partesDominio.length - 1];
    if (tld.length < 2) {
      return t('contact.emailValidation.tldLength');
    }
    
    // TLD solo letras
    if (!/^[a-zA-Z]+$/.test(tld)) {
      return t('contact.emailValidation.tldChars');
    }
    
    // 5. Longitudes máximas
    if (usuario.length > 64) {
      return t('contact.emailValidation.userLength');
    }
    
    if (dominio.length > 255) {
      return t('contact.emailValidation.domainLength');
    }
    
    // 6. Patrón final
    const emailRegex = /^[a-zA-Z0-9]+([._%+-][a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
    
    if (!emailRegex.test(emailTrimmed)) {
      return t('contact.emailValidation.invalidFormat');
    }
    
    // Si todo está bien
    return "";
  };

  // Manejar el blur del email
  const handleEmailBlur = (e) => {
    const email = e.target.value;
    const error = validarEmailEstricto(email);
    setEmailError(error);
    
    // Limpiar y convertir a minúsculas
    if (!error) {
      e.target.value = email.trim().toLowerCase();
    }
  };

  // Manejar el cambio del email (para limpiar error cuando empiezan a escribir)
  const handleEmailChange = (e) => {
    if (emailError) {
      setEmailError("");
    }
    // Limitar longitud
    if (e.target.value.length > 320) {
      e.target.value = e.target.value.substring(0, 320);
    }
  };

  const enviarEmail = (e) => {
    e.preventDefault();
    
    // Validar nombre antes de enviar
    const nameInput = formRef.current.querySelector('input[name="user_name"]');
    const nameValue = nameInput.value.trim();
    if (!nameValue) {
      setNameError(t('contact.nameError'));
      nameInput.focus();
      return;
    }

    // Validar email antes de enviar
    const emailInput = formRef.current.querySelector('input[name="user_email"]');
    const emailError = validarEmailEstricto(emailInput.value);
    
    if (emailError) {
      setEmailError(emailError);
      emailInput.focus();
      return;
    }

    // Validar mensaje antes de enviar
    const messageInput = formRef.current.querySelector('textarea[name="message"]');
    const messageValue = messageInput.value.trim();
    if (!messageValue) {
      setMessageError(t('contact.messageError'));
      messageInput.focus();
      return;
    }
    
    // Si el email es válido, proceder con el envío
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
          setMostrarToast(true);
          formRef.current.reset();
          setEmailError(""); // Limpiar error
          setNameError(""); // Limpiar error
          setMessageError(""); // Limpiar error
        },
        () => {
          setEstado("error");
          setMostrarToast(true);
        }
      );
  };

  // ⏱️ Autocierre del toast (5s)
  useEffect(() => {
    if (mostrarToast) {
      const timer = setTimeout(() => {
        setMostrarToast(false);
        setEstado("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [mostrarToast]);

  // Animaciones de scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (mainTitleRef.current) observer.observe(mainTitleRef.current);
    if (statsRef.current) observer.observe(statsRef.current);

    return () => {
      if (mainTitleRef.current) observer.unobserve(mainTitleRef.current);
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  return (
    <>
    
    
      {/* HERO SECTION - EXACTA COMO LA TIENES */}
      <div className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <div className={styles.companyLogo}>
            <Building2 size={64} className={styles.logoIcon} />
            <div className={styles.companyName}>
              
              <h1 className={styles.companyMainName}>{t('contact.mainTitle')}</h1>
              <p className={styles.companySubtitle}>{t('contact.mainSubtitle')}</p>
            </div>
          </div>
          <h2 ref={mainTitleRef} className={styles.heroTitle}>
            {t('contact.heroTitle')}
          </h2>
          <p className={styles.heroSubtitle}>
            {t('contact.heroSubtitle')}
          </p>
        </div>
      </div>

      {/* STATS BAR - REEMPLAZADO POR EL MENSAJE */}
      <div ref={statsRef} className={styles.statsBar}>
        <div className={styles.messageBox}>
 <p className={styles.legalText}>
            {t('contact.legalDisclaimer')}{" "}
            <Link to="/politicaprivacidad" className={styles.legalLink}>
              {t('contact.privacyPolicy')}
            </Link> {" "}
            {t('contact.and')}{" "}
            <Link to="/tyc" className={styles.legalLink}>
              {t('contact.termsAndConditions')}
            </Link>.
          </p>
        </div>
      </div>
      

     
                <section className={styles.section}>
                  <div className={styles.container}>
          {/* IZQUIERDA - FORMULARIO */}
          <div className={styles.formBox}>
            <br />
            <h1 style={{ textAlign: "center" }}>
              <strong>{t('contact.formTitle')}</strong>
            </h1>

            <p style={{ textAlign: "center" }}>
              {t('contact.formSubtitle')}
            </p>

            <form ref={formRef} onSubmit={enviarEmail} noValidate>
              <div className={styles.emailContainer}>
                <input
                  type="text"
                  name="user_name"
                  placeholder={t('contact.namePlaceholder')}
                  maxLength={50}
                  pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$"
                  title={t('contact.namePattern')}
                  required
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, "");
                    if (nameError) setNameError("");
                  }}
                  className={nameError ? styles.inputError : ""}
                />
                {nameError && (
                  <div className={styles.errorMessage}>
                    {nameError}
                  </div>
                )}
              </div>
              
              <div className={styles.emailContainer}>
                <input
                  type="email"
                  name="user_email"
                  placeholder={t('contact.emailPlaceholder')}
                  required
                  title={t('contact.emailPattern')}
                  onBlur={handleEmailBlur}
                  onChange={handleEmailChange}
                  className={emailError ? styles.inputError : ""}
                />
                {emailError && (
                  <div className={styles.errorMessage}>
                    {emailError}
                  </div>
                )}
              </div>

              <div className={styles.emailContainer}>
                <textarea
                  name="message"
                  placeholder={t('contact.messagePlaceholder')}
                  rows="5"
                  required
                  className={messageError ? styles.inputError : ""}
                  onChange={() => {
                    if (messageError) setMessageError("");
                  }}
                />
                {messageError && (
                  <div className={styles.errorMessage}>
                    {messageError}
                  </div>
                )}
              </div>

              <button type="submit">
                {estado === "enviando" ? t('contact.sending') : t('contact.send')}
              </button>
            </form>
          </div>

          {/* DERECHA - INFO */}
          <div className={styles.infoBox}>
            <div className={styles.contactoHorizontal}>
              <div className={styles.cardHorizontal}>
                <h3>
                  {t('contact.emailLabel')} <RiMailLine size={18} />
                </h3>
                <p>constructoraamcoltda@gmail.com</p>
              </div>

              <div className={styles.cardHorizontal}>
                <h3>
                  {t('contact.phoneLabel')} <RiPhoneLine size={18} />
                </h3>
                <p>+57 300 123 4567</p>
              </div>
            </div>

            <div className={styles.mapCard}>
              <iframe
                title={t('contact.mapTitle')}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5000!2d-74.0519526!3d4.6786749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a931ebe1a1d%3A0x1d267cdfe5b0e062!2sBusiness%20center%2093!5e0!3m2!1ses-419!2sco!4v1768488991782"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {mostrarToast && (
          <div className="fixed top-4 right-4 z-50 animate-slide-in w-[90vw] max-w-[220px]">
            <div className="relative overflow-hidden rounded-lg bg-gray-200 text-black px-6 py-8 shadow-xl">
              <div className="flex items-start gap-4 text-base">
                <div className="text-xl mt-1">
                  {estado === "enviado" ? <RiCheckLine /> : <RiCloseLine />}
                </div>
        
                <div className="flex-1">
                  <span className="font-medium block">
                    {estado === "enviado" ? t('contact.toastSuccessTitle') : t('contact.toastErrorTitle')}
                  </span>
                  <p className="text-sm text-gray-600 mt-2">
                    {estado === "enviado"
                      ? t('contact.toastSuccessMessage')
                      : t('contact.toastErrorMessage')}
                  </p>
                </div>
              </div>
                    
              {/* Barra de progreso */}
              <div className="absolute bottom-0 left-0 h-[4px] w-full bg-black/20">
                <div className={`h-full bg-black ${styles.toastProgress}`} />
              </div>
            </div>
          </div>
        )}

      </section>
    </>
  );
};

export default Formulario;