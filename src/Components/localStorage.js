import { json } from "react-router-dom";
import { toast } from "react-toastify";

export const getBook = () => {
    let books = [];
    const storedBooks = localStorage.getItem('books')
    if (storedBooks) {
        books = JSON.parse(storedBooks)
    }
    return books
}
export const getBook2 = () => {
    let books = [];
    const storedBooks = localStorage.getItem('books')
    if (storedBooks) {
        books = JSON.parse(storedBooks)
    }
    return books
}

// read books

export const readBooks = (book) => {
    let books = getBook()
    const isExits = books.find(b => b.bookId === book.bookId)

    if (isExits) {
        return toast.error('Already Read Complete')
    }
    books.push(book)

    localStorage.setItem('books', JSON.stringify(books))
    toast.success('added successfully')
}

