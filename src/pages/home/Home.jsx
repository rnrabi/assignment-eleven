import { Helmet } from "react-helmet-async";
import Slider from "../../components/Slider";
import TopFoods from "../../components/TopFoods";
import FoodServecesTeam from "../../components/FoodServecesTeam";
import OurSpecialMenu from "../../components/OurSpecialMenu";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>CulinaryCanvas | Home</title>
            </Helmet>
            <Slider></Slider>
            <TopFoods></TopFoods>
            <FoodServecesTeam></FoodServecesTeam>
            <OurSpecialMenu></OurSpecialMenu>
        </div>
    );
};

export default Home;