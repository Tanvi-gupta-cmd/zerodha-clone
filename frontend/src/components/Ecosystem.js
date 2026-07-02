import "../styles/Home.css";

function Ecosystem() {
  return (
    <section className="ecosystem" id="products" data-aos="fade-left">

      <div className="eco-left">
        <img
          src="/assets/ecosystem.png"
          alt="Ecosystem"
        />
      </div>

      <div className="eco-right">
        <h2>The Zerodha Ecosystem</h2>

        <p>
          One ecosystem. Multiple powerful investment and trading
          platforms designed to make your investing journey simple,
          fast, and secure.
        </p>

        <div className="eco-features">
          <div className="feature-card">
            <h4>Kite</h4>
            <p>Fast and modern trading platform.</p>
          </div>

          <div className="feature-card">
            <h4>Console</h4>
            <p>Powerful portfolio and reports.</p>
          </div>

          <div className="feature-card">
            <h4>Coin</h4>
            <p>Invest in direct mutual funds.</p>
          </div>

          <div className="feature-card">
            <h4>Varsity</h4>
            <p>Free stock market education.</p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Ecosystem;