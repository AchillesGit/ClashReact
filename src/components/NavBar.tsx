import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/hooks";

const NavBar: React.FC = () => {
  const resources = useAppSelector((state) => state.resources);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          MyApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Dorf
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/army">
                Armee
              </Link>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                Gold:
                {resources.gold}
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                Wood:
                {resources.wood}
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                Stone:
                {resources.stone}
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                Steel:
                {resources.steel}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
