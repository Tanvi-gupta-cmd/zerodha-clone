import React, { useEffect, useState } from "react";
import API from "../api/api";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await API.get("/order", {
       headers: {
        Authorization: token,
      },
    });
       console.log("Order:", res.data);
      setOrders(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Order History</h2>

      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            className="card p-3 mb-3 shadow-sm"
          >
            <h5>{order.stockName}</h5>
            <p>Quantity: {order.quantity}</p>
            <p>Price: ₹{order.price}</p>
            <span
            className={`badge ${
             order.type === "BUY"
             ? "bg-success"
              : "bg-danger"
              }`}
              >
              {order.type}
                 </span>
            <p>
  Date:{" "}
  
  {new Date(order.createdAt).toLocaleString()}
</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;