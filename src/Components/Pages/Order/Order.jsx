import Cover from "../Shared/Cover";
import orderPic from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
// import FoodCard from "../Shared/FoodCard";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";


const Order = () => {

    const categories = ['Salads', 'Pizzas', 'Soups', 'desserts', 'drinks']
    const { category } = useParams()
    // console.log(category, categories)
    const initialIndex = categories.indexOf(category)
    // console.log(initialIndex)

    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu()

    const dessert = menu.filter(menu => menu.category === 'dessert')
    const salad = menu.filter(menu => menu.category === 'salad')
    const soup = menu.filter(menu => menu.category === 'soup')
    const pizza = menu.filter(menu => menu.category === 'pizza')
    const drinks = menu.filter(menu => menu.category === 'drinks')


    return (
        <div className="space-y-10">

            <Helmet>
                <meta charSet="utf-8" />
                <title>Bistro Boss | Order Now</title>
                <link rel="canonical" href="http://localhost:5173/order/salad" />
            </Helmet>

            <Cover img={orderPic} title={"Order Now"}></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList >
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;