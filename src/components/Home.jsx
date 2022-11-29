import React from "react";
import imagens from "../assets/db/imagens";
import Products from "./Products";
import './../assets/css/styles.css';


const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark text-black border-0">
        
        <img src={imagens.img1} className="card-img" alt="background" height="800px"/>
        <div className="card-img-overlay d-flex flex-column justify-content-center ">
            <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">LA FRUTERIA</h5>
          <p className="card-text lead fs-2 fw-bolder">
           ORGANICALLY GROWN & FRESHLY HARVESTED!
          </p>
            </div>
        </div>
      </div>
      <section className="fruit_section layout_padding">
    <div className="container">
      <div className="heading_container"> 
    <div className="container-fluid">
    <div className="fruit_container">
    <Products/>
  
    </div>
    </div>
      </div>
    </div>
  </section>
    </div>
  );
};

export default Home;