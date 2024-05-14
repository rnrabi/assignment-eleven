import { Helmet } from "react-helmet-async";
import Slider from "../../components/Slider";
import TopFoods from "../../components/TopFoods";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>CulinaryCanvas | Home</title>
            </Helmet>
            <Slider></Slider>
            <TopFoods></TopFoods>
        </div>
    );
};

export default Home;