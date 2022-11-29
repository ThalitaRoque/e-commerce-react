import React from 'react';
import './../assets/css/styles.css';
import imagens from "../assets/db/imagens";


const Footer = () => {
  return (
    <>
  <section className="info_section layout_padding">
<div className="info_section layout_padding"/>
  <div className="container">
    <div className="info_logo">
      <h2>
        LA FRUTERIA
      </h2>
    </div>
    <div className="info_contact">
      <div className="row">
        <div className="col-md-4">
          <a href="">
            <img src={imagens.img8} alt=""/>
            <span>
              Passages of Lorem Ipsum available
            </span>
          </a>
        </div>
        <div className="col-md-4">
          <a href="">
            <img src= {imagens.img7} alt=""/>
            <span>
              Call : +012334567890
            </span>
          </a>
        </div>
        <div className="col-md-4">
          <a href="">
            <img src={imagens.img6} alt=""/>
            <span>
              demo@gmail.com
            </span>
          </a>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-8 col-lg-9">
        <div className="info_form">
          <form action="">
            <input type="text" placeholder="Enter your email"/>
            <button>
              subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="col-md-4 col-lg-3">
        <div className="info_social">
          <div>
            <a href="">
              <img src={imagens.img2} alt=""/>
            </a>
          </div>
          <div>
            <a href="">
              <img src={imagens.img5} alt=""/>
            </a>
          </div>
          <div>
            <a href="">
              <img src={imagens.img4} alt=""/>
            </a>
          </div>
          <div>
            <a href="">
              <img src={imagens.img3} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
  </section>


      <section classNameName="container-fluid footer_section ">
    <p>&copy; <span id="displayYear"></span> All Rights Reserved. Design by
      <a href="https://html.design/">Free Html Templates</a>
    </p>
  </section>
    </>
  )
}

export default Footer