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
                    <Link className="relative p-0.5 inline-flex items-center justify-center lg:font-bold overflow-hidden group rounded-md">
                        <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                        <span className="relative px-4 py-0 md:py-2 lg:py-2 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                            <span className="relative text-white">Sign In</span>
                        </span>
                    </Link>
                    <Link className="relative p-0.5 inline-flex items-center justify-center lg:font-bold overflow-hidden group rounded-md">
                        <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                        <span className="relative px-4 py-0 md:py-2 lg:py-2 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                            <span className="relative text-white">Sign Up</span>
                        </span>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Navbar;