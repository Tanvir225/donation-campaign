import { NavLink } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import { BiAlignJustify } from "react-icons/bi";
import "./Header.css";
const Header = () => {
  return (
    <nav className="max-w-6xl mx-auto py-5 flex justify-between">
      <div>
        <img src={logo} alt="logo image" />
      </div>
      <div className="dropdown mt-5">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <BiAlignJustify className="text-2xl"></BiAlignJustify>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 right-1"
        >
          <li>
            <NavLink to="/">
              Donation <span className="text-[#be0b11d0]">campaign</span>
            </NavLink>
            <ul className="p-2">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li className="">
                {" "}
                <NavLink>Donatation</NavLink>
              </li>
              <li>
                <NavLink>statistics</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <ul className="text-lg hidden flex items-center gap-10 lg:block">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/donation"}>Donation</NavLink>
        <NavLink to={"/statistics"}>Statistics</NavLink>
      </ul>
    </nav>
  );
};

export default Header;
