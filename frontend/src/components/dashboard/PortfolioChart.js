import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function PortfolioChart({ chartData }) {
  return (
    <div className="card shadow-sm border-0 p-3 mb-4">
      <h5 className="mb-3">Portfolio Performance</h5>

      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip
            formatter={(value) => [`₹${value}`, "Value"]}
          />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#00b386"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PortfolioChart;