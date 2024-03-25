
import Book from "./Book";

const Books = ({ datas }) => {

    // console.log(datas)

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
            {
                datas.map(book => <Book book={book}></Book>)
            }
        </div>
    );
};

export default Books;