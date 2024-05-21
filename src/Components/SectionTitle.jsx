

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="mx-auto text-center md:h-1/3 my-8">
            <h3 className="text-yellow-600">---{subHeading}---</h3>
            <h2 className="text-4xl uppercase border-y-4 py-4">{heading}</h2>
        </div>
    );
};

export default SectionTitle;