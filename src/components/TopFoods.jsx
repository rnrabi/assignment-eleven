import { Link } from "react-router-dom";
import useTopFoods from "../hooks/useTopFoods";


const TopFoods = () => {
    const { topFoods } = useTopFoods()
    console.log(topFoods)
    return (
        <div>
            <h2>This is top foods section</h2>
            <div className="md:grid grid-cols-3 gap-7">
                {
                    topFoods.map(top => <div
                        key={top._id}
                        className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800"
                    >

                        <img src={top.imageURL} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />

                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracking-wide">{top.name}</h2>
                                <p className="dark:text-gray-800">Category: {top.category}</p>

                                <p className="dark:text-gray-800">${top.price}</p>
                            </div>
                            <Link to={`/detail/${top._id}`}>
                                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50 btn">Details</button>
                            </Link>
                        </div>

                    </div>)
                }
            </div>

        </div>
    );
};

export default TopFoods;