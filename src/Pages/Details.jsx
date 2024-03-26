import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
    const detailsData = useLoaderData()
    const { idParams } = useParams()
    const detail = detailsData.find(u => u.bookId == idParams)
    console.log(detail)
    return (
        <div>
            <h1>name: </h1>
        </div>
    );
};

export default Details;