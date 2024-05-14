import axios from "axios";
import { useEffect, useState } from "react";


const useTopFoods = () => {
    const [topFoods, setTopFoods] = useState([])
    const [toggle, setToggle] = useState(true)

    const refetch3 = () => {
        setToggle(!toggle);
    }

    useEffect(() => {
        axios.get('https://assignment-eleven-server-rouge.vercel.app/topFoods')
            .then(res => {
                setTopFoods(res.data)
            })
    }, [toggle])

    return { topFoods, refetch3 }
};

export default useTopFoods;