import { Link } from "react-router-dom";
import useAllFoods from "../../hooks/useAllFoods";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";


const AllFoods = () => {
    const { foods } = useAllFoods()
    console.log(foods)
    const [allFoods, setAllFoods] = useState(foods)
    console.log(allFoods)

    useEffect(() => {
        setAllFoods(foods);
    }, [foods]);

    const handleSearch = (e) => {
        e.preventDefault()
        const text = e.target.search.value;
        console.log(text)
        axios.get(`https://assignment-eleven-server-rouge.vercel.app/foods?search=${text}`)
            .then(res => {
                console.log(res.data)
                setAllFoods(res.data);
            })
    }

    if (allFoods.length == 0) {
        return <p>loading ........ </p>
    }

    return (
        <div>
            <Helmet>
                <title>CulinaryCanvas | All foods</title>
            </Helmet>
            <h2 className="text-center text-3xl font-bold my-6">All Foods</h2>
            <div className="mb-10">
                <form onSubmit={handleSearch} className="w-full space-y-1 dark:text-gray-800">
                    <label htmlFor="Search" className="hidden">Search</label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <button title="search" className="p-1 focus:outline-none focus:ring">
                                <BsSearch></BsSearch>
                            </button>
                        </span>

                        <input type="search" name="search" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 focus:dark:border-violet-600" />
                    </div>
                </form>

            </div>

            <div className="md:grid grid-cols-3 gap-6 space-y-5">
                {
                    allFoods.map(food => <div
                        key={food._id}
                        className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                        <div className="w-1/3 bg-cover" style={{ backgroundImage: `url('${food.imageURL}')` }}></div>


                        <div className="w-2/3 p-4 md:p-4">
                            <h1 className="text-xl font-bold text-gray-800 dark:text-white">{food.name}</h1>

                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{food.category}</p>

                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Quantity: {food.quantity}</p>

                            <div className="flex justify-between mt-3 item-center">
                                <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">${food.price}</h1>

                                <Link to={`/detail/${food._id}`}>
                                    <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Detail</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>



        </div>
    );
};

export default AllFoods;