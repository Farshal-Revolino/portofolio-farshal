import React from "react";
import imgSpkWaseco from "../assets/spk-waseco.png";
import imgLinoFarm from "../assets/lino-farm.png";
import imgMarioPixel from "../assets/mario-pixel.jpeg";
import imgPmk from "../assets/pmk.png";
import imgPmkLogin from "../assets/pmk.login.jpeg";

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
    {
      id: 4,
      title: "PMK DETECT",
      badge: "MOBILE APP",
      description:
        "A computer vision-based mobile application for detecting signs of Foot-and-Mouth Disease (FMD) in cattle. It utilizes a deep learning model to identify FMD symptoms in real-time via the camera, helping farmers detect the disease early with high accuracy.",
      imageUrl: imgPmk,
      imageUrlSecondary: imgPmkLogin,
      link: "https://github.com/Farshal-Revolino",
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
          <p className="text-muted" style={{ fontWeight: "500" }}>
            A selection of my recent work and technical achievements.
          </p>
        </div>

        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-md-6">
              <div className="card h-100 elegant-card p-4">

                {/* Image Area — konsisten 220px untuk semua card */}
                <div className="project-img-box" style={{ marginBottom: "1.5rem" }}>
                  {project.imageUrlSecondary ? (
                    // PMK: dua gambar dalam satu box yang sama
                    <div style={{ display: "flex", width: "100%", height: "100%", gap: "6px" }}>
                      <div style={{ flex: "1.5", overflow: "hidden", borderRadius: "6px" }}>
                        <img
                          src={project.imageUrl}
                          alt={`${project.title} - Main`}
                          className="project-img"
                          onMouseOver={e => e.currentTarget.style.transform = "scale(1.05)"}
                          onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
                        />
                      </div>
                      <div style={{ flex: "1", overflow: "hidden", borderRadius: "6px" }}>
                        <img
                          src={project.imageUrlSecondary}
                          alt={`${project.title} - Login`}
                          className="project-img"
                          style={{ objectPosition: "top" }}
                          onMouseOver={e => e.currentTarget.style.transform = "scale(1.05)"}
                          onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
                        />
                      </div>
                    </div>
                  ) : (
                    // Card biasa: satu gambar
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="project-img"
                      onMouseOver={e => e.currentTarget.style.transform = "scale(1.05)"}
                      onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
                    />
                  )}
                </div>

                {/* Info Proyek */}
                <div className="card-body p-0 d-flex flex-column">
                  <div className="d-flex align-items-center mb-3 gap-2">
                    <span className="elegant-badge mb-0">{project.badge}</span>
                    <h4 className="card-title mb-0">{project.title}</h4>
                  </div>
                  <p className="card-text flex-grow-1">{project.description}</p>
                  <div className="mt-4">
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