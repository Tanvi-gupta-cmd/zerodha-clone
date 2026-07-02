import React from "react";

function Positions({ positions }) {
  return (
    <div className="card shadow-sm border-0 p-3 mb-4">
      <h5 className="mb-3">Positions</h5>

      {positions.length === 0 ? (
        <p>No positions found</p>
      ) : (
        positions.map((item) => (
          <div
            key={item._id}
            className="d-flex justify-content-between align-items-center border-bottom py-3"
          >
            <div>
              <strong>{item.name}</strong>
            </div>

            <div className="text-end">
              <div>Qty: {item.qty}</div>
              <div>₹{item.price}</div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Positions;