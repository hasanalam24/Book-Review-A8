import { useEffect, useState } from "react";
import { getBook } from "./localStorage";
import Book from "./Book";


const ReadBook = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        const storeBooks = getBook()
        setBooks(storeBooks)
    }, [])
    return (

        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">

                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </>
    );
};

export default ReadBook;