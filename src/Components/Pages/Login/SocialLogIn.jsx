import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogIn = () => {

    const {googleLogIn}=useContext(AuthContext)
    const location=useLocation()
    const navigate = useNavigate()

    const from = location?.state?.from?.pathname || "/"


    const handleSocial = ()=>{
        googleLogIn()
        .then(res=>{
            const user = res.user;
            console.log(user)
            navigate(from,{replace:true});
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return (
        <div>
            <div className="text-center">
                <button onClick={handleSocial} className="btn btn-outline text-purple-600"><FaGoogle></FaGoogle> Login With Google</button>
            </div>
        </div>
    );
};

export default SocialLogIn;