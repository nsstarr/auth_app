import { NavLink } from 'react-router-dom';
//Hero Icons Imports
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { UserIcon } from '@heroicons/react/24/outline';
import { MapIcon } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Bars3Icon } from '@heroicons/react/24/outline';
//import logo
import LOGO from '../assets/logo.png';

interface NavbarProps {}

function Navbar({}: NavbarProps) {
  return (
    <nav className="flex m-auto text-sm font-medium justify-between list-none pb-8 text-dark_grey border-b-grey border-solid border-b-2">
      <div className="flex space-x-6 items-center">
        <figure className="text-4xl cursor-pointer px-5 hover:underline">
          <NavLink to="/">
            <img src={LOGO} alt="logo" className="w-44" />
          </NavLink>
        </figure>
        <li className="cursor-pointer tracking-wide hover:underline">
          <NavLink
            to="/catgories"
            className={({ isActive }) => (isActive ? 'underline' : '')}
          >
            <Bars3Icon className="w-8 text-orange mx-auto" />
            Categories
          </NavLink>
        </li>
        <li className="cursor-pointer tracking-wide hover:underline">
          <NavLink
            to="/brands"
            className={({ isActive }) => (isActive ? 'underline' : '')}
          >
            <Bars3Icon className="w-8 text-orange mx-auto" />
            Brands
          </NavLink>
        </li>
      </div>
      <form className="min-w-80 w-96 flex bg-grey justify-between border-solid rounded-md border-medium_grey hover:border-dark_grey border-[1px] p-3 invisible lg:visible">
        <input
          type="text"
          placeholder="Enter a keyword, item, SKU or MPN"
          name="Search"
          className="w-full outline-none bg-grey placeholder:text-dark_grey"
        />
        <a>
          <MagnifyingGlassIcon className="w-8 text-dark_grey" />
        </a>
      </form>

      <div className="flex space-x-6 items-center">
        <li className="cursor-pointer tracking-wide flex hover:underline">
          <NavLink
            to="/favouites"
            className={({ isActive }) => (isActive ? 'underline' : '')}
          >
            <MapIcon className="w-8 text-orange mx-auto" />
            Favourites
          </NavLink>
        </li>
        <li className="cursor-pointer tracking-wide hover:underline flex">
          <NavLink
            to="/signup"
            className={({ isActive }) => (isActive ? 'underline' : '')}
          >
            <UserIcon className="w-8 mx-auto text-orange " />
            My Account
          </NavLink>
        </li>
        <li className="cursor-pointertracking-wide flex hover:underline">
          <NavLink
            to="/basket"
            className={({ isActive }) => (isActive ? 'underline' : '')}
          >
            <ShoppingCartIcon className="w-8 mx-auto text-orange" />
            Basket
          </NavLink>
        </li>
      </div>
    </nav>
  );
}

export default Navbar;
