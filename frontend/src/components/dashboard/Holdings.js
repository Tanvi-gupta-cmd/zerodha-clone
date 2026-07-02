import React from "react";

function Holdings({ holdings }) {
  return (
    <div className="card shadow-sm border-0 p-3 mb-4">
      <h5 className="mb-3">Holdings</h5>

      {holdings.length === 0 ? (
        <p>No holdings found</p>
      ) : (
        holdings.map((item) => (
          <div
            key={item._id}
            className="d-flex justify-content-between align-items-center border-bottom py-3"
          >
            <div>
              <strong>{item.stockName}</strong>
            </div>

            <div className="text-end">
              <div className="fw-semibold">
                Qty: {item.quantity}
              </div>

              <div className="text-muted">
                Avg: ₹{item.avg}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Holdings;