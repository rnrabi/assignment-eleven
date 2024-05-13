import { useContext } from "react";
import { AuthContext } from "../../contextApi/ContextProvider";
import axios from "axios";
import Swal from "sweetalert2";


const AddAFood = () => {
    const { user } = useContext(AuthContext)
    const handleAddFood = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const imageURL = form.imageURL.value;
        const category = form.category.value;
        const quantity = parseInt(form.quantity.value);
        const price = form.price.value;
        const addBy = form.addBy.value;
        const origin = form.origin.value;
        const textarea = form.textarea.value;
        const purchase = 0;
        console.log(name , imageURL , category , quantity , price , addBy ,origin , textarea)
       const addFood = {name , email: user?.email, imageURL , category , quantity , price , addBy ,origin , textarea , purchase}

        axios.post('http://localhost:5000/foods' , addFood)
        .then(res=>{
            console.log(res.data)
            if(res.data.acknowledged){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your food is added",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
    
    }


    return (
        <div>
            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Add Your Food</h2>

                <form onSubmit={handleAddFood}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="foodname">Food name</label>
                            <input id="foodname" type="text" name="name" 
                                placeholder="Food name" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="imgeURL">Image URL</label>
                            <input id="imgeURL" type="text" placeholder="Food image url" name="imageURL" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="quantity">Quantity </label>
                            <input id="quantity " type="text " name="quantity" placeholder="quantity" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="foodCategory ">Food Category  </label>
                            <input id="foodCategory " type="text" name="category" placeholder="food category" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="price ">Price  </label>
                            <input id="price " type="text" name="price" placeholder="Price" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="addBy ">Add by  </label>
                            <input id="addBy " type="text" defaultValue={user?.displayName} placeholder="add by"  name="addBy" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="foodOrigin ">Food origin  </label>
                            <input id="foodOrigin " type="text"  name="origin" placeholder="Your country" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="foodCategory ">Short description  </label>
                            <textarea name="textarea" id="" placeholder="write something" cols="30" rows="6" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"></textarea>
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Add food</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddAFood;