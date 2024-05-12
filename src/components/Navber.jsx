import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../contextApi/ContextProvider";
import Swal from "sweetalert2";


const Navber = () => {
    const { user, logOutUser } = useContext(AuthContext)

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Log out successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(() => { })
    }


    const menu = <>
        <li><NavLink to='/' className={({isActive})=>isActive ? 'text-bold underline text-green-500' : ''}>Home</NavLink></li>

        <li><NavLink to='/allFoods' className={({isActive})=>isActive ? 'text-bold underline text-green-500' : ''}>All foods</NavLink></li>
       
        <li><NavLink to='/gallery' className={({isActive})=>isActive ? 'text-bold underline text-green-500' : ''}>Gallery</NavLink></li>
       
        <li><NavLink to='/register' className={({isActive})=>isActive ? 'text-bold underline text-green-500' : ''}>Register</NavLink></li>

    </>


    return (
        <div className="">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl">CulinaryCanvas</Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-5 px-1">
                        {menu}
                    </ul>
                </div>

                <div className="navbar-end">
                    {
                        user ? <>
                            <button onClick={handleLogOut} className="btn">Log out</button>

                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" referrerPolicy="no-referrer" src={user?.photoURL} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50">
                                    <li><Link to='/myAddedFoods'>My added food items</Link></li>
                                    <li><Link to='/addAFood'>Add a food item</Link></li>
                                    <li><Link to='/myPurchase'>My ordered food items</Link></li>

                                </ul>
                            </div>
                        </> :
                        <Link to='/login' className="btn">Login</Link>
                    }


                    

                </div>
            </div>
        </div >
    );
};

export default Navber;