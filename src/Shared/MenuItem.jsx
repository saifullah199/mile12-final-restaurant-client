

const MenuItem = ({item}) => {

    const {name, image,recipe, price} = item
    return (
        <div className="flex gap-4  ">
            <div className=" ">
                <img className="w-[120px]" style={{borderRadius: "0 200px 200px 200px"}} src={image} alt="" />
            </div>
            <div className=" ">
                <h3>{name}</h3>
                <p>{recipe}</p>
            </div>
            <div>
                <p>${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;