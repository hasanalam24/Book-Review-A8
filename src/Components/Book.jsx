import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    // console.log(book)
    const { bookName, image, author, rating, category, tags, publisher, yearOfPublishing, bookId } = book
    return (
        <Link to={`/details/${bookId}`}>
            <div className=" p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                <div className="bg-gray-100 p-6 rounded-xl">
                    <img src={image} alt="" className="object-cover object-center w-[150px] mx-auto rounded-md h-56 dark:bg-gray-500" />
                </div>
                <div className="mt-6 mb-2 space-y-5">

                    <div className="flex gap-3">
                        {
                            tags.map((tag, idx) => <p className="text-[#23BE0A] bg-gray-100 rounded-xl p-2 font-medium text-lg" key={idx}>{tag}</p>)
                        }
                    </div>

                    <h2 className="text-2xl font-semibold tracking-wide">{bookName}</h2>
                    <p className="text-lg font-medium">By: {author}</p>

                    <div className="flex justify-between">
                        <span>{publisher}</span>
                        <span>{yearOfPublishing}</span>
                    </div>

                    <div className="border border-dashed"></div>
                    <div className="flex justify-between text-lg">
                        <p>{category}</p>
                        <p className="flex gap-2 items-center">{rating} <FaRegStar></FaRegStar></p>
                    </div>
                </div>

            </div>
        </Link>
    );
};

export default Book;