
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            {/* banner */}
            <div className="hero h-[500px] bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className='w-2/5 '>
                        <img src="book-img-7.jpg" className="h-[200px] mx-auto w-[200px] lg:w-[290px] lg:h-[350px] rounded-lg " />
                    </div>
                    <div className="w-[90%] mx-auto lg:w-3/5 ml-10">
                        <h1 className="text-2xl lg:text-5xl font-bold mb-10">Mystical Where Dreams and Stories Interweave</h1>

                        <Link to='/listbooks' className="relative mb-10 rounded px-5 py-2.5 overflow-hidden group bg-green-500  hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span className="relative">View The
                                List</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;