import { NavLink } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import { BiAlignJustify } from "react-icons/bi";
import "./Header.css";
import { BiHome, BiDonateHeart } from "react-icons/bi";
import { FcStatistics } from "react-icons/fc";

const Header = () => {
  return (
    <div>
      <nav className="max-w-6xl mx-auto py-5 flex justify-between">
        <NavLink to={"/"}>
          <img src={logo} alt="logo image" />
        </NavLink>
        <div className="dropdown mt-5">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <BiAlignJustify className="text-2xl"></BiAlignJustify>
          </label>
          <ul
            tabIndex={0}
            className=" menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 right-1"
          >
            <li className="py-2">
              <NavLink to={"/"}>
                Donation-<span className="text-lg font-bold">campaign</span>
              </NavLink>
              <ul className=" border-l-4 py-2 space-y-3">
                <li className="bg-transparent">
                  <NavLink to={"/donation"}>Donatation</NavLink>
                </li>
                <li>
                  <NavLink to={"/statistics"}>statistics</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <ul className="text-lg hidden lg:flex lg:items-center lg:gap-5">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/donation"}>Donation</NavLink>
          <NavLink to={"/statistics"}>Statistics</NavLink>
        </ul>
      </nav>

      {/* conditional nav */}
      <div className="">
        <div className="btm-nav py-3 h-[77px] px-3 custom-nav bg-blue-200 drop-shadow-lg  z-20">
          <NavLink to={"/"}>
            <BiHome></BiHome>
          </NavLink>
          <NavLink to={"/donation"}>
            <BiDonateHeart></BiDonateHeart>
          </NavLink>
          <NavLink to={"/statistics"}>
            <FcStatistics></FcStatistics>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
