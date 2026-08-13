import React from "react";

const Header = () => {
  // Fungsi untuk menciptakan efek smooth scrolling (meluncur mulus)
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    // Tambahan sticky-top, bg-white, shadow-sm, dan py-3 (padding atas-bawah)
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm py-3">
      <div className="container">
        
        {/* Nama Brand Dibuat Lebih Menonjol */}
        <a 
          className="navbar-brand fw-bold fs-4" 
          href="#aboutme"
          onClick={(e) => handleScroll(e, "aboutme")}
        >
          <span className="">Farshal</span> Revolino
        </a>
        
        <button
          className="navbar-toggler border-0" // border-0 untuk menghilangkan kotak hitam saat di-klik di HP
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-3"> {/* gap-3 memberi jarak napas antar menu */}
            
            <li className="nav-item">
              <a 
                className="nav-link fw-semibold" 
                href="#aboutme"
                onClick={(e) => handleScroll(e, "aboutme")}
              >
                About Me
              </a>
            </li>
            
            <li className="nav-item">
              <a 
                className="nav-link fw-semibold" 
                href="#portfolio"
                onClick={(e) => handleScroll(e, "portfolio")}
              >
                Projects
              </a>
            </li>
            
            <li className="nav-item">
              <a 
                className="nav-link fw-semibold" 
                href="#education"
                onClick={(e) => handleScroll(e, "education")}
              >
                Education
              </a>
            </li>
            
            <li className="nav-item">
              <a 
                className="nav-link fw-semibold" 
                href="#footer"
                onClick={(e) => handleScroll(e, "footer")}
              >
                Contact
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;