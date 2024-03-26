import { useEffect, useState } from "react";
import { getBook } from "./localStorage";

import { SlLocationPin } from "react-icons/sl";
import { IoPeopleSharp } from "react-icons/io5";
import { SiGoogledocs } from "react-icons/si";
import { Link } from "react-router-dom";

const Wishlist = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        const storeBooks = getBook()
        setBooks(storeBooks)
    }, [])


    return (

        <>
            <div className="flex flex-col gap-5 mt-5">

                {


                    books.map(book =>
                        <div key={book.bookId}>
                            <div className="card flex flex-col lg:flex-row card-side bg-base-100 border-2 rounded-xl p-4 gap-10">
                                <figure className="bg-gray-100 p-8 mx-auto lg:mx-0 rounded-xl w-[200px]"><img className="w-[100px]" src={book.image} alt="Movie" /></figure>
                                <div className="space-y-3">
                                    <h2 className="text-2xl font-bold text-center lg:text-start">{book.bookName}</h2>
                                    <p className="text-md font-medium text-center lg:text-start"><span>By: </span>{book.author}</p>
                                    <div className="flex flex-col lg:flex-row gap-2 lg:gap-5 items-center space-y-2">

                                        <div className="flex items-center gap-2">
                                            <span className="font-bold">Tag :</span>
                                            {
                                                book.tags.map((tag, idx) => <p className="bg-gray-100 lg:font-semibold rounded-lg text-[#23BE0A] p-2" key={idx}>{tag}</p>)
                                            }
                                        </div>
                                        <p className="font-semibold opacity-85 flex items-center lg:gap-2"> <SlLocationPin className="text-lg"></SlLocationPin> Year of Publishing: {book.yearOfPublishing}</p>
                                    </div>
                                    <div className="flex gap-8 opacity-85 font-semibold">
                                        <p className="flex gap-2 items-center font-semibold"> <IoPeopleSharp className="text-lg"></IoPeopleSharp> Publisher: {book.publisher}</p>

                                        <p className="flex gap-2 items-center font-semibold"> <SiGoogledocs className="text-lg opacity-70"></SiGoogledocs> Page : {book.totalPages}</p>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="bg-blue-50 p-2 rounded-xl"><p className="text-[#378DFA] font-semibold">Category: {book.category}</p></div>
                                        <div className="bg-orange-50 p-2 rounded-xl"><p className="text-[#FFAC33]">Rating: {book.rating}</p></div>
                                        <div className="bg-[#23BE0A] p-2 rounded-xl">
                                            <Link to={`/details/${book.bookId}`} className="text-white font-semibold">View Details</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </>
    );
};

export default Wishlist;