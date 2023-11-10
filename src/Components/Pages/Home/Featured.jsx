import SectionTitle from "../Shared/SectionTitle";
import pic from '../../../assets/home/featured.jpg'
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured pt-5 bg-fixed bg-cover bg-center bg-opacity-70 bg-black bg-blend-overlay">
            <SectionTitle
                subHeading={'Check It Out'}
                heading={"From Our Menu"}
            ></SectionTitle>
            <div className="flex items-center pb-20 pt-12 px-20">
                <div>
                    <img src={pic} alt="" />
                </div>
                <div className="lg:ml-10">
                    <p>March 20, 2023</p>
                    <p>
                        WHERE CAN I GET SOME?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <div>
                            <button className="btn btn-outline border-0 border-b-2">Order Now</button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;