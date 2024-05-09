import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div className="w-11/12 mx-auto">
            <h2>This is main layout</h2>
            <Outlet />
        </div>
    );
};

export default MainLayout;