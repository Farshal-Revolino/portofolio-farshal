import React from "react";

const Footer = () => {
  return (
    <footer className="py-5 mt-5" id="footer" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.05)", backgroundColor: "rgba(15, 23, 42, 0.5)" }}>
      <div className="container">
        <div className="row g-4 align-items-center">
          
          <div className="col-md-6 text-start">
            <div className="elegant-badge mb-2">CONTACT</div>
            <h2 className="fw-bolder mb-3" style={{ letterSpacing: "-0.5px", color: "#f8fafc" }}>
              Let's Collaborate!
            </h2>
            <p className="text-muted" style={{ fontWeight: "500", maxWidth: "400px" }}>
              Whether you have a project in mind or just want to say hi, my inbox is always open. Let's build something great together.
            </p>
          </div>
          
          <div className="col-md-6 d-flex flex-column align-items-md-end justify-content-center">
            <div className="d-flex gap-3 flex-wrap">
              <a href="mailto:farshal1810@gmail.com" className="btn elegant-btn d-flex align-items-center gap-2">
                <i className="bi bi-envelope-fill"></i> EMAIL ME
              </a>
              <a href="https://wa.me/6287787801972" target="_blank" rel="noopener noreferrer" className="btn elegant-btn-outline d-flex align-items-center gap-2">
                <i className="bi bi-whatsapp"></i> WHATSAPP
              </a>
            </div>
          </div>
          
        </div>
        
        {/* Social & Copyright */}
        <div className="mt-5 pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="text-muted text-uppercase" style={{ fontSize: "0.85rem", letterSpacing: "1px", fontWeight: "600" }}>
            &copy; {new Date().getFullYear()} Farshal Revolino. All rights reserved.
          </div>
          
          <div className="d-flex gap-3">
            <a 
              href="https://github.com/Farshal-Revolino" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="d-flex align-items-center justify-content-center" 
              style={{ 
                width: "40px", height: "40px", 
                borderRadius: "50%", 
                backgroundColor: "rgba(255,255,255,0.05)",
                color: "#94a3b8",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(56, 189, 248, 0.1)";
                e.currentTarget.style.color = "#38bdf8";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
                e.currentTarget.style.color = "#94a3b8";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <i className="bi bi-github fs-5"></i>
            </a>
            
            <a 
              href="https://www.instagram.com/rvlinno?igsh=M2x0YWphYzFoY2V6&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="d-flex align-items-center justify-content-center" 
              style={{ 
                width: "40px", height: "40px", 
                borderRadius: "50%", 
                backgroundColor: "rgba(255,255,255,0.05)",
                color: "#94a3b8",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(56, 189, 248, 0.1)";
                e.currentTarget.style.color = "#38bdf8";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
                e.currentTarget.style.color = "#94a3b8";
                e.currentTarget.style.transform = "translateY(0)";
              }}
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