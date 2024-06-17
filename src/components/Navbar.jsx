import React from "react";
import { appleImg, bagImg, searchImg } from "../utils";

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={appleImg} alt="apple logo" width={24} />

        <ul>
          {["Phones", "Tablets", "Macbooks"].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div>
          <img src={searchImg} alt="search" width={24} />
          <img src={bagImg} alt="bag" width={24} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
