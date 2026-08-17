import React from "react";
import imgSpkWaseco from "../assets/spk-waseco.png";
import imgLinoFarm from "../assets/lino-farm.png";
import imgMarioPixel from "../assets/mario-pixel.jpeg";

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
    {
      id: 3,
      title: "MARIO PIXEL",
      badge: "2D GAME",
      description:
        "An action-packed 2D run-and-gun pixel art game inspired by classics like Metal Slug. Features retro mechanics and vibrant visuals.",
      imageUrl: imgMarioPixel,
      link: "https://github.com/Farshal-Revolino/MarioPixel.git",
    },
  ];

  return (
    <section className="portfolio-section py-5 mt-5" id="portfolio">
      <div className="container">

        <div className="elegant-divider pb-4">
          <div className="elegant-badge">MY WORK</div>
          <h1 className="text-start mb-2 pj-main-title" style={{ fontSize: "2.5rem" }}>
            Featured Projects
          </h1>
          <p className="text-muted" style={{ fontWeight: "500" }}>A selection of my recent work and technical achievements.</p>
        </div>

        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-md-6">
              <div className="card h-100 elegant-card p-4">

                {/* Bagian Gambar Proyek */}
                <div style={{ overflow: "hidden", borderRadius: "8px", marginBottom: "1.5rem" }}>
                  <img
                    src={project.imageUrl}
                    className="card-img-top"
                    alt={project.title}
                    style={{
                      transition: "transform 0.5s ease",
                    }}
                    onMouseOver={e => e.currentTarget.style.transform = "scale(1.05)"}
                    onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
                  />
                </div>

                <div className="card-body p-0 d-flex flex-column">
                  <div className="d-flex align-items-center mb-3 gap-2">
                    <span className="elegant-badge mb-0">{project.badge}</span>
                    <h4 className="card-title mb-0">{project.title}</h4>
                  </div>

                  <p className="card-text flex-grow-1">
                    {project.description}
                  </p>

                  <div className="mt-4">
                    {/* Tombol Interaktif */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn elegant-btn-outline w-100 py-2"
                    >
                      VIEW PROJECT <i className="bi bi-arrow-right gerak"></i>
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