import React from "react";
import Navbar from "../Components/NavBar";
import HeroSlider from "../Components/HeroSlider";
import WhyChooseSection from "../Components/WhyChooseSection";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>      
        <Navbar/>
        <HeroSlider/>
        <WhyChooseSection/>
        <Footer/>
    </div>
  );
};
export default Home;
