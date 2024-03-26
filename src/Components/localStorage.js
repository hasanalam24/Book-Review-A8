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

// read books

export const readBooks = (book) => {
    let books = getBook()
    const isExits = books.find(b => b.bookId === book.bookId)

    if (isExits) {
        return toast.error('ALready Bookmarked')
    }
    books.push(book)

    localStorage.setItem('books', JSON.stringify(books))
    toast.success('added successfully')
}

//add wishlist

export const addWishlist = (id) => {
    let books = getBook()
    const wishList = books.filter(book => book.bookId !== id)

    localStorage.setItem('books', JSON.stringify(wishList))
    toast.success('Blogs remove')
}