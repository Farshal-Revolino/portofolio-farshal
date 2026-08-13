import React from "react";

const Education = () => {
  return (
    <section className="py-5" id="education">
      <div className="container">
        <h2 className="text-start mb-4 pj-main-title">Skills & Education</h2>
        
        <div className="row g-4">
          {/* Kolom Kiri: Learning Path (Kembali minimalis seperti desain asli Anda) */}
          <div className="col-md-6" data-aos="fade-up">
            <div className="p-4 bg-light rounded-3 h-100 border">
              <h4 className="border-bottom pb-3 mb-4">Learning Path</h4>
              
              <div className="mb-4">
                <h5 className="mb-1">Universitas Pamulang</h5>
                <p className="text-secondary mb-1">Teknik Informatika</p>
                <p className="text-muted small mb-0">2022 - Sekarang</p>
              </div>
              
              <div>
                <h5 className="mb-1">SMK Islamiyah Ciputat</h5>
                <p className="text-secondary mb-1">Teknik Informatika</p>
                <p className="text-muted small mb-0">2019 - 2022</p>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Skills (Menggunakan Grid Kotak dengan Ikon Asli) */}
          <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="p-4 bg-light rounded-3 h-100 border">
              <h4 className="border-bottom pb-3 mb-4">Skills</h4>
              
              <div className="row text-center g-3">
                
                {/* Skill: React */}
                <div className="col-4 col-sm-4 col-md-4">
                  <div className="p-3 bg-white shadow-sm rounded border h-100 d-flex flex-column align-items-center justify-content-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" width="45" height="45" className="mb-2"/>
                    <div className="small fw-semibold text-secondary">React.js</div>
                  </div>
                </div>

                {/* Skill: Laravel */}
                <div className="col-4 col-sm-4 col-md-4">
                  <div className="p-3 bg-white shadow-sm rounded border h-100 d-flex flex-column align-items-center justify-content-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" alt="Laravel" width="45" height="45" className="mb-2"/>
                    <div className="small fw-semibold text-secondary">Laravel</div>
                  </div>
                </div>

                {/* Skill: Bootstrap */}
                <div className="col-4 col-sm-4 col-md-4">
                  <div className="p-3 bg-white shadow-sm rounded border h-100 d-flex flex-column align-items-center justify-content-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" width="45" height="45" className="mb-2"/>
                    <div className="small fw-semibold text-secondary">Bootstrap</div>
                  </div>
                </div>

                {/* Skill: Git */}
                <div className="col-4 col-sm-4 col-md-4">
                  <div className="p-3 bg-white shadow-sm rounded border h-100 d-flex flex-column align-items-center justify-content-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" width="45" height="45" className="mb-2"/>
                    <div className="small fw-semibold text-secondary">Git</div>
                  </div>
                </div>

                {/* Skill: GitHub */}
                <div className="col-4 col-sm-4 col-md-4">
                  <div className="p-3 bg-white shadow-sm rounded border h-100 d-flex flex-column align-items-center justify-content-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" width="45" height="45" className="mb-2"/>
                    <div className="small fw-semibold text-secondary">GitHub</div>
                  </div>
                </div>

                {/* Skill: NPM */}
                <div className="col-4 col-sm-4 col-md-4">
                  <div className="p-3 bg-white shadow-sm rounded border h-100 d-flex flex-column align-items-center justify-content-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" alt="NPM" width="45" height="45" className="mb-2"/>
                    <div className="small fw-semibold text-secondary">NPM</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Education;