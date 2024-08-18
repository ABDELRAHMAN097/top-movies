// import ReLinkct from 'reLinkct';
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import "./Nav.scss";

export default function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container-fluid">
          <Link className="navbar-brand  text-white" to="#">
            <span className="text-danger fw-bold">Top</span> Movies
          </Link>
          <button
            className="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="white"
              viewBox="0 0 30 30"
            >
              <path
                stroke="white"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M4 7h22M4 15h22M4 23h22"
              />
            </svg>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/MyLibrary">
                  <CiHeart className="fs-4" />
                  Favorites
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/Contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
