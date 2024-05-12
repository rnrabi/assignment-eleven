import useAllFoods from "../../hooks/useAllFoods";


const Gallery = () => {
    const { foods, refetch1 } = useAllFoods()
    console.log(foods)
    return (
        <div>
            <h2 className="text-center text-3xl font-bold">Our Gallery</h2>
            <section className="py-6 dark:bg-gray-100">
                <div className="container flex flex-col justify-center p-4 mx-auto">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">

                        {
                            foods.map(food => <div
                                key={food._id}
                                className=""
                            >
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={food.imageURL} />
                            </div>)
                        }

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;