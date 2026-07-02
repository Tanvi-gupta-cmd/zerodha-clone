import "../styles/Home.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero" id="hero" data-aos="fade-up">

      <img
        src="/assets/homeHero.png"
        alt="Trading Platform"
        className="hero-image"
      />

      <h1>Invest Smarter. Trade Faster. Build Wealth.</h1>

      <p className="hero-subtitle">
        Experience a modern trading platform designed for investors of all
        levels. Invest in Stocks, Mutual Funds, ETFs, IPOs, Bonds, Futures,
        Options and more with powerful portfolio tracking, real-time market
        insights and secure transactions.
      </p>

      <div className="hero-buttons">
        <Link to="/signup" className="hero-btn">
          Get Started
        </Link>

        <Link to="/about" className="hero-btn secondary-btn">
          Learn More
        </Link>
      </div>

    </section>
  );
}

export default Hero;