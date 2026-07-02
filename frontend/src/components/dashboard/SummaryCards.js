import { FaWallet, FaChartLine, FaShoppingCart, FaRupeeSign } from "react-icons/fa";

function SummaryCards({
  holdingCount,
  orderCount,
  balance,
  pnl,
  portfolioValue,
}) {
  const cards = [
    {
      title: "Portfolio Value",
      value: `₹${portfolioValue.toLocaleString()}`,
      icon: <FaWallet size={28} />,
      color: "primary",
    },
    {
      title: "Holdings",
      value: holdingCount,
      icon: <FaChartLine size={28} />,
      color: "success",
    },
    {
      title: "Orders",
      value: orderCount,
      icon: <FaShoppingCart size={28} />,
      color: "warning",
    },
    {
      title: "Available Funds",
      value: `₹${balance.toLocaleString()}`,
      icon: <FaRupeeSign size={28} />,
      color: "info",
    },
  ];

  return (
    <div className="row g-4">
      {cards.map((card, index) => (
        <div className="col-xl-3 col-lg-6 col-md-6" key={index}>
          <div
            className={`card border-0 shadow summary-card summary-${card.color}`}
            style={{
              borderRadius: "18px",
              transition: "0.3s",
              cursor: "pointer",
            }}
          >
            <div className="card-body">

              <div className="d-flex justify-content-between align-items-center">

                <div>
                  <small className="text-muted">
                    {card.title}
                  </small>

                  <h3 className="fw-bold mt-2">
                    {card.value}
                  </h3>
                </div>

                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#f4f6fb",
                  }}
                >
                  {card.icon}
                </div>

              </div>

              {card.title === "Available Funds" && (
                <div className="mt-3">

                  <small
                    className={
                      pnl >= 0
                        ? "text-success fw-bold"
                        : "text-danger fw-bold"
                    }
                  >
                    {pnl >= 0 ? "▲ Profit " : "▼ Loss "}
                    ₹{pnl.toFixed(2)}
                  </small>

                </div>
              )}

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;