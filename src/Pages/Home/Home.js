import React from "react";
import Footer from "../Shared/Footer/Footer";
import Banner from "./Banner";
import CompanyProfile from "./CompanyProfile";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="my-10 ">
      <h1 className="text-5xl font-bold text-red-400 font-serif mb-5">
        Computer Manufacturing Industry Limited
      </h1>
      <p className="text-3xl text-blue-400 font-mono font-bold">
        This mainly Manufacture Computer Casing and Power Supply
      </p>
      </div>
      
      <CompanyProfile></CompanyProfile>
          
      <Footer></Footer>
    </div>
  );
};

export default Home;
