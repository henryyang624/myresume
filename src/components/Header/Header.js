import React from "react";

const Header = () => {
  return (
    <div class="container navbar">
      <header>
        <div class="logo">
          <h1>Henry</h1>
        </div>

        <nav>
          <ul>
            <li>
              <a href="#about">About me</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#work">My work</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
