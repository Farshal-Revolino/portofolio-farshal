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
      style={{ backgroundColor: "#f4f0e6", borderBottom: "3px solid #000" }}
    >
      <div className="container">
        {/* Logo bergaya Neo-Brutalism */}
        <a 
          className="navbar-brand text-uppercase d-flex align-items-center gap-2" 
          href="#aboutme"
          onClick={(e) => handleScroll(e, "aboutme")}
          style={{ fontWeight: "900", letterSpacing: "-1px", color: "#000" }}
        >
          <span style={{ backgroundColor: "#d4ff32", padding: "0.2rem 0.5rem", border: "2px solid #000" }}>
            FR
          </span>
          Farshal Revolino
        </a>
        
        {/* ======================================================== */}
        {/* TAMBAHAN d-lg-none AGAR HILANG DI DESKTOP                  */}
        {/* ======================================================== */}
        <button
          className="navbar-toggler d-flex d-lg-none justify-content-center align-items-center"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ 
            border: "2px solid #000", 
            borderRadius: "0", 
            boxShadow: "3px 3px 0px #000",
            backgroundColor: "#fff",
            width: "45px",
            height: "45px",
            padding: "0"
          }}
        >
          {/* Menggunakan SVG agar garis pasti dirender */}
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 6H21" stroke="black" strokeWidth="3" strokeLinecap="square"/>
            <path d="M3 12H21" stroke="black" strokeWidth="3" strokeLinecap="square"/>
            <path d="M3 18H21" stroke="black" strokeWidth="3" strokeLinecap="square"/>
          </svg>
        </button>
        {/* ======================================================== */}
        
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-3 align-items-center mt-3 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link fw-bold text-dark text-uppercase" href="#aboutme" onClick={(e) => handleScroll(e, "aboutme")}>
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold text-dark text-uppercase" href="#portfolio" onClick={(e) => handleScroll(e, "portfolio")}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold text-dark text-uppercase" href="#education" onClick={(e) => handleScroll(e, "education")}>
                Education
              </a>
            </li>
            
            {/* Tombol Contact bergaya tebal */}
            <li className="nav-item ms-lg-3">
              <a 
                className="btn neo-btn fw-bolder" 
                href="#footer"
                onClick={(e) => handleScroll(e, "footer")}
              >
                CONTACT ME
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;