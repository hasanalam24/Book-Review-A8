
import Book from "./Book";

const Books = ({ datas }) => {

    // console.log(datas)

    return (

        <div className="mt-10">
            <h1 className="text-center text-3xl font-bold">Our Books Collections</h1>
            <p className="text-center mt-3">Rare First Editions Collection: Delve into Literary History with Unique Finds That Define Rarity</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">

                {
                    datas.map(book => <Book book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;