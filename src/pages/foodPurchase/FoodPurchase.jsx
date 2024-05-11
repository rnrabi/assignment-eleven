import { useContext } from "react";
import { AuthContext } from "../../contextApi/ContextProvider";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";


const FoodPurchase = () => {
    const { user } = useContext(AuthContext)
    const purchase = useLoaderData()
    console.log(purchase)

    const currentTimeStamp = Date.now();
    const dateObject = new Date(currentTimeStamp);

    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getDate();

    const formattedTime = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;

    // console.log(formattedTime);
    const handlePurchase = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const time = form.time.value;
        const email = form.email.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const addBy = form.addBy.value;
        console.log(name, time, email, quantity, price, addBy)
        const purchaseInfo = { name, time, email, quantity, price, addBy }

        axios.post('http://localhost:5000/purchase', purchaseInfo)
        .then(res=>{
            console.log(res.data)
            if(res.data.acknowledged){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You have purchased the food",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
    }





    return (
        <div>
            <h2>This is food purchase</h2>
            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Add Your Food</h2>

                <form onSubmit={handlePurchase}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="foodname">Food name</label>
                            <input id="foodname" type="text" name="name"
                                placeholder="Food name" defaultValue={purchase.name} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="time">Buying date</label>

                            <input id="time" type="text" placeholder="Buying time" defaultValue={formattedTime} name="time" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="quantity">Quantity </label>
                            <input id="quantity " type="text " name="quantity" placeholder="quantity" defaultValue={purchase.quantity} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="addBy ">Add by  </label>
                            <input id="addBy " type="text" defaultValue={user?.displayName} placeholder="add by" name="addBy" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>


                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="price ">Price  </label>
                            <input id="price " type="text" name="price" placeholder="Price" defaultValue={purchase.price} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="email ">Email</label>
                            <input id="email " type="text" name="email" placeholder="email"
                                defaultValue={user?.email}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>


                    </div>

                    <div className="flex justify-end mt-6">
                        <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Purchase now</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default FoodPurchase;