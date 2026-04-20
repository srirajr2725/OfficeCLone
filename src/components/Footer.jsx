import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="container">
        <footer className="content">
          <div className="tiny-menu">
            <ul className="tiny-menu-list">
              <li className="tiny-menu-item tiny-menu-disabled">Other pages :</li>
              <li className="tiny-menu-item">
                <a href="https://jumblesolver.me" target="_blank" rel="noreferrer">
                  Jumble Solver
                </a>
              </li>
              <li className="tiny-menu-item">
                <a href="https://wordfinder.pro" target="_blank" rel="noreferrer">
                  Word Finder
                </a>
              </li>
              <li className="tiny-menu-item">
                <a
                  href="https://scrabblewordfinder.org/words-with-friends-cheat"
                  target="_blank"
                  rel="noreferrer"
                >
                  Words with Friends Cheat
                </a>
              </li>
              <li className="tiny-menu-item">
                <a href="https://wordsolver.co" target="_blank" rel="noreferrer">
                  Word Solver
                </a>
              </li>
              <li className="tiny-menu-item">
                <Link to="/wordle-solver">Wordle Solver</Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
      <div className="container">
        <footer className="content">
          <div className="tiny-menu">
            <ul className="tiny-menu-list">
              <li className="tiny-menu-item tiny-menu-disabled">&copy; 2026</li>
              <li className="tiny-menu-item">
                <Link to="/">WordUnscrambler.me</Link>
              </li>
              <li className="tiny-menu-item">
                <Link to="/word-scramble">Word Scramble</Link>
              </li>
              <li className="tiny-menu-item">
                <Link to="/descrambler">Word Descrambler</Link>
              </li>
              <li className="tiny-menu-item">
                <Link to="/sitemap">Sitemap</Link>
              </li>
              <li className="tiny-menu-item">
                <Link to="/about">About</Link>
              </li>
              <li className="tiny-menu-item">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="tiny-menu-item">
                <Link to="/privacy-policy">Privacy</Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}
