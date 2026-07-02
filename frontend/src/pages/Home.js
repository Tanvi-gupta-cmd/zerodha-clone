import LandingNavbar from "../components/LandingNavbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <LandingNavbar />
      <Hero />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default Home;