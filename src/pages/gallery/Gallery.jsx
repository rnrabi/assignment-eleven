import { useContext, useState } from "react";
import useAllFoods from "../../hooks/useAllFoods";
import { AuthContext } from "../../contextApi/ContextProvider";
import { Helmet } from "react-helmet-async";


const Gallery = () => {
    const { user } = useContext(AuthContext)
    const { foods } = useAllFoods()
    const [hoverStates, setHoverStates] = useState(new Array(foods.length).fill(false));
    console.log(foods);



    const handleMouseEnter = (index) => {
        const updatedHoverStates = [...hoverStates];
        updatedHoverStates[index] = true;
        setHoverStates(updatedHoverStates);
    };

    const handleMouseLeave = (index) => {
        const updatedHoverStates = [...hoverStates];
        updatedHoverStates[index] = false;
        setHoverStates(updatedHoverStates);
    };

    const handleFeedback = (e) => {
        e.preventDefault()
        const form = e.target;
        const feedUser = user?.displayName;
        const photo = form.photo.value;
        const feedback = form.feedback.value;
        console.log(feedUser, photo, feedback)
    }


    return (
        <div>
            <Helmet>
                <title>CulinaryCanvas | Gallery</title>
            </Helmet>
            <h2 className="text-center text-3xl font-bold">Our Gallery</h2>
            <section className="py-6 dark:bg-gray-100">
                <div className="container flex flex-col justify-center p-4 mx-auto">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">

                        {
                            foods.map((food, index) => <div
                                key={food._id}
                                className="relative"

                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={() => handleMouseLeave(index)}
                            >
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={food.imageURL} />
                                {hoverStates[index] && (
                                    <div className="absolute top-1/3 left-1">
                                        <h2>User name</h2>
                                        <p>feed back</p>
                                        <button className="btn" onClick={() => document.getElementById('my_modal').showModal()}>Add</button>
                                    </div>
                                )}
                            </div>)
                        }


                        <dialog id="my_modal" className="modal">
                            <div className="modal-box w-11/12 max-w-5xl">
                                <h3 className="font-bold text-lg">Your feedback</h3>

                                <form onSubmit={(e) => handleFeedback(e)} className="md:flex items-center gap-10">
                                    <p>{user?.displayName}</p>
                                    <input className="border p-2" placeholder="image url" type="text" name="photo" id="" />
                                    <textarea className="border p-2" name="feedback" placeholder="Write your feedback" id=""></textarea>
                                    <input type="submit" value="submit" />
                                </form>



                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;