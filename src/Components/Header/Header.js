import React from "react";
import "./Header.css";

export default () => (
  <header className="nav">
    <ul>
      <li>
        <a href="/">Movies</a>
      </li>
      <li>
        <a href="/TV">TV</a>
      </li>
      <li>
        <a href="/Search">Search</a>
      </li>
    </ul>
  </header>
);
