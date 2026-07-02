import "../styles/Home.css";

function Footer() {
  return (
    <footer className="footer" id="footer" data-aos="fade-up">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>ZERODHA</h2>
          <p>© 2026 Zerodha Clone</p>
          <p>Built with ❤️ using React & Node.js</p>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <a href="/">About</a>
          <a href="/">Products</a>
          <a href="/">Pricing</a>
          <a href="/">Support</a>
        </div>

        <div className="footer-links">
          <h4>Resources</h4>
          <a href="/">Blog</a>
          <a href="/">Careers</a>
          <a href="/">Community</a>
          <a href="/">Contact</a>
        </div>

        <div className="footer-links">
          <h4>Follow Us</h4>
          <a href="/">LinkedIn</a>
          <a href="/">GitHub</a>
          <a href="/">Instagram</a>
          <a href="/">Twitter</a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;