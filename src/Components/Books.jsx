import { useLoaderData } from "react-router-dom";

const Books = ({ datas }) => {
    // const datas = useLoaderData()
    console.log(datas)
    return (
        <div>
            <h1>all data: {datas.length}</h1>
        </div>
    );
};

export default Books;