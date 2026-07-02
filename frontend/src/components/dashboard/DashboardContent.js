import React from "react";
import SummaryCards from "./SummaryCards";
import TradingChart from "../TradingChart";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

function DashboardContent(props) {
  const {
    loading,
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

    portfolioValue,
    holdingCount,
    orderCount,
    balance,
    pnl,
    totalInvestment,
    currentValue,

    chartData,
    holdings,
    positions,
    recentOrders,
    addFunds,
  } = props;

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
  ];

  return (
    <>{loading ? (
  <div className="text-center mt-5">
    <h5>Loading...</h5>
  </div>
) : (
  <div className="row">

    {/* Watchlist */}

    <div className="col-lg-3 mb-4">
      <div className="card shadow-sm border-0 p-3 h-100">

        <h5 className="mb-3">Watchlist</h5>
        <button
  className="btn btn-primary w-100 mt-3"
  onClick={addFunds}
>
  + Add ₹1000
</button>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search Stock..."
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

            <div className="d-flex align-items-center">

              <img
                src={stock.logo}
                alt={stock.name}
                width="40"
                height="40"
                className="rounded-circle me-2"
              />

              <div>

                <strong>{stock.name}</strong>

                <div
                  className={
                    stock.change.includes("-")
                      ? "text-danger"
                      : "text-success"
                  }
                >
                  {stock.change}
                </div>

              </div>

            </div>

            <div className="text-end">

              <h6>₹{stock.price.toLocaleString()}</h6>

              <button
                className="btn btn-success btn-sm me-2"
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
                className="btn btn-danger btn-sm"
                disabled={actionLoading}
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

    {/* Main Panel */}

    <div className="col-lg-9">
      <div className="d-flex justify-content-between align-items-center mb-4">
  <div>
    <h2 className="fw-bold">Good Morning 👋</h2>
    <p className="text-muted">
      Welcome back! Here's your portfolio overview.
    </p>
  </div>

  <div className="text-end">
    <h6 className="text-muted">Portfolio Value</h6>
    <h3 className="text-success">
      ₹{portfolioValue.toLocaleString()}
    </h3>
  </div>
</div>

<div className="row g-3 mb-4">
  <SummaryCards
    holdingCount={holdingCount}
    orderCount={orderCount}
    balance={balance}
    pnl={pnl}
    portfolioValue={portfolioValue}
  />
</div>

<div className="row g-3 mb-4">

  <div className="col-md-6">
    <div className="card shadow-sm border-0">
      <div className="card-body">
        <h5>Today's Performance</h5>

        <h2 className={pnl >= 0 ? "text-success" : "text-danger"}>
          {pnl >= 0 ? "+" : ""}
          ₹{pnl.toFixed(2)}
        </h2>

        <p className="text-muted">
          {totalInvestment > 0
            ? ((pnl / totalInvestment) * 100).toFixed(2)
            : 0}
          %
        </p>
      </div>
    </div>
  </div>

  <div className="col-md-6">
    <div className="card shadow-sm border-0">
      <div className="card-body">
        <h5>Total Investment</h5>

        <h2>
          ₹{totalInvestment.toLocaleString()}
        </h2>

        <small className="text-muted">
          Current Value ₹{currentValue.toLocaleString()}
        </small>
      </div>
    </div>
  </div>

</div>

<button
  className="btn btn-success mb-4"
  onClick={addFunds}
>
  Add ₹1000
</button>

<div className="card shadow-sm border-0 p-3 mb-4">

  <h5 className="mb-3">
    Portfolio Chart
  </h5>

  <ResponsiveContainer
    width="100%"
    height={250}
  >
    <LineChart data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="value"
        stroke="#00b386"
        strokeWidth={3}
      />
    </LineChart>
  </ResponsiveContainer>

</div>

<div className="card shadow-sm border-0 p-3 mb-4">

  <h5 className="mb-3">
    Live Market
  </h5>

  <TradingChart />

</div>

<div className="card shadow-sm border-0 p-3">

  <h5 className="mb-3">
    Portfolio Allocation
  </h5>

  <ResponsiveContainer
    width="100%"
    height={300}
  >
    <PieChart>
      <Pie
        data={chartData}
        dataKey="value"
        nameKey="name"
        outerRadius={100}
        label
      >
        {chartData.map((entry, index) => (
          <Cell
            key={index}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Pie>

      <Legend />
    </PieChart>
  </ResponsiveContainer>

</div>

{/* Holdings */}

<div className="card shadow-sm border-0 mt-4">
  <div className="card-body">

    <h5 className="mb-3">Holdings</h5>

    {holdings.length === 0 ? (
      <p>No holdings found</p>
    ) : (
      holdings.map((item) => (
        <div
          key={item._id}
          className="d-flex justify-content-between border-bottom py-2"
        >
          <div>
            <strong>{item.stockName}</strong>
          </div>

          <div className="text-end">
            <div>Qty : {item.quantity}</div>
            <div>₹ {item.avg}</div>
          </div>
        </div>
      ))
    )}

  </div>
</div>

{/* Positions */}

<div className="card shadow-sm border-0 mt-4">
  <div className="card-body">

    <h5 className="mb-3">Positions</h5>

    {positions.length === 0 ? (
      <p>No Positions</p>
    ) : (
      positions.map((item) => (
        <div
          key={item._id}
          className="d-flex justify-content-between border-bottom py-2"
        >
          <strong>{item.name}</strong>

          <div className="text-end">
            <div>Qty : {item.qty}</div>
            <div>₹ {item.price}</div>
          </div>
        </div>
      ))
    )}

  </div>
</div>

{/* Recent Orders */}

<div className="card shadow-sm border-0 mt-4">
  <div className="card-body">

    <h5 className="mb-3">Recent Orders</h5>

    {recentOrders.length === 0 ? (
      <p>No recent orders</p>
    ) : (
      recentOrders.map((order) => (
        <div
          key={order._id}
          className="d-flex justify-content-between border-bottom py-2"
        >
          <strong>{order.stockName}</strong>

          <span
            className={`badge ${
              order.type === "BUY"
                ? "bg-success"
                : "bg-danger"
            }`}
          >
            {order.type}
          </span>
        </div>
      ))
    )}

  </div>
</div>

</div>
</div>
)}
</>
);
}

export default DashboardContent;