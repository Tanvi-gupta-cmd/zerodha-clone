import "../styles/Home.css";

function Stats() {
  return (
    <section className="stats" data-aos="zoom-in">

      <h2>Largest stock broker in India</h2>

      <p className="stats-subtitle">
        1.6+ Crore Zerodha clients contribute to over 15% of all retail order
        volumes in India daily.
      </p>

      <div className="stats-grid">

        <div className="stat-card">
          <h3>1.6+ Cr</h3>
          <p>Active Clients</p>
        </div>

        <div className="stat-card">
          <h3>₹6+ Lakh Cr</h3>
          <p>Assets Under Management</p>
        </div>

        <div className="stat-card">
          <h3>15%</h3>
          <p>Retail Market Volume</p>
        </div>

        <div className="stat-card">
          <h3>100+</h3>
          <p>Partner Products</p>
        </div>

      </div>

    </section>
  );
}

export default Stats;