import { NavLink } from 'react-router-dom';
//Hero Icons Imports
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { UserIcon } from '@heroicons/react/24/outline';
import { MapIcon } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface NavbarProps {}

function Navbar({}: NavbarProps) {
  return (
    <nav className="flex m-auto justify-between list-none ">
      <div className="flex space-x-6 items-center">
        <figure className="font-display text-4xl cursor-pointer px-5 hover:underline">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'underline' : '')}
          >
            DIY Depot
          </NavLink>
        </figure>
        <li className="cursor-pointer hover:underline">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'underline' : '')}
          >
            About
          </NavLink>
        </li>
        <li className="cursor-pointer hover:underline">
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? 'underline' : '')}
          >
            Products
          </NavLink>
        </li>
        <li className="cursor-pointer hover:underline">
          <NavLink
            to="/reviews"
            className={({ isActive }) => (isActive ? 'underline' : '')}
          >
            Reviews
          </NavLink>
        </li>
        <li className="cursor-pointer hover:underline">
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'underline' : '')}
          >
            Contact
          </NavLink>
        </li>
      </div>
      <form className=" flex justify-between border-solid border-dark_grey border-b-[1.75px] invisible lg:visible">
        <input
          type="text"
          placeholder="Search"
          name="Search"
          className="bg-beige"
        />
        <a>
          <MagnifyingGlassIcon className=" w-6" />
        </a>
      </form>

      <div className="flex space-x-6 items-center">
        <li className="cursor-pointer flex hover:underline">
          <NavLink
            to="/branches"
            className={({ isActive }) => (isActive ? 'underline' : '')}
          >
            Branch Finder
          </NavLink>
          <MapIcon className="w-6 mx-1" />
        </li>
        <li className="cursor-pointer hover:underline flex">
          <NavLink
            to="/signup"
            className={({ isActive }) => (isActive ? 'underline' : '')}
          >
            Account
          </NavLink>
          <UserIcon className="w-6 mx-1" />
        </li>
        <li className="cursor-pointer flex hover:underline">
          <NavLink
            to="/basket"
            className={({ isActive }) => (isActive ? 'underline' : '')}
        >
            Basket
          </NavLink>
          <ShoppingCartIcon className="w-6 mx-1" />
        </li>
      </div>
    </nav>
  );
}

export default Navbar;
