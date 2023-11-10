import {Helmet} from "react-helmet";
import Cover from "../Shared/Cover";
import menuPic from '../../../assets/menu/banner3.jpg'
import PopularItems from "../Home/PopularItems";

const Menus = () => {
    return (
        <div>
            <h1>Our menu</h1>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Bistro Boss | Menu</title>
                <link rel="canonical" href="http://localhost:5173/menu" />
            </Helmet>
            <Cover img={menuPic}
            title={"Our Menus"}
            ></Cover>
            <PopularItems></PopularItems>
            <Cover img={menuPic}
            title={"Our Menus"}
            ></Cover>
            <PopularItems></PopularItems>
            <Cover img={menuPic}
            title={"Our Menus"}
            ></Cover>
            <PopularItems></PopularItems>
        </div>
    );
};

export default Menus;