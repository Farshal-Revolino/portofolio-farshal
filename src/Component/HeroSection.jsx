import React, { useEffect } from "react";
import imgHero from "../assets/farshal-foto.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className="container hero" id="aboutme">
      <div className="row align-items-center py-5 mt-5 col-reverse">
        {/* Bagian Kiri - Teks */}
        <div className="col-md-6" data-aos="fade-right" data-aos-duration="500">
          <div className="pe-md-4">
            <p className="hero-intro-text text-muted mb-2 fs-5">Hello, I'm</p>
            
            <h1 className="display-4 fw-bold hero-name-text mb-3">
              Farshal Revolino
            </h1>
            
            <div className="lead d-flex align-items-center fs-3 mb-4">
              <span className="me-2 text-nowrap">I am a</span>
              <div className="fw-bold">
                <Typewriter
                  options={{
                    strings: ["Student", "Full Stack Developer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>

            {/* Area Tombol CTA (Call to Action) */}
            <div className="d-flex gap-3 flex-wrap">
              <a 
                href="/cv-farshal-revolino.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-dark btn-lg px-4 rounded-pill shadow-sm d-flex align-items-center gap-2"
                download="CV_Farshal_Revolino.pdf"
              >
                <i className="bi bi-file-earmark-person"></i> Download CV
              </a>
              
              <a 
                href="#portfolio" 
                className="btn btn-outline-dark btn-lg px-4 rounded-pill d-flex align-items-center gap-2"
              >
                <i className="bi bi-arrow-down-circle"></i> View Projects
              </a>
            </div>
          </div>
        </div>

        {/* Bagian Kanan - Gambar (Sudah menggunakan style foto profil bulat) */}
        <div className="col-md-6 d-flex justify-content-center mt-5 mt-md-0">
          <img
            src={imgHero}
            width={350} 
            alt="Foto Farshal Revolino"
            className="heroImg img-fluid rounded-circle shadow-lg border border-3 border-white" 
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;