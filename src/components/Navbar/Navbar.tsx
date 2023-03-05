import React, { useEffect, useState } from "react";
import { navLinks } from "../../utils/navLinks";
import { Link } from "gatsby";
import logo from "../../images/logo.png";

const Navbar = () => {
  const [active, setActive] = useState<number>();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleClick = () => {
    setNavbarOpen(!navbarOpen);
  };
  useEffect(() => {
    if (typeof window !== "undefined" && !active) {
      const activeItem = /\/blog/.test(window.location.pathname)
        ? 4
        : window.location.pathname === "/contact"
        ? 3
        : window.location.pathname === "/portfolio"
        ? 2
        : 1;
      setActive(activeItem);
    }
    return;
  }, [setActive, active]);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="JK Beauty Room Tmi" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          onClick={handleClick}
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
          Menu
        </button>
        <div
          className={
            navbarOpen
              ? "navbar-collapse navbar-collapse-open"
              : "collapse navbar-collapse"
          }
          id="navbarMenu"
        >
          <ul className="navbar-nav d-flex">
            {navLinks &&
              navLinks.map((link) => {
                return (
                  <li key={link.id} className="nav-item">
                    {link.external ? (
                      <a href={link.href} className="nav-link" target="__blank">
                        {link.linkText}
                      </a>
                    ) : (
                      <Link
                        onClick={() => setActive(link.id)}
                        className={`nav-link nav-link--${
                          active === link.id ? "active" : ""
                        }`}
                        to={link.href}
                      >
                        {link.linkText}
                      </Link>
                    )}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
