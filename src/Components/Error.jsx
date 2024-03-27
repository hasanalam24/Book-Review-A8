import { useNavigate } from "react-router-dom";


const Error = () => {

    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }
    return (
        <div className="flex flex-col items-center justify-center gap-10 mt-32">
            <h1 className="text-7xl font-bold">Opps!!!!</h1>
            <p>Page Not Found</p>
            <button onClick={handleBack} className="btn bg-blue-300 rounded-lg p-4 text-white font-bold ">Go Back</button>
        </div>
    );
};

export default Error;