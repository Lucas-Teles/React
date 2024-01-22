import React from "react";
import logoImg from "../../assets/img/logo-small.png";
import "./styles.css";

export class Navbar extends React.Component {
  render() {
    return (
      <header>
        <nav id="navbar">
          <div className="nav-brand">
            <img src={logoImg} alt="" />
            <h1>Noticias news</h1>
          </div>

          <ul className="nav-list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Info</a>
            </li>
            <li>
              <a href="/">Captures</a>
            </li>
            <li>
              <a href="/">More</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
