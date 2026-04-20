import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../image.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <div className=" container">
      <nav className="tiny-nav" id="tinyNavTop">
        <Link to="/" className="brand">
          <img src={logo} alt="logo" width="200" height="45" style={{ marginTop: "3px" }} />
        </Link>

        <span className="menu-icon" onClick={toggleNav}>
          &#9776; MENU
        </span>
        <div
          id="mySidenav"
          className="sidenav"
          style={{ width: isOpen ? "250px" : "0" }}
        >
          <a href="javascript:void(0)" className="close-btn" onClick={toggleNav}>
            &times;
          </a>
          <ul>
            <li>
              <Link to="/" className="active" onClick={toggleNav}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/check-dictionary" onClick={toggleNav}>
                Check Dictionary
              </Link>
            </li>
            <li>
              <Link to="/descrambler" onClick={toggleNav}>
                Word Descrambler
              </Link>
            </li>
            <li>
              <Link to="/word-scramble" onClick={toggleNav}>
                Word Scramble
              </Link>
            </li>
            <li>
              <Link to="/wordfeud-helper" onClick={toggleNav}>
                Wordfeud Helper
              </Link>
            </li>
            <li>
              <Link to="/anagram-solver" onClick={toggleNav}>
                Anagram Solver
              </Link>
            </li>
            <li>
              <Link to="/random-word-generator" onClick={toggleNav}>
                Random Word Generator
              </Link>
            </li>
            <li>
              <Link to="/wordle-solver" onClick={toggleNav}>
                Wordle Solver
              </Link>
            </li>
            <li>
              <Link to="/quordle-solver" onClick={toggleNav}>
                Quordle Solver
              </Link>
            </li>
            <li>
              <Link to="/sitemap" onClick={toggleNav}>
                Sitemap
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleNav}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
