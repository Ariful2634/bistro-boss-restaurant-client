import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";



const UserHome = () => {

    const { user } = useContext(AuthContext)
    

    return (
        <div>
            <h2>
                <span className="text-green-600">Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
            
        </div>
    );
};

export default UserHome;