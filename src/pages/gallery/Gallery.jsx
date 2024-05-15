import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contextApi/ContextProvider";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import GalleryBanner from "../../components/GalleryBanner";


const Gallery = () => {
    const { user } = useContext(AuthContext)
    const [feedback, setFeedback] = useState([])

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

    // console.log(feedback)

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
           
            <GalleryBanner heading='Our Gallery'></GalleryBanner>


            {/* here gallery section  */}
            <section className="py-6 dark:bg-gray-100">
                <div className="container flex flex-col justify-center p-4 mx-auto">
                    <button className="btn btn-outline w-3/12 my-5" onClick={() => document.getElementById('my_modal').showModal()}>Add</button>

                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">

                        {
                            feedback.map((food, index) => <div
                                key={index}
                                className="relative card  bg-base-100 shadow-xl overflow-hidden">
                                <figure className="h-80">
                                    <img
                                        src={food.photo}
                                        alt="food"
                                        className="w-full object-cover"
                                    />
                                </figure>

                                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                                    <h2 className="text-2xl">{food.feedUser}</h2>
                                    <p>{food.feedback}</p>
                                </div>

                            </div>
                            )
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