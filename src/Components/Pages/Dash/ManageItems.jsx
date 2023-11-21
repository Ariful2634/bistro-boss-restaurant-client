import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../Shared/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const ManageItems = () => {

    const [menu, ,refetch] = useMenu()
    const axiosSecure = useAxiosSecure()
    

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

                axiosSecure.delete(`/menu/${id}`)
                .then(res=>{
                    if(res.data.deletedCount > 0){
                        refetch()
                        Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                    }
                    console.log(res.data)
                })

            
            }
          });
    }

    
    return (
        <div>
            <SectionTitle heading={'Manage All Items'} subHeading={'Hurry Up'}>
            </SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                   #
                                </th>
                                <th>Image</th>
                                <th>Item Name</th>
                                <th className="text-right">Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item,i)=>  <tr key={item._id}>
                                <th>
                                    {i+1}
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
                                <td className="text-right"> ${item.price}</td>
                                <td>
                                <button  className="btn bg-orange-600 btn-sm">
                                        <FaEdit></FaEdit>
                                    </button>
                                </td>
                                <td>
                                <button onClick={()=>handleDelete(item._id)} className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>)
                            }
                           
                           
                            
                           
                            
                        </tbody>
                       
                        

                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;