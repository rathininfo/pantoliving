import {useState} from "react";
import {FaBagShopping, FaBars} from "react-icons/fa6";
import {IoMdClose} from "react-icons/io";
import {Link, NavLink} from "react-router-dom";

const navItems = [
    {path: "/", label: "Home"},
    {path: "/furniture", label: "Furniture"},
    {path: "/shop", label: "Shop"},
    {path: "/aboutus", label: "About Us"},
    {path: "/contact", label: "Contact"},
];

const NavItems = ({toggleButton}) => {
    return (
        <ul className="flex flex-col md:flex-row md:space-x-8 items-center justify-center gap-8">
            {navItems.map((item, index) => (
                <li key={index} onClick={toggleButton}>
                    <NavLink to={item.path} className={({isActive}) => (isActive ? "active text-primary" : "")}>
                        {item.label}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

const Navbar = () => {
    const [isMenu, setIsMenu] = useState(false);

    const toggleButton = () => {
        setIsMenu((prev) => !prev);
    };

    return (
        <header className="w-full absolute z-50 px-4">
            <nav className="max-w-screen-2xl mx-auto flex justify-between items-center py-6">
                {/* logo */}
                <div className="text-white font-bold text-2xl">
                    <Link to="/">Panto Living</Link>
                </div>

                {/* hamburger icon */}
                <div onClick={toggleButton} className="block md:hidden cursor-pointer text-2xl">
                    {isMenu ? (
                        ""
                    ) : (
                        <button>
                            <FaBars className="text-white" />
                        </button>
                    )}
                </div>

                {/* desktop menu items */}
                <div className="hidden md:block text-white">
                    <ul>
                        <NavItems></NavItems>
                    </ul>
                </div>

                {/* mobile menu item */}
                <div
                    className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-8 text-white transition-transform trasform ${
                        isMenu ? "traslate-x-0" : "-translate-x-full"
                    }`}
                >
                    <div onClick={toggleButton} className="cursor-pointer absolute top-4 right-5">
                        <IoMdClose className="text-white"></IoMdClose>
                    </div>
                    <NavItems toggleButton={toggleButton}></NavItems>
                </div>

                {/* cart */}
                <div className="hidden md:block cursor-pointer text-4xl relative ">
                    <FaBagShopping className="text-white" />
                    <sup className="text-white absolute flex justify-center w-7 h-7 rounded-full bg-primary items-center text-sm top-1 -right-2">
                        0
                    </sup>
                </div>
            </nav>
        </header>
    );
};
export default Navbar;
