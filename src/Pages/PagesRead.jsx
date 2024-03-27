

import { useEffect, useState } from 'react';
import Chart from '../Components/Chart';
import { getBook } from '../Components/localStorage';




const PagesRead = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        const storeBooks = getBook()
        setBooks(storeBooks)
    }, [])

    const bookArray = [...books]

    return (
        <div>
            <Chart bookArray={bookArray}></Chart>

        </div>
    );
};

export default PagesRead;