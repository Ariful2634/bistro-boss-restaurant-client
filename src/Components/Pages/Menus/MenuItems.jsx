/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Menu from "../Shared/Menu";


const MenuItems = ({items, title}) => {
    console.log(title)
   
    return (
       <div>
         <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
        {
            items.map(menu=><Menu key={menu._id} menu={menu}></Menu>)
        }
        
    </div>
    <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-2">Order Now</button></Link>
    
       </div>

       
    );
};

export default MenuItems;