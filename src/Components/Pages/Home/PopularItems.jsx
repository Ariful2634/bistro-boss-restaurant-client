import { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle";
import Menu from "../Shared/Menu";


const PopularItems = () => {

    const [menu,setMenu]=useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
                setMenu(data)
               
        })
    },[])
    const menus = menu.filter(menu=>menu.category=='popular')

    return (
        <div className="mt-8 mb-16">
            <SectionTitle
            heading={'From Our Menu'}
            subHeading={"Check It Out"}
            ></SectionTitle>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
                {
                    menus.map(menu=><Menu key={menu._id} menu={menu}></Menu>)
                }
            </div>
        </div>
    );
};

export default PopularItems;