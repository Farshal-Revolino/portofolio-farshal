import React, { useEffect } from "react";
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
        <div className="col-md-6" data-aos="fade-right" data-aos-duration="800">
          <div>
            <div className="elegant-badge">
              <i className="bi bi-code-slash me-2"></i>
              Open for opportunities
            </div>

            <h1
              className="text-uppercase mb-3 hero-name-text"
              style={{ lineHeight: "1.1", letterSpacing: "-1px" }}
            >
              Farshal <br /> Revolino
            </h1>

            {/* Kotak Animasi Typewriter bergaya Modern */}
            <div
              className="d-flex align-items-center fs-5 fw-bold mb-4"
              style={{ color: "#94a3b8" }}
            >
              <span className="me-2">I am a</span>
              <div style={{ color: "#38bdf8" }}>
                <Typewriter
                  options={{
                    strings: ["Bachelor of Computer Science", "Software Engineer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>

            <p className="lead mb-4" style={{ fontSize: "1.1rem", maxWidth: "450px" }}>
              Passionate about building scalable applications and creating elegant digital experiences. Let's build something amazing together.
            </p>

            {/* Area Tombol CTA (Call to Action) */}
            <div className="d-flex gap-3 flex-wrap mt-3">
              <a
                href="/cv-farshal-revolino.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn elegant-btn d-flex align-items-center"
                download="CV_Farshal_Revolino.pdf"
              >
                <i className="bi bi-file-earmark-person"></i> DOWNLOAD CV
              </a>

              <a
                href="#portfolio"
                className="btn elegant-btn-outline d-flex align-items-center"
              >
                <i className="bi bi-arrow-down-square"></i> VIEW PROJECTS
              </a>
            </div>
          </div>
        </div>

        {/* Bagian Kanan - Gambar */}
        <div className="col-md-6 d-flex justify-content-center mt-5 mt-md-0">
          <div data-aos="fade-left" data-aos-duration="800" className="position-relative">
            <div
              className="position-absolute"
              style={{
                inset: "-15px",
                background: "linear-gradient(45deg, #38bdf8, #818cf8)",
                borderRadius: "32px",
                opacity: "0.2",
                filter: "blur(20px)",
                zIndex: "0"
              }}
            ></div>
            <img
              src={imgHero}
              alt="Foto Farshal Revolino"
              className="img-fluid heroImg position-relative"
              style={{ zIndex: "1" }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;