import React from "react";
function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">&copy; {new Date().getFullYear()}</p>
    </footer>
  );
}
export default Footer;
