import { useEffect, useState } from "react";
import API from "../api/api";

function Holdings() {
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    fetchHoldings();
  }, []);

  const fetchHoldings = async () => {
    try {
      const token = localStorage.getItem("token");

const res = await API.get("/holdings", {
  headers: {
    Authorization: token,
  },
});

console.log(res.data);

      setHoldings(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Holdings</h2>

      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Stock</th>
            <th>Quantity</th>
            <th>Average Price</th>
          </tr>
        </thead>

        <tbody>
          {holdings.map((holding) => (
            <tr key={holding._id}>
              <td>{holding.stockName}</td>
              <td>{holding.quantity}</td>
              <td>₹{holding.avg.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Holdings;