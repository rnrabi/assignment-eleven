import axios from "axios";
import { useEffect, useState } from "react";


const useAllFoods = () => {
    const [isLoading , setIsLoading] = useState(true)
    const [foods, setFoods] = useState([])
    const [toggle, setToggle] = useState(true)

    const refetch1 = () => {
        setToggle(!toggle);
    }

    useEffect(() => {
        axios.get('https://assignment-eleven-server-rouge.vercel.app/foods',{withCredentials:true})
            .then(res => {
                setFoods(res.data)
                setIsLoading(false)
            })
    }, [toggle])

    return { foods, refetch1 , isLoading }
};

export default useAllFoods;