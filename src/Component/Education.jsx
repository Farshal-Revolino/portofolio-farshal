import React from "react";

const Education = () => {
  // Daftar skill sudah diperbarui (Tailwind, Git, Bootstrap dihapus -> MySQL, Golang, Java ditambahkan)
  const skills = [
    { name: "React", img: "react/react-original.svg" },
    { name: "Laravel", img: "laravel/laravel-original.svg" },
    { name: "MySQL", img: "mysql/mysql-original.svg" },
    { name: "Golang", img: "go/go-original.svg" },
    { name: "Java", img: "java/java-original.svg" },
    { name: "GitHub", img: "github/github-original.svg" }
  ];

  return (
    <section className="py-5" id="education">
      <div className="container my-5">
        
        <div className="neo-divider pb-4 mb-5">
          <div className="neo-badge">KUALIFIKASI</div>
          <h2 className="text-start fw-bolder mb-2 text-uppercase" style={{ letterSpacing: "-1px", fontSize: "2.5rem", color: "#000" }}>
            Skills & Education
          </h2>
        </div>
        
        <div className="row g-4">
          {/* Kolom Kiri: Learning Path */}
          <div className="col-md-6" data-aos="fade-up">
            <div className="neo-card p-4 h-100" style={{ backgroundColor: "#f4f0e6" }}>
              <h4 className="fw-bolder border-bottom border-dark border-3 pb-3 mb-4 text-uppercase">
                Learning Path
              </h4>
              
              {/* Kotak Universitas */}
              <div className="p-3 mb-4 border border-3 border-dark bg-white" style={{ boxShadow: "4px 4px 0px #000" }}>
                <div className="d-flex justify-content-between align-items-center mb-2">
                   <h5 className="fw-bolder mb-0 text-uppercase">Universitas Pamulang</h5>
                   <span className="neo-badge mb-0" style={{ backgroundColor: "#d4ff32", fontSize: "11px" }}>2022 - 2026</span>
                </div>
                <p className="fw-bold mb-0">Teknik Informatika</p>
              </div>
              
              {/* Kotak SMK */}
              <div className="p-3 border border-3 border-dark bg-white" style={{ boxShadow: "4px 4px 0px #000" }}>
                <div className="d-flex justify-content-between align-items-center mb-2">
                   <h5 className="fw-bolder mb-0 text-uppercase">SMK Islamiyah Ciputat</h5>
                   <span className="neo-badge mb-0" style={{ backgroundColor: "#d4ff32", fontSize: "11px" }}>2019 - 2022</span>
                </div>
                <p className="fw-bold mb-0">Teknik Komputer Jaringan</p>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Skills Grid */}
          <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="neo-card p-4 h-100" style={{ backgroundColor: "#f4f0e6" }}>
              <h4 className="fw-bolder border-bottom border-dark border-3 pb-3 mb-4 text-uppercase">
                Tech Stack
              </h4>
              
              <div className="row text-center g-3">
                {skills.map((skill, index) => (
                   <div className="col-4 col-sm-4" key={index}>
                     <div 
                       className="p-3 border border-dark border-3 d-flex flex-column align-items-center justify-content-center h-100 bg-white" 
                       style={{ boxShadow: "4px 4px 0px #000", transition: "transform 0.2s" }}
                       onMouseEnter={(e) => e.currentTarget.style.transform = "translate(-2px, -2px)"}
                       onMouseLeave={(e) => e.currentTarget.style.transform = "translate(0, 0)"}
                     >
                        {/* Logo dari Devicon */}
                        <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.img}`} alt={skill.name} width="40" height="40" className="mb-2"/>
                        <div className="small fw-bolder text-uppercase">{skill.name}</div>
                     </div>
                   </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Education;