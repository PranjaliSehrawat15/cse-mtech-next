"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (event, href) => {
    if (!href?.startsWith("#")) return;
    event.preventDefault();

    const id = href.slice(1);
    const element = document.getElementById(id);

    if (element) {
      const headerOffsetPx = 80;
      const y = element.getBoundingClientRect().top + window.scrollY - headerOffsetPx;
      window.scrollTo({ top: y, behavior: "smooth" });
    }

    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Overview", href: "#overview" },
    { label: "Highlights", href: "#highlights" },
    { label: "COE", href: "#coe" },
    { label: "Clubs", href: "#clubs" },
    { label: "Faculty", href: "#faculty" },
    { label: "Publications & Research", href: "#publications" },
    { label: "Program Details", href: "#details" },
    { label: "Placement", href: "#placement" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header className="sticky-top w-100 bg-white border-bottom border-light shadow-sm" style={{ zIndex: 1030 }}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between py-3">          

          {/* Desktop Navigation */}
          <nav className="d-none d-md-flex align-items-center mx-auto gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 small fw-medium text-secondary text-decoration-none rounded"
                style={{
                  borderBottom: `2px solid transparent`,
                  transition: "all 0.3s ease",
                }}
                onClick={(e) => handleNavClick(e, item.href)}
                onMouseEnter={(e) => {
                  e.target.style.borderBottomColor = "#f15b20";
                  e.target.style.color = "#f15b20";
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderBottomColor = "transparent";
                  e.target.style.color = "#6c757d"; // bootstrap secondary
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="d-md-none">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="btn btn-light p-2"
              style={{ color: "#164265" }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="d-md-none pb-4 d-flex flex-column gap-2 fade">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="d-block px-3 py-2 small fw-medium text-secondary text-decoration-none rounded bg-light"
                onClick={(e) => handleNavClick(e, item.href)}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#FFF3E0";
                  e.target.style.color = "#f15b20";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#f8f9fa"; // light bg
                  e.target.style.color = "#6c757d";
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
