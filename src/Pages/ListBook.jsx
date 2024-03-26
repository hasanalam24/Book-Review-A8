import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const ListBook = () => {
    const [tab, setTab] = useState(0)
    return (
        <div>
            <h1 className="text-center text-2xl font-bold">Books</h1>
            <div className="text-center mt-8">
                <select className="select text-white font-bold max-w-xs bg-[#23BE0A]">
                    <option disabled>Sort By</option>
                    <option>Rating</option>
                    <option>Number of pages</option>
                    <option>Publisher year</option>

                </select>
            </div>

            <div>
                {/* tabs */}
                <div className="flex items-center  overflow-x-auto overflow-y-hidden  flex-nowrap dark:bg-gray-100 dark:text-gray-800 mt-8">
                    <Link to='/listbooks'

                        onClick={() => setTab(0)}
                        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 
                        ${tab === 0 ? 'border border-b-0' : 'border-b'}
                        
                        dark:border-gray-600 dark:text-gray-600`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span>Read Books</span>
                    </Link>
                    <Link to='/listbooks'

                        onClick={() => setTab(1)}
                        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 
                        ${tab === 1 ? 'border border-b-0' : 'border-b'}
                        
                        dark:border-gray-600 dark:text-gray-600`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span>Wishlist Books</span>
                    </Link>


                </div>
            </div>
        </div>
    );
};

export default ListBook;