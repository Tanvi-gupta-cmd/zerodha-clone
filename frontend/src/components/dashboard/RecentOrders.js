import React from "react";

function RecentOrders({ recentOrders }) {
  return (
    <div className="card shadow-sm border-0 p-3 mb-4">
      <h5 className="mb-3">Recent Orders</h5>

      {recentOrders.length === 0 ? (
        <p>No recent orders</p>
      ) : (
        recentOrders.map((order) => (
          <div
            key={order._id}
            className="d-flex justify-content-between align-items-center border-bottom py-2"
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
  );
}

export default RecentOrders;