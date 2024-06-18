import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-5 py-5 sm:px-10">
      <nav className="screen-max-width flex w-full">
        <img src={appleImg} alt="apple logo" width={24} />

        <ul className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((item) => (
            <li className="cursor-pointer px-4 text-sm text-gray transition-all hover:text-white" key={item}>
              {item}
            </li>
          ))}
        </ul>

        <div className="flex items-baseline gap-6 max-sm:flex-1 max-sm:justify-end">
          <img src={searchImg} alt="search" width={24} />
          <img src={bagImg} alt="bag" width={24} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
