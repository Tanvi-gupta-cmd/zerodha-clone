import "../styles/Home.css";

function Pricing() {
  return (
    <section className="pricing" id="pricing" data-aos="fade-up">

      <div className="pricing-container">

        <div className="pricing-left">

          <h2>Unbeatable Pricing</h2>

          <p className="pricing-subtitle">
            Simple, transparent and affordable pricing for everyone.
          </p>

          <div className="pricing-cards">

            <div className="price-card">
              <h3>₹0</h3>
              <h5>Equity Delivery</h5>
              <p>Invest in stocks without paying brokerage.</p>
            </div>

            <div className="price-card">
              <h3>₹20</h3>
              <h5>Intraday & F&O</h5>
              <p>Flat brokerage per executed order.</p>
            </div>

            <div className="price-card">
              <h3>Free</h3>
              <h5>Direct Mutual Funds</h5>
              <p>Commission-free mutual fund investments.</p>
            </div>

          </div>

        </div>

        <div className="pricing-right">
          <img
            src="/assets/pricing.png"
            alt="Pricing"
            className="img-fluid"
            style={{
              maxWidth: "450px",
              width: "100%",
            }}
          />
        </div>

      </div>

    </section>
  );
}

export default Pricing;