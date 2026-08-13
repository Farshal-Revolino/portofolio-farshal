import React from "react";
// Pastikan nama file gambar ini sudah sesuai dengan yang ada di folder assets Anda
import imgSpkWaseco from "../assets/spk-waseco.png";
import imgLinoFarm from "../assets/lino-farm.png";

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "SPK Waseco",
      description:
        "A Decision Support System (SPK) developed for Waseco utilizing the Profile Matching method. This application evaluates alternatives by comparing them against ideal criteria, providing objective and accurate recommendations for decision-making.",
      imageUrl: imgSpkWaseco,
      link: "https://github.com/Farshal-Revolino/spk-waseco",
      animation: "fade-right",
    },
    {
      id: 2,
      title: "Lino Farm",
      description:
        "A professional company profile website for Lino Farm. This project showcases the farm's services, high-quality products, and operational values through an attractive and responsive design.",
      imageUrl: imgLinoFarm,
      link: "https://github.com/Farshal-Revolino/lino_farm",
      animation: "fade-left",
    },
  ];

  return (
    <section className="portfolio-section py-5 mt-5" id="portfolio">
      <div className="container">
        <h2 className="text-start mb-4 pj-main-title">My Projects</h2>
        <div className="row">
          {projects.map((project) => (
            <div
              key={project.id}
              className="col-md-6 mb-4" // col-md-6 agar 2 proyek ini mengisi layar dengan proporsional
              data-aos={project.animation}
              data-aos-duration="500"
              data-aos-easing="ease-in-sine"
            >
              <div className="card h-100"> {/* h-100 membuat tinggi kartu sejajar */}
                <img
                  src={project.imageUrl}
                  className="card-img-top"
                  alt={project.title}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text flex-grow-1">{project.description}</p>
                  
                  <div className="mt-auto">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn pj-btn"
                    >
                      View Project
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
}

export default Portfolio;