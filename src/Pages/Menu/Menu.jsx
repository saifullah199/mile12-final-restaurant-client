import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover";
import menuImg from "../../assets/menu/pizza-bg.jpg"
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle";
import MenuCategory from "../../Components/MenuCategory";

const Menu = () => {
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category ==="dessert")
    const salad = menu.filter(item => item.category ==="salad")
    const pizza = menu.filter(item => item.category ==="pizza")
    const soup = menu.filter(item => item.category ==="soup")
    const offered = menu.filter(item => item.category ==="offered")
    return (
        <div>
            <Helmet>
                <title> Healthy Restaurant | Menu</title>
        
            </Helmet>
            <Cover img={menuImg} title="our menu"></Cover>

            <SectionTitle subHeading="Don't Miss" heading="Today's Offer">

            </SectionTitle>
            <MenuCategory items={offered}> </MenuCategory>

            <MenuCategory
            items= {desserts}
            title="Dessert"
            img={dessertImg}
           ></MenuCategory>

            <MenuCategory
            items= {pizza}
            title={"Pizza"}
            img={pizzaImg}
           ></MenuCategory>

            <MenuCategory
            items= {salad}
            title={"Salad"}
            img={saladImg}
           ></MenuCategory>

            <MenuCategory
            items= {soup}
            title={"Soup"}
            img={soupImg}
           ></MenuCategory>
            
            
        </div>
    );
};

export default Menu;