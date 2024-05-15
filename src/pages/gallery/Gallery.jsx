import { useContext, useEffect, useState } from "react";
// import useAllFoods from "../../hooks/useAllFoods";
import { AuthContext } from "../../contextApi/ContextProvider";
import { Helmet } from "react-helmet-async";
import axios from "axios";


const Gallery = () => {
    const { user } = useContext(AuthContext)
    // const { foods } = useAllFoods()
    const [feedback, setFeedback] = useState([])
    const [hoverStates, setHoverStates] = useState(new Array(feedback.length).fill(false));

    useEffect(() => {
        getFeedback()
    }, [])

    const getFeedback = async () => {
        try {
            const { data } = await axios.get('https://assignment-eleven-server-rouge.vercel.app/feedback')
            setFeedback(data)
            console.log(data)
        } catch (error) {
            console.log(error.message)
        }

    }


    // console.log(foods);
    console.log(feedback)


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
        const feedbacker = { feedUser, photo, feedback }

        axios.post('https://assignment-eleven-server-rouge.vercel.app/feedback', feedbacker, {
            withCredentials: true
        })
            .then(res => {
                console.log(res.data)
            })

        getFeedback()
        form.reset()
    }


    return (
        <div>
            <Helmet>
                <title>CulinaryCanvas | Gallery</title>
            </Helmet>
            <h2 className="text-center text-3xl font-bold">Our Gallery</h2>
            <section className="py-6 dark:bg-gray-100">
                <div className="container flex flex-col justify-center p-4 mx-auto">
                    <button className="btn btn-outline w-3/12 my-5" onClick={() => document.getElementById('my_modal').showModal()}>Add</button>

                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">

                        {
                            feedback.map((food, index) => <div
                                key={food._id}
                                className="relative w-72 h-72 bg-contain bg-no-repeat  hover:bg-blend-overlay hover:bg-slate-400"
                                style={{ backgroundImage: `url(${food.photo})`}}

                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={() => handleMouseLeave(index)}
                            >
                                {/* <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={food.photo} /> */}
                            
                                {hoverStates[index] && (
                                    <div className="absolute top-1/3 left-1">
                                        <h2>{food.feedUser}</h2>
                                        <p>{food.feedback}</p>
                                    </div>
                                )}
                            </div>)
                        }



                        <dialog id="my_modal" className="modal">
                            <div className="modal-box w-11/12 max-w-5xl">
                                <h3 className="font-bold text-lg">Your feedback</h3>

                                <form onSubmit={handleFeedback} className="md:flex items-center gap-10">
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