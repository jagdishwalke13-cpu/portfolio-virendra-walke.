import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";
import { smoother } from "./utils/smoother";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    smoother.scrollTop(0);
    smoother.paused(true);

    const links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        e.preventDefault();
        const section = element.getAttribute("data-href");
        if (section) {
          const el = document.querySelector(section);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
        setMenuOpen(false);
      });
    });

    window.addEventListener("resize", () => {
      ScrollTrigger.refresh(true);
    });
  }, []);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          VW
        </a>
        <a
          href="mailto:virendrawalke009@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          virendrawalke009@gmail.com
        </a>

        {/* Hamburger button for mobile */}
        <button
          className={`hamburger ${menuOpen ? "hamburger-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          data-cursor="disable"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={menuOpen ? "nav-open" : ""}>
          <li>
            <a data-href="#about" href="#about" title="About">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work" title="Work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact" title="Contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>

      {/* Mobile nav overlay */}
      {menuOpen && (
        <div className="nav-overlay" onClick={() => setMenuOpen(false)}></div>
      )}
    </>
  );
};

export default Navbar;
