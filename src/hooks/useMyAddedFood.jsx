import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contextApi/ContextProvider";


const useMyAddedFood = () => {
    const { user, setLoading } = useContext(AuthContext)
    const [myAdd, setMyAdd] = useState([])
    const [toggle, setToggle] = useState(true);

    const refetch = () => {
        setToggle(!toggle)
    }

    useEffect(() => {
        axios.get(`https://assignment-eleven-server-rouge.vercel.app/foods/${user?.email}` , {withCredentials:true})
            .then(res => setMyAdd(res.data))
        setLoading(false)
    }, [user, toggle])

    return { myAdd, refetch }
};

export default useMyAddedFood;