import React from "react";

const Header = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav 
      className="navbar navbar-expand-lg sticky-top py-3" 
      style={{ 
        backgroundColor: "rgba(15, 23, 42, 0.8)", 
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)" 
      }}
    >
      <div className="container">
        {/* Logo bergaya Modern */}
        <a 
          className="navbar-brand d-flex align-items-center gap-2" 
          href="#aboutme"
          onClick={(e) => handleScroll(e, "aboutme")}
          style={{ fontWeight: "800", letterSpacing: "-0.5px", color: "#f8fafc" }}
        >
          <span style={{ 
            backgroundColor: "#38bdf8", 
            color: "#0f172a",
            padding: "0.25rem 0.6rem", 
            borderRadius: "6px",
            fontWeight: "900"
          }}>
            FR
          </span>
          <span style={{ fontSize: "1.2rem" }}>Farshal Revolino</span>
        </a>
        
        <button
          className="navbar-toggler d-flex d-lg-none justify-content-center align-items-center"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ 
            border: "1px solid rgba(255,255,255,0.2)", 
            borderRadius: "8px", 
            backgroundColor: "transparent",
            width: "45px",
            height: "45px",
            padding: "0"
          }}
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 6H21" stroke="#f8fafc" strokeWidth="2" strokeLinecap="round"/>
            <path d="M3 12H21" stroke="#f8fafc" strokeWidth="2" strokeLinecap="round"/>
            <path d="M3 18H21" stroke="#f8fafc" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-3 align-items-center mt-3 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link fw-bold" style={{ color: "#e2e8f0" }} href="#aboutme" onClick={(e) => handleScroll(e, "aboutme")}>
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" style={{ color: "#e2e8f0" }} href="#portfolio" onClick={(e) => handleScroll(e, "portfolio")}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" style={{ color: "#e2e8f0" }} href="#education" onClick={(e) => handleScroll(e, "education")}>
                Education
              </a>
            </li>
            
            <li className="nav-item ms-lg-3">
              <a 
                className="btn elegant-btn" 
                href="#footer"
                onClick={(e) => handleScroll(e, "footer")}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;