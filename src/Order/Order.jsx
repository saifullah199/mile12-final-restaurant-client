import { useState } from "react";
import Cover from "../Shared/Cover";
import orderImg from "../assets/shop/banner2.jpg" 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../Hooks/useMenu";
import FoodCard from "../Components/FoodCard";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category} = useParams()
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category ==="dessert")
    const salad = menu.filter(item => item.category ==="salad")
    const pizza = menu.filter(item => item.category ==="pizza")
    const soup = menu.filter(item => item.category ==="soup")
    const drinks = menu.filter(item => item.category ==="drinks")
    
    return (
        <div>
            <Helmet>
                <title> Healthy Restaurant | Order Food</title>
        
            </Helmet>
            <Cover img={orderImg} title="Order Food"></Cover>
            <Tabs>
    <TabList>
      <Tab>Salad</Tab>
      <Tab>Pizza</Tab>
      <Tab>Soup</Tab>
      <Tab>Dessert</Tab>
      <Tab>Drinks</Tab>
      
    </TabList>

    <TabPanel>
        <div className="grid lg:grid-cols-3 gap-5">
            {
                salad.map(item => <FoodCard key={item._id} item={item}>

                </FoodCard>)
            }
        </div>
    </TabPanel>

    <TabPanel>
      
    <div className="grid lg:grid-cols-3 gap-5">
            {
                pizza.map(item => <FoodCard key={item._id} item={item}>

                </FoodCard>)
            }
        </div>
    </TabPanel>
    <TabPanel>
    <div className="grid lg:grid-cols-3 gap-5">
            {
                soup.map(item => <FoodCard key={item._id} item={item}>

                </FoodCard>)
            }
        </div>
    </TabPanel>

    <TabPanel>
    <div className="grid lg:grid-cols-3 gap-5">
            {
                desserts.map(item => <FoodCard key={item._id} item={item}>

                </FoodCard>)
            }
        </div>
    </TabPanel>
    <TabPanel>
        <div className="grid lg:grid-cols-3 gap-5">
            {
                drinks.map(item => <FoodCard key={item._id} item={item}>

                </FoodCard>)
            }
        </div>
    </TabPanel>
 
  </Tabs>
        </div>
    );
};

export default Order;