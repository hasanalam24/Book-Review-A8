import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
    const detailsData = useLoaderData()
    const { id } = useParams()
    const detail = detailsData.find((u) => u.bookId == id)
    console.log(detail)
    return (
        <div>
            <h1>name:{detail.author} </h1>
        </div>
    );
};

export default Details;