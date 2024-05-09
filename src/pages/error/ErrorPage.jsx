import { Link } from "react-router-dom";
import error from '../../assets/error.jpg'


const ErrorPage = () => {
    return (
        <div>
            <section className="flex items-center h-full sm:p-16 dark:bg-gray-50 dark:text-gray-800">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
                    <img src={error} alt="" />
                    <p className="text-3xl">Opss!!!!!! Nothing Found.....</p>
                    <Link to='/' className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50 btn btn-outline">Back to homepage</Link>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;