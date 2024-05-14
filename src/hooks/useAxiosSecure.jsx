import axios from "axios";

const axiosSecure = axios.create({
    baseURL : 'https://assignment-eleven-server-rouge.vercel.app',
    withCredentials : true
})

const useAxiosSecure = () => {
    return {axiosSecure};
};

export default useAxiosSecure;