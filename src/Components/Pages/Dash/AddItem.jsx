import { useForm } from "react-hook-form";
import SectionTitle from "../Shared/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const image_hosting_key=import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItem = () => {

    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) => {
        console.log(data)

        // image upload imgbb and then get an url 

        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type':'multipart/form-data'
            }
        })

        console.log(res.data)


    }

    

    return (
        <div>
            <h2 className="text-4xl">Add Items</h2>
            <SectionTitle heading={'Add An Item'} subHeading={"What's new"}>
            </SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-4">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input {...register('name',{required:true})} type="text" placeholder="Recipe Name" className="input input-bordered w-full border-warning" />

                    </div>
                    <div className="flex gap-5 my-4">
                        {/* category */}
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue="default" {...register("categiry",{required:true})}
                                className="select select-primary w-full ">
                                     <option disabled  value="default">Select A Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>

                        </div>
                        {/* price */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input  {...register('price',{required:true})} type="number" placeholder="Price" className="input input-bordered w-full border-primary" />

                        </div>
                    </div>
                    {/* recipe details */}
                    <div className="form-control my-4">
                        <label className="label">
                            <span className="label-text">Recipe Details</span>
                           
                        </label>
                        <textarea {...register('recipe',{required:true})} className="textarea textarea-bordered h-24 border-accent" placeholder="Recipe Details"></textarea>
                        
                    </div>

                    <div className="my-8">
                    <input {...register('image',{required:true})} type="file" className="file-input file-input-bordered w-full " />
                    </div>

                    <div className="text-center">
                        <button className="btn "> Add Items <FaUtensils className="ml-3"></FaUtensils></button>
                    </div>

                    
                </form>
            </div>
        </div>
    );
};

export default AddItem;