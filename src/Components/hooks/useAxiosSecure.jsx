import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


 const axiosSecure = axios.create({
    baseURL:'http://localhost:5000'
})

const useAxiosSecure = () => {

    const navigate = useNavigate()
    const {logOut}=useContext(AuthContext)

    // request interceptors to add authorization header for every secure call to the api

    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        // console.log('request stopped by interceptors', token)
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function(error){
        return Promise.reject(error)
    })

    // intercepts 401 and 403 status

    axiosSecure.interceptors.response.use(function(response){
        return response;
    }, (error)=>{
        const status = error.response.status;
        console.log('error in the interceptors', status)
        if(status===401 || status===403){
            logOut()
            .then()
            .catch()
            navigate('/login')
           
        }
        return Promise.reject(error)
    })

    return axiosSecure
};

export default useAxiosSecure;