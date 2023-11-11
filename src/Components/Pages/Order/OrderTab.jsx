/* eslint-disable react/prop-types */
import FoodCard from "../Shared/FoodCard";


const OrderTab = ({items}) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {
            items.map(food=><FoodCard key={food._id} items={food}></FoodCard>)
        }
    </div>
    );
};

export default OrderTab;