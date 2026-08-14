import React, { useEffect } from "react";
// Pastikan gambar ini ada di folder src/assets
import imgHero from "../assets/farshal-foto.jpeg"; 
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className="container hero py-5 mt-4" id="aboutme">
      <div className="row align-items-center col-reverse g-5">
        
        {/* Bagian Kiri - Teks */}
        <div className="col-md-6" data-aos="fade-right" data-aos-duration="500">
          <div>
            {/* <div className="neo-badge mb-3"></div> */}
            
            <h1 
              className="text-uppercase mb-3" 
              style={{ fontSize: "3.5rem", fontWeight: "900", lineHeight: "1", letterSpacing: "-2px", color: "#000" }}
            >
              Farshal <br /> Revolino
            </h1>
            
            {/* Kotak Animasi Typewriter bergaya Brutalism */}
            <div 
              className="d-flex align-items-center fs-5 fw-bold mb-4 text-uppercase" 
              style={{ border: "3px solid #000", display: "inline-flex", padding: "0.5rem 1rem", backgroundColor: "#fff", boxShadow: "4px 4px 0px #000" }}
            >
              <span className="me-2">I AM A</span>
              <div style={{ color: "#000" }}>
                <Typewriter
                  options={{
                    strings: ["BACHELOR OF COMPUTER SCIENCE", "FULL STACK DEVELOPER"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>

            {/* Area Tombol CTA (Call to Action) */}
            <div className="d-flex gap-3 flex-wrap mt-3">
              <a 
                href="/cv-farshal-revolino.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn neo-btn d-flex align-items-center gap-2"
                download="CV_Farshal_Revolino.pdf"
              >
                <i className="bi bi-file-earmark-person"></i> DOWNLOAD CV
              </a>
              
              <a 
                href="#portfolio" 
                className="btn neo-btn d-flex align-items-center gap-2"
                style={{ backgroundColor: "#fff" }}
              >
                <i className="bi bi-arrow-down-square"></i> VIEW PROJECTS
              </a>
            </div>
          </div>
        </div>

        {/* Bagian Kanan - Gambar */}
        <div className="col-md-6 d-flex justify-content-center mt-5 mt-md-0">
          <div data-aos="fade-left" data-aos-duration="500">
            <img
              src={imgHero}
              alt="Foto Farshal Revolino"
              className="img-fluid" 
              style={{ 
                width: "320px", 
                border: "4px solid #000", 
                boxShadow: "10px 10px 0px #000",
                borderRadius: "0", // Tidak lagi bulat, menggunakan sudut tajam
                backgroundColor: "#fff",
                padding: "0.5rem"
              }}
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;