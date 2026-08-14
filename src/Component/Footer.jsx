import React from "react";

const Footer = () => {
  return (
    <footer className="py-5 mt-5" id="footer" style={{ borderTop: "4px solid #000", backgroundColor: "#fff" }}>
      <div className="container">
        <div className="row g-4 align-items-center">
          
          <div className="col-md-6 text-start">
            <div className="neo-badge mb-2">KONTAK</div>
            <h2 className="fw-bolder text-uppercase mb-3" style={{ letterSpacing: "-1px", color: "#000" }}>
              Mari Berkolaborasi!
            </h2>
            <p className="fw-bold text-dark">
              Jika Anda memiliki proyek atau ingin sekadar berdiskusi, jangan ragu untuk menghubungi saya.
            </p>
          </div>
          
          <div className="col-md-6 d-flex flex-column align-items-md-end justify-content-center">
            <div className="d-flex gap-3 flex-wrap">
              <a href="mailto:farshal1810@gmail.com" className="btn neo-btn d-flex align-items-center gap-2">
                <i className="bi bi-envelope-fill"></i> EMAIL ME
              </a>
              {/* Tombol WA diberi warna stabilo */}
              <a href="https://wa.me/6287787801972" target="_blank" rel="noopener noreferrer" className="btn neo-btn d-flex align-items-center gap-2" style={{ backgroundColor: "#d4ff32" }}>
                <i className="bi bi-whatsapp"></i> WHATSAPP
              </a>
            </div>
          </div>
          
        </div>
        
        {/* Social & Copyright */}
        <div className="mt-5 pt-4 border-top border-dark border-3 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <div className="fw-bolder text-uppercase">
            &copy; {new Date().getFullYear()} FARSHAL REVOLINO.
          </div>
          
          <div className="d-flex gap-3">
            {/* Ikon GitHub */}
            <a 
              href="https://github.com/Farshal-Revolino" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-dark d-flex align-items-center justify-content-center" 
              style={{ width: "40px", height: "40px", border: "3px solid #000", borderRadius: "0", boxShadow: "3px 3px 0px #000", backgroundColor: "#fff" }}
            >
              <i className="bi bi-github fs-5"></i>
            </a>
            
            {/* Ikon Instagram */}
            <a 
              href="https://www.instagram.com/rvlinno?igsh=M2x0YWphYzFoY2V6&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-dark d-flex align-items-center justify-content-center" 
              style={{ width: "40px", height: "40px", border: "3px solid #000", borderRadius: "0", boxShadow: "3px 3px 0px #000", backgroundColor: "#d4ff32" }}
            >
              <i className="bi bi-instagram fs-5"></i>
            </a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;