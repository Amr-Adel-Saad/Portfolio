import React from 'react';

export default function Footer() {
  return (
    <footer id="contact">
      <p>We can build awesome things together...</p>
      <span>Looking forward to hearing from you</span>
      <div>
        <a href="https://github.com/Amr-Adel-Saad" rel="noreferrer" target="_blank">
          <i className="fab fa-github fa-lg fa-fw"></i>GitHub
        </a>
        <a href="https://www.facebook.com/amr.adel.39982" rel="noreferrer" target="_blank">
          <i className="fab fa-facebook fa-lg fa-fw"></i>Facebook
        </a>
        <a href="mailto:amr.adel.51994@gmail.com" rel="noreferrer" target="_blank">
          <i className="fas fa-at fa-lg fa-fw"></i>Send a mail
        </a>
        <a href="tel:+20-1020426366" rel="noreferrer" target="_blank">
          <i className="fas fa-mobile-alt fa-lg fa-fw"></i>+20 1020426366 
        </a>
      </div>
      <div id="copyright">Amr Adel <span>&copy;2020</span></div>
    </footer>
  );
}
