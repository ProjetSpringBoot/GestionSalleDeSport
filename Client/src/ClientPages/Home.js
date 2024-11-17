import React from "react";
import Navbar from "../Components/NavBar";
import HeroSlider from "../Components/HeroSlider";
import WhyChooseSection from "../Components/WhyChooseSection";
import ServicesGrid from "../Components/ServicesGrid";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>      
        <Navbar/>
        <HeroSlider/>
        <WhyChooseSection/>
        <ServicesGrid/>
        <Footer/>
    </div>
  );
};
export default Home;
