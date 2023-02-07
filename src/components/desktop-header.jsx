import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../assets/styles/desktop-header.css";

const DesktopHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("open");
    const linkItems = document.querySelectorAll(".link-item");

    linkItems.forEach((item) => {
      item.addEventListener("click", () => {
        navLinks.classList.remove("open");
        setIsMenuOpen(false);
      });
    });

    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="desktop-header">
      <div className="header-icon">
        <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
            <g fill="none" fillRule="evenodd">
              <circle cx="24" cy="24" r="24" fill="#FFF" />
              <path
                fill="#0B0D17"
                d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
              />
            </g>
          </svg>
        </Link>
      </div>
      <div className="l-link">
        <div className="the-line" />
        <div className="nav-links ">
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "selected" : null)}
          >
            <span className="link-item">
              <span className="link-num">00</span> Home
            </span>
          </NavLink>
          <NavLink
            to="/destination"
            className={({ isActive }) => (isActive ? "selected" : null)}
          >
            {" "}
            <span className="link-item">
              <span className="link-num">01</span> Destination
            </span>
          </NavLink>
          <NavLink
            to="/crew"
            className={({ isActive }) => (isActive ? "selected" : null)}
          >
            {" "}
            <span className="link-item">
              <span className="link-num">02</span> Crew
            </span>
          </NavLink>
          <NavLink
            to="/technology"
            className={({ isActive }) => (isActive ? "selected" : null)}
          >
            {" "}
            <span className="link-item">
              <span className="link-num">03</span>Technology{" "}
            </span>
          </NavLink>
        </div>
        <div className="open-tab">
          <button onClick={handleClick} className="menu-btn">
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
                <g fill="#D0D6F9" fillRule="evenodd">
                  <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                  <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
                </g>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
                <g fill="#D0D6F9" fillRule="evenodd">
                  <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
                </g>
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default DesktopHeader;
