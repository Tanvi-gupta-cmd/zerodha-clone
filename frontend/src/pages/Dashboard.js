import React, { useEffect, useState } from "react";
import API from "../api/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import OrderModal from "../components/dashboard/OrderModal";


import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

function Dashboard() {

const [holdings, setHoldings] = useState([]);
const [positions, setPositions] = useState([]);
const [recentOrders, setRecentOrders] = useState([]);

const [actionLoading, setActionLoading] = useState(false);
const [loading, setLoading] = useState(false);

const [balance, setBalance] = useState(0);
const [portfolioValue, setPortfolioValue] = useState(0);
const [totalInvestment, setTotalInvestment] = useState(0);
const [pnl, setPnl] = useState(0);

const [holdingCount, setHoldingCount] = useState(0);
const [orderCount, setOrderCount] = useState(0);

const [chartData, setChartData] = useState([]);

const [search, setSearch] = useState("");
const [newStock, setNewStock] = useState("");

const [showModal, setShowModal] = useState(false);
const [selectedStock, setSelectedStock] = useState(null);
const [quantity, setQuantity] = useState(1);
const [orderType, setOrderType] = useState("");

const [stocks, setStocks] = useState([
  {
    name: "RELIANCE",
    price: 2950,
    change: "+1.20%",
    logo: "/assets/reliance.png",
  },
  {
    name: "TCS",
    price: 3850,
    change: "+0.30%",
    logo: "/assets/tcs.png",
  },
  {
    name: "INFY",
    price: 1620,
    change: "-0.20%",
    logo: "/assets/infosys.png",
  },
  {
    name: "HDFCBANK",
    price: 1750,
    change: "+0.75%",
    logo: "/assets/hdfc logo.png",
  },
]);

const filteredStocks = stocks.filter((stock) =>
  stock.name.toLowerCase().includes(search.toLowerCase())
);

const loadData = async () => {
  try {
    setLoading(true);

    const token = localStorage.getItem("token");

    const holdingsRes = await API.get("/holdings", {
      headers: { Authorization: token },
    });

    const positionsRes = await API.get("/positions", {
      headers: { Authorization: token },
    });

    const ordersRes = await API.get("/order", {
      headers: { Authorization: token },
    });

    setHoldings(holdingsRes.data);
    setPositions(positionsRes.data);
    setRecentOrders(ordersRes.data.slice(0, 5));

    setHoldingCount(holdingsRes.data.length);
    setOrderCount(ordersRes.data.length);

    setLoading(false);

  } catch (err) {
    console.log(err);
    setLoading(false);
  }
};

const fetchBalance = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await API.get("/funds", {
      headers: {
        Authorization: token,
      },
    });

    setBalance(res.data.balance);
  } catch (err) {
    console.log(err);
  }
};

const addFunds = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await API.post(
      "/funds/add",
      {
        amount: 1000,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );

    setBalance(res.data.balance);
    toast.success("Funds Added");
  } catch (err) {
    console.log(err);
  }
};

useEffect(() => {
  loadData();
  fetchBalance();
}, []);

useEffect(() => {
  const total = holdings.reduce(
    (sum, item) => sum + item.quantity * item.avg,
    0
  );

  setPortfolioValue(total);

  let investment = 0;
  let current = 0;

  holdings.forEach((item) => {
    investment += item.avg * item.quantity;
    current += item.avg * item.quantity;
  });

  setTotalInvestment(investment);
  setPnl(current - investment);

  setChartData(
    holdings.map((item) => ({
      name: item.stockName,
      value: item.quantity * item.avg,
    }))
  );
}, [holdings]);

useEffect(() => {
  const interval = setInterval(() => {
    setStocks((prev) =>
      prev.map((stock) => {
        const random = (Math.random() * 20 - 10).toFixed(2);

        return {
          ...stock,
          price: +(stock.price + Number(random)).toFixed(2),
          change: `${random > 0 ? "+" : ""}${random}%`,
        };
      })
    );
  }, 2000);

  return () => clearInterval(interval);
}, []);

const addStock = () => {
  if (!newStock.trim()) return;

  if (
    stocks.some(
      (item) =>
        item.name.toLowerCase() === newStock.toLowerCase()
    )
  ) {
    toast.error("Stock already exists");
    return;
  }

  setStocks([
    ...stocks,
    {
      name: newStock.toUpperCase(),
      price: 1000,
      change: "+0.00%",
      logo: "",
    },
  ]);

  setNewStock("");
};

const confirmOrder = async () => {
  if (!selectedStock) return;

  try {
    setActionLoading(true);
    const token = localStorage.getItem("token");

    if (orderType === "BUY") {
      await API.post(
        "/order/buy",
        {
          stockName: selectedStock.name,
          quantity,
          price: selectedStock.price,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      toast.success("Stock Bought");
    } else {
      await API.post(
        "/order/sell",
        {
          stockName: selectedStock.name,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      toast.success("Stock Sold");
    }

    setShowModal(false);

    loadData();
    fetchBalance();
    setActionLoading(false);
  } catch (err) {
    console.log(err);
    setActionLoading(false);
    toast.error("Order Failed");
  }
};

return (
  <>
    <ToastContainer position="top-right" autoClose={2000} />

    <div className="d-flex">

      <Sidebar />

      <div
        className="flex-grow-1"
        style={{ background: "#f6f8fb", minHeight: "100vh" }}
      >

        <Topbar />

        <div className="container-fluid p-4">

         <div className="row g-3 mb-4">
  <div className="card summary-card shadow-sm border-0 p-3">

    <div className="summary-content">

      <div>
        <h6 className="text-muted">Holdings</h6>
        <h3>{holdingCount}</h3>
      </div>

      <i className="bi bi-bar-chart-fill summary-icon text-primary"></i>

    </div>

  </div>

  <div className="row g-3 mb-4">
  <div className="card summary-card shadow-sm border-0 p-3">

    <div className="summary-content">

      <div>
        <h6 className="text-muted">Orders</h6>
        <h3>{orderCount}</h3>
      </div>

      <i className="bi bi-cart-check-fill summary-icon text-success"></i>

    </div>

  </div>
</div>

  <div className="row g-3 mb-4">
  <div className="card summary-card shadow-sm border-0 p-3">

    <div className="summary-content">

      <div>
        <h6 className="text-muted">Balance</h6>
        <h3>₹{balance.toLocaleString()}</h3>
      </div>

      <i className="bi bi-wallet2 summary-icon text-warning"></i>

    </div>

  </div>
</div>

  <div className="row g-3 mb-4">
  <div className="card summary-card shadow-sm border-0 p-3">

    <div className="summary-content">

      <div>
        <h6 className="text-muted">Invested</h6>
        <h3>₹{totalInvestment.toLocaleString()}</h3>
      </div>

      <i className="bi bi-graph-up-arrow summary-icon text-info"></i>

    </div>

  </div>
</div>

  <div className="row g-3 mb-4">
  <div className="card summary-card shadow-sm border-0 p-3">

    <div className="summary-content">

      <div>
        <h6 className="text-muted">Portfolio</h6>
        <h3>₹{portfolioValue.toLocaleString()}</h3>
      </div>

      <i className="bi bi-pie-chart-fill summary-icon text-danger"></i>

    </div>

  </div>
</div>

  <div className="row g-3 mb-4">
  <div className="card summary-card shadow-sm border-0 p-3">

    <div className="summary-content">

      <div>
        <h6 className="text-muted">Profit / Loss</h6>

        <h3 className={pnl >= 0 ? "text-success" : "text-danger"}>
          ₹{pnl.toFixed(2)}
        </h3>
      </div>

      <i className="bi bi-currency-rupee summary-icon text-success"></i>

    </div>

  </div>
</div>
</div>

          {/* ================= LOADING ================= */}
          {loading ? (
            <div className="text-center my-5">
              <h5>Loading...</h5>
            </div>
          ) : (
            <div className="row">

              {/* ================= WATCHLIST ================= */}
              <div className="col-lg-3 mb-4">

                <div className="card shadow-sm border-0 p-3 h-100">

                  <h5 className="mb-3">Watchlist</h5>

                 <div className="search-box mb-3">
  <i className="bi bi-search"></i>

  <input
    type="text"
    placeholder="Search stocks..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
</div>

                  <div className="d-flex mb-3">

                    <input
                      className="form-control"
                      value={newStock}
                      onChange={(e) => setNewStock(e.target.value)}
                      placeholder="Add Stock"
                    />

                  <button
                   className="btn btn-primary"
                    onClick={addFunds}
                    >
                    Add ₹1000
                      </button>

                  </div>

                  <div className="add-stock-box mb-4">

  <input
    value={newStock}
    onChange={(e) => setNewStock(e.target.value)}
    placeholder="Add new stock"
  />

  <button onClick={addStock}>
    +
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
                         <h6 className="mb-2">

                        ₹{stock.price.toLocaleString()}</h6>

                        <button
                          className="btn btn-success btn-sm w-100 mb-1"
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
                          className="btn btn-danger btn-sm w-100"
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

              {/* ================= MAIN PANEL ================= */}
              <div className="col-lg-9">

                {/* Portfolio Allocation */}
                <div className="mt-4">
                  <h5>Portfolio Allocation</h5>

                  <ResponsiveContainer width="100%" height={300}>
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
                            fill={
                              ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"][
                                index % 4
                              ]
                            }
                          />
                        ))}
                      </Pie>

                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                {/* Holdings */}
                <div className="mt-4">
                  <h5 className="mb-3">Holdings</h5>

                  {holdings.length === 0 ? (
                    <p>No holdings found</p>
                  ) : (
                    holdings.map((item) => (
                      <div
                        key={item._id}
                        className="d-flex justify-content-between border-bottom py-2"
                      >
                        <strong>{item.stockName}</strong>
                        <div className="text-end">
                          <div>Qty : {item.quantity}</div>
                          <div>₹ {item.avg}</div>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Positions */}
                <div className="mt-5">
                  <h5 className="mb-3">Positions</h5>

                  {positions.length === 0 ? (
                    <p>No positions found</p>
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

                {/* Recent Orders */}
                <div className="card shadow-sm mt-4">
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

        </div>
      </div>
    </div>

    {/* Order Modal */}
    <OrderModal
      showModal={showModal}
      setShowModal={setShowModal}
      selectedStock={selectedStock}
      quantity={quantity}
      setQuantity={setQuantity}
      orderType={orderType}
      confirmOrder={confirmOrder}
    />
  </>
)
};

export default Dashboard;