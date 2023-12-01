import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";
import PopularItems from "./PopularItems";
import Testimonials from "./Testimonials";
import About from "./About";

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Bistro Boss | Home</title>
                <link rel="canonical" href="http://localhost:5173" />
            </Helmet>
           <Banner></Banner>
           <Category></Category>
           <PopularItems></PopularItems>
           <Featured></Featured>
           <Testimonials></Testimonials>
           <About></About>
        </div>
    );
};

export default Home;