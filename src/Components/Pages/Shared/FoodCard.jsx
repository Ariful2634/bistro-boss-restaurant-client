/* eslint-disable react/prop-types */


const FoodCard = ({items}) => {

    const {image, price,name,recipe}=items

    return (
        <div className="card w-96 bg-base-100 shadow-xl text-center">
        <figure><img src={image} alt="Shoes" /></figure>
        <p className="bg-black text-white absolute right-5 px-2 py-1 rounded-lg top-5">${price}</p>
        <div className="card-body">
          <h2 className="card-title flex justify-center">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline border-0 border-b-4 border-orange-400 bg-slate-100 ">Add To Cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;