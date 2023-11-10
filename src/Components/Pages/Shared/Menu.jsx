/* eslint-disable react/prop-types */


const Menu = ({menu}) => {

    const {image, price,name,recipe}=menu

    return (
        <div className="flex gap-3">
            <img style={{borderRadius:'0px 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            <div>
                <h2 className="uppercase">{name} ----------------------------------</h2>
                <p>{recipe}</p>
            </div>
            <p className="text-[#BB8506]">${price}</p>
        </div>
    );
};

export default Menu;