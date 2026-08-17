import React from "react";

const Education = () => {
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
        
        <div className="elegant-divider pb-4 mb-5">
          <div className="elegant-badge">QUALIFICATIONS</div>
          <h2 className="text-start mb-2" style={{ fontSize: "2.5rem", fontWeight: "800", color: "#f8fafc" }}>
            Skills & Education
          </h2>
        </div>
        
        <div className="row g-4">
          {/* Kolom Kiri: Learning Path */}
          <div className="col-md-6" data-aos="fade-up">
            <div className="elegant-card p-4 h-100" style={{ backgroundColor: "rgba(30, 41, 59, 0.7)" }}>
              <h4 className="fw-bolder border-bottom pb-3 mb-4 text-uppercase" style={{ borderColor: "rgba(255,255,255,0.1) !important", color: "#f8fafc" }}>
                Learning Path
              </h4>
              
              {/* Kotak Universitas */}
              <div className="p-4 mb-4" style={{ 
                backgroundColor: "rgba(255,255,255,0.03)", 
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.05)"
              }}>
                <div className="d-flex justify-content-between align-items-center mb-2">
                   <h5 className="fw-bolder mb-0 text-uppercase" style={{ color: "#38bdf8", fontSize: "1.1rem" }}>Universitas Pamulang</h5>
                   <span className="elegant-badge mb-0" style={{ fontSize: "11px", padding: "0.2rem 0.5rem" }}>2022 - 2026</span>
                </div>
                <p className="fw-bold mb-0 text-muted">Teknik Informatika</p>
              </div>
              
              {/* Kotak SMK */}
              <div className="p-4" style={{ 
                backgroundColor: "rgba(255,255,255,0.03)", 
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.05)"
              }}>
                <div className="d-flex justify-content-between align-items-center mb-2">
                   <h5 className="fw-bolder mb-0 text-uppercase" style={{ color: "#38bdf8", fontSize: "1.1rem" }}>SMK Islamiyah Ciputat</h5>
                   <span className="elegant-badge mb-0" style={{ fontSize: "11px", padding: "0.2rem 0.5rem" }}>2019 - 2022</span>
                </div>
                <p className="fw-bold mb-0 text-muted">Teknik Komputer Jaringan</p>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Skills Grid */}
          <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="elegant-card p-4 h-100" style={{ backgroundColor: "rgba(30, 41, 59, 0.7)" }}>
              <h4 className="fw-bolder border-bottom pb-3 mb-4 text-uppercase" style={{ borderColor: "rgba(255,255,255,0.1) !important", color: "#f8fafc" }}>
                Tech Stack
              </h4>
              
              <div className="row text-center g-3">
                {skills.map((skill, index) => (
                   <div className="col-4 col-sm-4" key={index}>
                     <div 
                       className="p-3 d-flex flex-column align-items-center justify-content-center h-100" 
                       style={{ 
                         backgroundColor: "rgba(255,255,255,0.03)", 
                         borderRadius: "12px",
                         border: "1px solid rgba(255,255,255,0.05)",
                         transition: "all 0.3s ease" 
                       }}
                       onMouseEnter={(e) => {
                         e.currentTarget.style.transform = "translateY(-5px)";
                         e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.3)";
                       }}
                       onMouseLeave={(e) => {
                         e.currentTarget.style.transform = "translateY(0)";
                         e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                       }}
                     >
                        <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.img}`} alt={skill.name} width="40" height="40" className="mb-3"/>
                        <div className="small fw-bolder text-uppercase" style={{ color: "#e2e8f0" }}>{skill.name}</div>
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