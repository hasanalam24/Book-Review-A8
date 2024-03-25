import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="">
            <div className="navbar bg-base-100 shadow-lg rounded-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pr-[2px]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                            <li><a className="text-lg font-medium">Home</a></li>
                            <li><a className="text-lg font-medium">Listed Books</a></li>
                            <li><a className="text-lg font-medium">Pages to Read</a></li>
                            <li><a className="text-lg font-medium">E-Books</a></li>
                            <li><a className="text-lg font-medium">Grand-Ramadan</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-lg lg:text-2xl p-0">Jannah Shop</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a className="text-lg font-semibold">Home</a></li>
                        <li><a className="text-lg font-semibold">Listed Books</a></li>
                        <li><a className="text-lg font-semibold">Pages to Read</a></li>
                        <li><a className="text-lg font-semibold">E-Books</a></li>
                        <li><a className="text-lg font-semibold">Grand-Ramadan</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <Link class="rounded-md px-4  md:py-2 lg:py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white">
                        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                        <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">Sign In</span>
                    </Link>
                    <Link className="relative rounded px-4 py-1 md:py-2 lg:py-2 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="relative">Sign Up</span>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Navbar;