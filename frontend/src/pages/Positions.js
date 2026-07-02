import React, { useEffect, useState } from "react";
import API from "../api/api";

function Positions() {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    fetchPositions();
  }, []);

  const fetchPositions = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/positions", {
        headers: {
          Authorization: token,
        },
      });

      setPositions(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Positions</h2>

      {positions.length === 0 ? (
        <p>No Positions Found</p>
      ) : (
        <div className="card shadow-sm">
          <div className="card-body">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Stock</th>
                  <th>Qty</th>
                  <th>Avg</th>
                  <th>LTP</th>
                  <th>Net</th>
                  <th>Day</th>
                </tr>
              </thead>

              <tbody>
                {positions.map((item) => (
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.qty}</td>
                    <td>₹{item.avg}</td>
                    <td>₹{item.price}</td>

                    <td
                      className={
                        item.net.includes("-")
                          ? "text-danger"
                          : "text-success"
                      }
                    >
                      {item.net}
                    </td>

                    <td
                      className={
                        item.day.includes("-")
                          ? "text-danger"
                          : "text-success"
                      }
                    >
                      {item.day}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Positions;