import axios from "axios";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useMyPurchase from "../../hooks/useMyPurchase";
import { Helmet } from "react-helmet-async";


const MyPurchase = () => {
    const { purchases, refetch2 } = useMyPurchase()
    console.log(purchases)

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

                axios.delete(`http://localhost:5000/purchase/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            refetch2()
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


    return (
        <div>
            <Helmet>
                <title>CulinaryCanvas | my purchase</title>
            </Helmet>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Added time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            purchases.map(purchase => <tr
                                key={purchase._id}
                            >
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={purchase.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td> {purchase.name}</td>

                                <td>${purchase.price}</td>
                                <td>{purchase.time}</td>

                                <td>
                                    {/* <Link to={`/update/${purchase._id}`} className="btn btn-ghost btn-sm "><FaEdit className="text-2xl"></FaEdit></Link> */}

                                    <button onClick={() => handleDelete(purchase._id)} className="btn btn-ghost btn-xs"><RiDeleteBin6Line className="text-2xl text-red-500"></RiDeleteBin6Line></button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPurchase;