import { Helmet } from "react-helmet-async";
import Slider from "../../components/Slider";
import TopFoods from "../../components/TopFoods";
import FoodServecesTeam from "../../components/FoodServecesTeam";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>CulinaryCanvas | Home</title>
            </Helmet>
            <Slider></Slider>
            <TopFoods></TopFoods>
            <FoodServecesTeam></FoodServecesTeam>
        </div>
    );
};

export default Home;