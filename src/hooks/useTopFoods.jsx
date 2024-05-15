import axios from "axios";
import { useEffect, useState } from "react";


const useTopFoods = () => {
    const [topFoods, setTopFoods] = useState([])
    const [toggle, setToggle] = useState(true)

    const refetch3 = () => {
        setToggle(!toggle);
    }

    useEffect(() => {
        axios.get('http://localhost:5000/topFoods')
            .then(res => {
                setTopFoods(res.data)
            })
    }, [toggle])

    return { topFoods, refetch3 }
};

export default useTopFoods;