import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";


const Root = () => {

    const location = useLocation()

    const headerFooter = location.pathname.includes('/login')

    return (
        <div className="max-w-6xl mx-auto">
            { headerFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
           { headerFooter || <Footer></Footer>}
        </div>
    );
};

export default Root;