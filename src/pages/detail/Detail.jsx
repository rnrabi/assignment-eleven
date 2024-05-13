import { Link, useLoaderData } from "react-router-dom";


const Detail = () => {
    const detailData = useLoaderData()
    console.log(detailData)
    const { _id , imageURL, name, category, origin, price, textarea, addBy , purchase} = detailData;

    return (
        <div>
            <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800 shadow-2xl">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                    <img src={imageURL} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50 bg-gray-200">
                        <div className="space-y-2">
                            <div className="inline-block text-2xl font-semibold sm:text-3xl">{name}</div>
                            <p className="text-xs dark:text-gray-600">Category: {category}
                            </p>
                            <p className="text-xs dark:text-gray-600">Purchase: {purchase} people
                            </p>
                        </div>
                        <div className="dark:text-gray-800">
                            <p>${price}</p>
                            <p>Made By: {addBy.supplyer}</p>
                            <p>Origin: {origin}</p>
                            <p>Description: {textarea}</p>
                        </div>
                    </div>
                    <Link to={`/foodPurchase/${_id}`}>
                        <button className="btn bg-gray-400 w-full text-2xl">Purchase</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Detail;