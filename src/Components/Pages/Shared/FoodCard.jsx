/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCarts from "../../hooks/useCarts";


const FoodCard = ({items}) => {

  const {user}=useContext(AuthContext)
  const navigate = useNavigate()
    const {_id,image, price,name,recipe}=items
    const location = useLocation()
    const axiosSecure=useAxiosSecure()
    const [,refetch]=useCarts()
    

    const handleAdd = ()=>{
      if(user && user.email){
        //sending to thr database
        const cartItem={
          menuId:_id,
          email:user.email,
          name,
          price,
          image

        }

        axiosSecure.post('/carts',cartItem)
        .then(res=>{
          console.log(res.data)
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
        refetch()

      }
      else{
        Swal.fire({
          title: "Yor are not logged in",
          text: "Please Logged in first",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Login!"
        }).then((result) => {
          if (result.isConfirmed) {
           navigate('/login', {state:{from:location}})
          }
        });
      }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl text-center">
        <figure><img src={image} alt="Shoes" /></figure>
        <p className="bg-black text-white absolute right-5 px-2 py-1 rounded-lg top-5">${price}</p>
        <div className="card-body">
          <h2 className="card-title flex justify-center">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button onClick={handleAdd} className="btn btn-outline border-0 border-b-4 border-orange-400 bg-slate-100 ">Add To Cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;