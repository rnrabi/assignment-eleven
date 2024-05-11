import axios from "axios";
import { useEffect, useState } from "react";


const useAllFoods = () => {
    const [foods, setFoods] = useState([])
    const [toggle, setToggle] = useState(true)

    const refetch1 = () => {
        setToggle(!toggle);
    }

    useEffect(() => {
        axios.get('http://localhost:5000/foods')
            .then(res => {
                setFoods(res.data)
            })
    }, [toggle])

    return { foods, refetch1 }
};

export default useAllFoods;