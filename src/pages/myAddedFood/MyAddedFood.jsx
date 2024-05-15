import { useContext } from "react";
import useMyAddedFood from "../../hooks/useMyAddedFood";
import { AuthContext } from "../../contextApi/ContextProvider";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";



const MyAddedFood = () => {
    const { loading } = useContext(AuthContext)
    const { myAdd, refetch } = useMyAddedFood()
    console.log(myAdd)
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`https://assignment-eleven-server-rouge.vercel.app/foods-delete/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            refetch()
                        }
                    })

                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }


    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    return (
        <div>
            <Helmet>
                <title>CulinaryCanvas | My Added Food</title>
            </Helmet>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myAdd.map(add => <tr
                                key={add._id}
                            >
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={add.imageURL} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td> {add.name}</td>

                                <td>${add.price}</td>

                                <td>
                                    <Link to={`/update/${add._id}`} className="btn btn-ghost btn-sm "><FaEdit className="text-2xl"></FaEdit></Link>

                                    <button onClick={() => handleDelete(add._id)} className="btn btn-ghost btn-xs"><RiDeleteBin6Line className="text-2xl text-red-500"></RiDeleteBin6Line></button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAddedFood;