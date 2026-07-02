import "../styles/Home.css";

function Trust() {
  return (
    <section className="trust-section" id="about" data-aos="fade-right">
      <div className="trust-left">
        <h2>Trust with confidence</h2>

        <div className="trust-item">
          <h4>Customer-first always</h4>
          <p>
            That's why 1.6+ crore customers trust Zerodha with
            ₹6+ lakh crores worth of equity investments.
          </p>
        </div>

        <div className="trust-item">
          <h4>No spam or gimmicks</h4>
          <p>
            No gimmicks, spam, "gamification", or annoying push
            notifications. High quality apps that you use at your pace.
          </p>
        </div>

        <div className="trust-item">
          <h4>The Zerodha universe</h4>
          <p>
            More than an app — gain free access to the entire ecosystem
            of our partner products.
          </p>
        </div>

        <div className="trust-item">
          <h4>Do better with money</h4>
          <p>
            With initiatives like Varsity, TradingQ&A and more,
            we help users become better investors.
          </p>
        </div>
      </div>

      <div className="trust-right">
        <img
          src="/assets/trust.png"
          alt="Ecosystem"
        />
      </div>
    </section>
  );
}

export default Trust;