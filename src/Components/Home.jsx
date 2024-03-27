
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Books from "./Books";
import Chart from "./Chart";




const Home = () => {
    const datas = useLoaderData()
    // console.log(datas)
    return (
        <div>
            <Banner></Banner>
            <Books datas={datas}></Books>

        </div>
    );
};

export default Home;