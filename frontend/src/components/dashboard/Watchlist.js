import React from "react";

function Watchlist({
  search,
  setSearch,
  newStock,
  setNewStock,
  addStock,
  filteredStocks,
  actionLoading,
  setSelectedStock,
  setOrderType,
  setShowModal,
}) {
  return (
    <div className="col-lg-3">
      <div className="card shadow-sm border-0 p-3 h-100">

        <h5 className="mb-3">Watchlist</h5>

        <input
          className="form-control mb-3"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="d-flex mb-3">
          <input
            className="form-control"
            placeholder="Add Stock"
            value={newStock}
            onChange={(e) => setNewStock(e.target.value)}
          />

          <button
            className="btn btn-primary ms-2"
            onClick={addStock}
          >
            Add
          </button>
        </div>

        {filteredStocks.map((stock, index) => (
          <div
            key={index}
            className="d-flex justify-content-between align-items-center border-bottom py-3"
          >
            <div key={index} className="stock-card">

  <div className="stock-left">

    <img
      src={stock.logo}
      alt={stock.name}
      className="stock-logo"
    />

    <div>

      <h6>{stock.name}</h6>

      <span
        className={
          stock.change.includes("-")
            ? "loss"
            : "profit"
        }
      >
        {stock.change}
      </span>

    </div>

  </div>

  <div className="stock-right">

    <h6>₹{stock.price.toLocaleString()}</h6>

    <div className="stock-buttons">

      <button
        className="buy-btn"
        onClick={() => {
          setSelectedStock(stock);
          setOrderType("BUY");
          setShowModal(true);
        }}
      >
        Buy
      </button>

      <button
        className="sell-btn"
        onClick={() => {
          setSelectedStock(stock);
          setOrderType("SELL");
          setShowModal(true);
        }}
      >
        Sell
      </button>

    </div>

  </div>

</div>

            <div className="text-end">

              <div className="fw-bold">
                ₹{stock.price.toLocaleString()}
              </div>

              <button
                className="btn btn-success btn-sm mt-2"
                disabled={actionLoading}
                onClick={() => {
                  setSelectedStock(stock);
                  setOrderType("BUY");
                  setShowModal(true);
                }}
              >
                Buy
              </button>

              <button
                className="btn btn-danger btn-sm mt-2 ms-2"
                onClick={() => {
                  setSelectedStock(stock);
                  setOrderType("SELL");
                  setShowModal(true);
                }}
              >
                Sell
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Watchlist;