import React from "react";

function OrderModal({
  showModal,
  setShowModal,
  selectedStock,
  quantity,
  setQuantity,
  orderType,
  confirmOrder,
}) {
  if (!showModal) return null;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{
        background: "rgba(0,0,0,0.5)",
        zIndex: 9999,
      }}
    >
      <div className="card p-4" style={{ width: "400px" }}>
        <h4>
          {orderType} {selectedStock?.name}
        </h4>

        <div className="mb-3">
          <label className="form-label">Quantity</label>

          <input
            type="number"
            className="form-control"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Price</label>

          <input
            className="form-control"
            value={selectedStock?.price || 0}
            readOnly
          />
        </div>

        <h5>
          Total : ₹{(selectedStock?.price || 0) * quantity}
        </h5>

        <div className="mt-4 d-flex justify-content-end">
          <button
            className="btn btn-secondary me-2"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>

          <button
            className={`btn ${
              orderType === "BUY"
                ? "btn-success"
                : "btn-danger"
            }`}
            onClick={confirmOrder}
          >
            Confirm {orderType}
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderModal;