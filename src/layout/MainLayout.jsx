import { Outlet } from "react-router-dom";
import Navber from "../components/Navber";


const MainLayout = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Navber></Navber>
            <Outlet />
        </div>
    );
};

export default MainLayout;