import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

function TradingChart() {
  return (
    <AdvancedRealTimeChart
      theme="light"
      symbol="NSE:RELIANCE"
      width="100%"
      height={500}
      interval="D"
      timezone="Asia/Kolkata"
      hide_side_toolbar={false}
      allow_symbol_change={true}
    />
  );
}

export default TradingChart;