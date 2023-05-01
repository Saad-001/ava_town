import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import brand_logo from "../../assets/Logo/logo_avatown_manual_1_basi_inverse.png";
import user_avatar from "../../assets/Logo/user_avatar.png";

const Navbar = () => {
  const bg_color = {
    background: "rgb(57,28,132)",
    // eslint-disable-next-line no-dupe-keys
    background:
      "linear-gradient(90deg, rgba(57,28,132,1) 21%, rgba(92,30,135,1) 44%, rgba(119,31,138,1) 100%)",
  };

  return (
    <div
      style={bg_color}
      className="flex justify-between items-center px-5 py-2 gap-10"
    >
      <div>
        <img className="h-14" src={brand_logo} alt="ava_town brand logo" />
      </div>
      <div className="w-2/6 p-1 xl:pl-8">
        <NavLink
          to="/"
          className="text-2xl align-middle text-white underline underline-offset-8"
        >
          Go To Marketpage
        </NavLink>
      </div>
      <div className="relative w-2/6">
        <input
          type="text"
          className="w-full pl-3 pr-10 py-1 border-2 border-gray-200 rounded-md hover:border-gray-300 focus:outline-none focus:border-gray-600 transition-colors"
        />
        <button className="block w-5 h-5 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors">
          {<CiSearch />}
        </button>
      </div>
      <div className="flex justify-around gap-3">
        <div className="flex justify-self-center text-white h-10 p-2 bg-gray-800 rounded-md relative">
          <span className="absolute -right-1 -top-2 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
            3
          </span>
          <IoNotificationsOutline className="text-2xl" />
        </div>
        <div className="flex justify-self-center-center text-white h-10 p-2 bg-gray-800 rounded-md relative">
          <span className="absolute -right-1 -top-2 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
            1
          </span>
          <HiOutlineShoppingCart className="text-2xl" />
        </div>
        <div className="bg-white flex justify-self-cente h-10 p-2 rounded-md">
          <img
            src={user_avatar}
            className="h-6 rounded-full"
            alt="user avatar icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
