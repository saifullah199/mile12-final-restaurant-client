
import SectionTitle from "../../Components/SectionTitle";
import MenuItem from "../../Shared/MenuItem";
import useMenu from "../../Hooks/useMenu";


const PopularMenu = () => {

    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === "popular")
    // const [menu, setMenu] = useState([])
    // useEffect(() =>{
        
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(item => item.category ==='popular')
    //         setMenu(popularItems )})
    // },[])
    return (
        <section>
            <SectionTitle
            heading='From Our Menu'
            subHeading='Popular Items'
            >

            </SectionTitle>

            <div className="grid grid-cols-2 gap-4">
                {
                    popular.map(item => <MenuItem key={item._id} 
                    item={item}
                    >
                    
                    </MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;