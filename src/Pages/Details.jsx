import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { readBooks } from "../Components/localStorage";


const Details = () => {

    const handleRead = (book) => {
        // console.log(book)
        readBooks(book)
    }
    const wish = (book) => {
        // console.log(book)
        readBooks(book)
    }

    const detailsData = useLoaderData()
    const { id } = useParams()
    const detail = detailsData.find((u) => u.bookId == id)
    // console.log(detail)
    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = detail

    return (
        <div>
            <div className="card flex flex-col lg:flex-row gap-0 lg:gap-10 p-8 card-side bg-base-100 shadow-xl space-y-3 items-center">
                <figure><img className="lg:w-[550px] lg:h-[750px]" src={image} /></figure>
                <div className="space-y-3">
                    <h2 className="card-title mt-10">{bookName}</h2>
                    <h4>{author}</h4>
                    <div className="divider mb-1"></div>
                    <p>{category}</p>
                    <div className="divider mb-1"></div>
                    <p><span className="font-bold">Review:</span> {review}</p>

                    <div className="flex gap-4 items-center">
                        <p className="font-bold">Tags: </p>
                        {
                            tags.map((tag, idx) => <p key={idx} className="bg-gray-100 text-[#23BE0A] p-2 rounded-lg">{tag}</p>)
                        }
                    </div>
                    <div className="border "></div>
                    <div className="w-3/4 ">

                        <p className="flex  text-lg font-medium justify-between"><span className="opacity-75">Number Of Pages:</span> {totalPages}</p>

                        <p className="flex justify-between text-lg font-medium"><span className="opacity-75">Publisher:</span> {publisher}</p>

                        <p className="flex justify-between text-lg font-medium"><span className="opacity-75">Year of Publishing:</span> {yearOfPublishing}</p>

                        <p className="flex justify-between text-lg font-medium"><span className="opacity-75">Rating:</span> {rating}</p>


                    </div>
                    <div className="flex gap-4">
                        <div className="card-actions ">
                            <button onClick={() => handleRead(detail)} className="btn border-2 rounded-xl font-bold">Read</button>
                            <ToastContainer />
                        </div>
                        <div className="card-actions ">
                            <button onClick={() => wish(detail)} className="btn bg-[#50B1C9] text-white font-bold">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;