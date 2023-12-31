import { FaTrashAlt } from "react-icons/fa";
import useCarts from "../../hooks/useCarts";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const Cart = () => {

    const [cart,refetch] = useCarts()
    const totalPrice = cart.reduce((total, items) => total + items.price, 0)
    const axiosSecure=useAxiosSecure()

    const handleDelete = id=>{
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                .then(res=>{
                    if(res.data.deletedCount > 0){
                        refetch()
                        Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                    }
                    // console.log(res)
                })

              
            }
          });
    }


    return (
        <div>
            <h1>My cart</h1>
            <div className="flex justify-evenly">
                <h1>Total Items: {cart.length}</h1>
                <h2>Total Price: {totalPrice}</h2>
                {
                    cart.length ? <Link to='/dashboard/payment'><button className="btn btn-accent">Pay</button></Link> :
                    <button className="btn btn-ghost disabled:">Pay</button>
                }
            </div>
            <div className="overflow-x-auto">
                <table className="table mt-8">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th> Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                   
                        {
                            cart.map((item , index) =>  <tr key={item._id}>
                                <th>
                                    {
                                        index +1
                                    }
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </td>
                                <td>
                                   {item.name}
                                   
                                </td>
                                <td>{item.price}</td>
                                <th>
                                    <button onClick={()=>handleDelete(item._id)} className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                </th>
                            </tr>)
                        }
                       
                       
                       
                    </tbody>
                    

                </table>
            </div>
        </div>
    );
};

export default Cart;