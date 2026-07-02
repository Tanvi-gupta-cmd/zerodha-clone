import React, { useEffect, useState } from "react";
import API from "../api/api";

function Funds() {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");

  useEffect(() => {
    fetchBalance();
  }, []);

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
        amount: Number(amount),
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );

    setBalance(res.data.balance);
    setAmount("");
  } catch (err) {
    console.log(err);
  }
};

  return (
    <div className="container mt-4">
      <h2>Funds</h2>

      <div className="card p-4 shadow-sm">
        <h5>Available Balance</h5>
        <h2>₹{balance}</h2>
        <input
  type="number"
  className="form-control mt-3"
  placeholder="Enter Amount"
  value={amount}
  onChange={(e) => setAmount(e.target.value)}
/>

<button
  className="btn btn-success mt-3"
  onClick={addFunds}
>
  Add Funds
</button>
      </div>
    </div>
  );
}

export default Funds;