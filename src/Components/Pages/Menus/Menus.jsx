/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet";
import Cover from "../Shared/Cover";
import dessertPic from '../../../assets/menu/dessert-bg.jpeg'
import saladPic from '../../../assets/menu/salad-bg.jpg'
import soupPic from '../../../assets/menu/soup-bg.jpg'
import pizzaPic from '../../../assets/menu/pizza-bg.jpg'
import menuPic from '../../../assets/menu/banner3.jpg'
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../Shared/SectionTitle";
// import SectionTitle from "../Shared/SectionTipizza
import MenuItems from "./MenuItems";
import { Link } from "react-router-dom";

const Menus = () => {

   

    const [menu] = useMenu()
    const dessert = menu.filter(menu => menu.category === 'dessert')
    const salad = menu.filter(menu => menu.category === 'salad')
    const soup = menu.filter(menu => menu.category === 'soup')
    const pizza = menu.filter(menu => menu.category === 'pizza')
    const offered = menu.filter(menu => menu.category === 'offered')

    return (
        <div>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Bistro Boss | Menu</title>
                <link rel="canonical" href="http://localhost:5173/menu" />
            </Helmet>
            <Cover img={menuPic}
                title={"Our Menus"}
            ></Cover>
            <div className="space-y-16">
                <SectionTitle
                    heading={"TODAYS OFFER"}
                    subHeading={"Don't Miss"}
                ></SectionTitle>
                <MenuItems items={offered}></MenuItems>
                

                <Cover img={dessertPic}
                    title={"Desserts"}
                ></Cover>
                <MenuItems items={dessert}  title={"desserts"}></MenuItems>
                

                <Cover img={saladPic}
                    title={"Salads"}
                ></Cover>
                <MenuItems items={salad} title={"Salads"}></MenuItems>
                
                <Cover img={soupPic}
                    title={"Soups"}
                ></Cover>
                <MenuItems items={soup}  title={"Soups"}></MenuItems>
               

                <Cover img={pizzaPic}
                    title={"Pizzas"}
                ></Cover>
                <MenuItems items={pizza}  title={"Pizzas"}></MenuItems>
                
            </div>
        
            
             
        </div>
        
    );
};

export default Menus;