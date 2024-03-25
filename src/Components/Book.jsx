import { FaRegStar } from "react-icons/fa";

const Book = ({ book }) => {
    // console.log(book)
    const { bookName, image, author, rating, category, tags, publisher, yearOfPublishing } = book
    return (
        <div>
            <div className=" p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                <img src={image} alt="" className="object-cover object-center w-full rounded-md h-52 dark:bg-gray-500" />
                <div className="mt-6 mb-2 space-y-5">

                    <div className="flex gap-3">
                        {
                            tags.map((tag, idx) => <p className="text-[#22C55E]" key={idx}>{tag}</p>)
                        }
                    </div>

                    <h2 className="text-2xl font-semibold tracking-wide">{bookName}</h2>
                    <p className="text-lg font-medium">By: {author}</p>

                    <div className="flex justify-between">
                        <span>{publisher}</span>
                        <span>{yearOfPublishing}</span>
                    </div>
                    <div className="flex justify-between text-lg">
                        <p>{category}</p>
                        <p className="flex gap-2 items-center">{rating} <FaRegStar></FaRegStar></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Book;