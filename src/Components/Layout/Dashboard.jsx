import { FaAd, FaCalendar, FaHome, FaSearch, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex max-w-6xl mx-auto">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu text-white">
                    <li>
                        <NavLink to={'/dashboard/userHome'}><FaHome></FaHome> User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/reserve'}><FaCalendar></FaCalendar>Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/cart'}><FaShoppingCart></FaShoppingCart>My Cart</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/review'}><FaAd></FaAd> Add A Review</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/booking'}><FaShoppingCart></FaShoppingCart>My Bookings</NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to={'/'}><FaHome></FaHome>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/order/Salads'}><FaSearch></FaSearch>Menu</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-6 ml-16">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;