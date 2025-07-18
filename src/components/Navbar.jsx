import { FaBagShopping, FaBars } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const navItems = [
    {path: "/furniture", label:"Furniture"},
    {path: "/shop", label:"Shop"},
        {path: "/aboutus", label:"About Us"},
           {path: "/contact", label:"Contact"}
]

const NavItems = ()=>{
return(
    <ul className="flex flex-col md:flex-row md:space-x-8 items-center justify-center gap-8">
      {navItems.map((item,index)=>(
        <li key={index}>
            <NavLink to={item.path}   
            className={({ isActive }) =>
                      isActive
                        ? "active text-primary"
                        : ""
                    }  >{item.label}</NavLink >
        </li>
      ))}
    </ul>
)
    

}

const Navbar = () => {
    return (
     <header>
        <nav className="max-w-screen-2xl container flex justify-between items-center py-6 px-4 mx-auto">
            {/* logo */}
            <div className="logo">
                <NavLink to="/">Panto Living</NavLink>
            </div>

            {/* hamburger icon */}

            <div className="block md:hidden cursor-pointer text-2xl">
                <button onClick={handleHamburger}><FaBars /></button>
            </div>

            {/* desktop menu items */}
            <div className="hidden md:block">
                <ul>
                 <NavItems></NavItems>
                </ul>
            </div>
{/* cart */}
            <div className="hidden md:block cursor-pointer text-4xl relative">
                    <FaBagShopping />
                        <sup className="text-white absolute flex justify-center w-7 h-7 rounded-full bg-primary items-center text-sm top-1 -right-2">0</sup>
            </div>
        </nav>
     </header>
    );
};
export default Navbar;