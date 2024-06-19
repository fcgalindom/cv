import React from 'react';
//import imagen1 from "../../assets/img/testimonials/testimonials-1.jpg"

function Testimonial({ quote, imgSrc, name, role }) {
  return (
    <div className="swiper-slide">
      <div className="testimonial-item">
        <p>
          <i className="bx bxs-quote-alt-left quote-icon-left"></i>
          {quote}
          <i className="bx bxs-quote-alt-right quote-icon-right"></i>
        </p>
        <img src={imgSrc} className="testimonial-img" alt="" />
        <h3>{name}</h3>
        <h4>{role}</h4>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <div className="testimonials container">
      <div className="section-title">
        <h2>Testimonials</h2>
      </div>

      <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
        <div className="swiper-wrapper">
           {/*
          <Testimonial
            quote="Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper."
            imgSrc= {imagen1}
            name="Saul Goodman"
            role="Ceo & Founder"
          />
         */}
        </div>
        <div className="swiper-pagination"></div>
      </div>

      <div className="owl-carousel testimonials-carousel"></div>
    </div>
  );
}

export default Testimonials;
