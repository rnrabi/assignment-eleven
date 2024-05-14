import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contextApi/ContextProvider";


const useMyPurchase = () => {
    const { user } = useContext(AuthContext)
    const [purchases, setPurchases] = useState([])
    const [toggle, setToggle] = useState(true)
    const refetch2 = () => {
        setToggle(!toggle)
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/myPurchase/${user?.email}` , {withCredentials:true})
            .then(res => setPurchases(res.data))
    }, [user, toggle])

    return { purchases, refetch2 }
};

export default useMyPurchase;