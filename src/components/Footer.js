import React from "react";
import "../css/footer.css";
import iconGmail from "../img/img-icons/icon-gmail.png";
import iconLinkedin from "../img/img-icons/icon-linkedin.png";

const Footer = () => {
  return (
    <section className="contenedor footer">
      <div className="contentFooter">
        <span>Copyright© 2024 Marcelo Diaz</span>
        <div className="contactFooter">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/marcelo-diaz2000/"
          >
            <img src={iconLinkedin} height={20} alt="iconLinkedin" />
          </a>
          <a href="mailto:marcelodiazcp@gmail.com">
            <img src={iconGmail} height={20} alt="iconGmail" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
