import { appleImg, bagImg, searchImg } from '../utils';

const Navbar = () => {
  return (
    <header className="flex w-full items-center justify-between px-5 py-6 sm:px-10">
      <nav className="screen-max-width flex w-full">
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
