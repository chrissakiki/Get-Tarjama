import ClientWorkedWith from "../components/ClientWorkedWith";
import Hero from "../components/Hero";
import How from "../components/How";
import MainArea from "../components/MainAreas";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Choice from "../components/Choice";
import Milestone from "../components/Milestone";
import Rates from "../components/Rates";
import Client from "../components/Client";
import Footer from "../components/Footer";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 900,
    });
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Choice />
      <How />
      <Services />
      <MainArea />
      <Milestone />
      <ClientWorkedWith />
      <Client />
      <Rates />
      <Footer />
    </>
  );
}

export default Home;
