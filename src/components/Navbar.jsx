import React from 'react';
import { appleImg, bagImg, searchImg } from '../utils';

const Navbar = () => {
  return (
    <header
      className="w-full flex items-center justify-between
     py-6 px-5 sm:px-10"
    >
      <nav className="w-full screen-max-width flex">
        <img src={appleImg} alt="apple logo" width={24} />

        <ul>
          {['Phones', 'Tablets', 'Macbooks'].map((item) => (
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
