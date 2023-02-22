import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Offer from "./components/Offer";
import About from "./components/About";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Offer />
      <About />
      
      
      
    </div>
  );
}
