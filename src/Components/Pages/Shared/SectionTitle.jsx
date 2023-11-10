/* eslint-disable react/prop-types */


const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="w-4/12 mx-auto text-center my-12">
            <p className="text-[#D99904] mb-2">---{subHeading}---</p>
            <h2 className="border-y-2 text-3xl py-2">{heading}</h2>
        </div>
    );
};

export default SectionTitle;