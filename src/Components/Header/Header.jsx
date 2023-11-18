import { NavLink } from "react-router-dom";
import logo from "../../../public/Logo.png"
import "./Header.css"
const Header = () => {
    return (
        <nav className="max-w-6xl mx-auto py-5 flex justify-between">
            <div>
                <img src={logo} alt="logo image" />
            </div>

            <ul className="text-lg flex items-center gap-10">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/donation"}>Donation</NavLink>
                <NavLink to={"/statistics"}>Statistics</NavLink>
            </ul>
        </nav>
    );
};

export default Header;