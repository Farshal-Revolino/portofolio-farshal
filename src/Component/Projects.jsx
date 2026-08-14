import React from "react";
// Pastikan path gambar Anda sudah benar
import imgSpkWaseco from "../assets/spk-waseco.png";
import imgLinoFarm from "../assets/lino-farm.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "SPK WASECO",
      badge: "WEB APP",
      description:
        "A Decision Support System (SPK) developed for Waseco utilizing the Profile Matching method. Evaluates alternatives by comparing them against ideal criteria.",
      imageUrl: imgSpkWaseco,
      link: "https://github.com/Farshal-Revolino/spk-waseco",
    },
    {
      id: 2,
      title: "LINO FARM",
      badge: "E-COMMERCE",
      description:
        "A professional company profile website for Lino Farm. Showcases the farm's services, high-quality products, and operational values.",
      imageUrl: imgLinoFarm,
      link: "https://github.com/Farshal-Revolino/lino_farm",
    },
  ];

  return (
    <section className="portfolio-section py-5 mt-5" id="portfolio">
      <div className="container">
        
        <div className="neo-divider pb-4">
          <div className="neo-badge">MY WORK</div>
          <h1 className="text-start fw-bolder mb-2 text-uppercase" style={{ letterSpacing: "-1px", fontSize: "3rem" }}>
            My Projects
          </h1>
          <p className="text-dark fw-bold">Berikut adalah hasil eksplorasi dan pengembangan sistem yang telah saya buat.</p>
        </div>

        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-md-6">
              <div className="card h-100 neo-card p-4">
                
                {/* Bagian Gambar Proyek yang Sudah Dikotakin */}
                <img
                  src={project.imageUrl}
                  className="card-img-top mb-4"
                  alt={project.title}
                  style={{ 
                    borderRadius: 0, 
                    border: "4px solid #000", 
                    boxShadow: "6px 6px 0px #000",
                    backgroundColor: "#fff",
                    padding: "0.5rem" 
                  }}
                />
                
                <div className="card-body p-0 d-flex flex-column">
                  <div className="d-flex align-items-center mb-3 gap-2">
                    <span className="neo-badge mb-0">{project.badge}</span>
                    <h4 className="card-title fw-bolder mb-0">{project.title}</h4>
                  </div>
                  
                  <p className="card-text flex-grow-1 fw-bold">
                    {project.description}
                  </p>
                  
                  <div className="mt-4">
                    {/* Tombol Interaktif dengan Ikon Panah */}
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn neo-btn w-100 py-2 fs-5"
                    >
                      LIHAT PROYEK <i className="bi bi-arrow-right gerak fw-bolder"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;