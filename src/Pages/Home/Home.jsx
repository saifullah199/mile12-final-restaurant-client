import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Category from "./Category";
import FeaturedMenu from "./FeaturedMenu";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title> Healthy Restaurant | Home</title>
        
            </Helmet>
           <Banner/>
           <Category/>
           <PopularMenu/>
           <FeaturedMenu/>
           <Testimonials/>
        </div>
    );
};

export default Home;