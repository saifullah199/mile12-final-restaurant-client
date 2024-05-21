import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useCart from "../Hooks/useCart";


const FoodCard = ({item}) => {
    const {name,image,price,recipe,_id} = item
    const {user} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [,refetch] = useCart()
    const handleAddToCart = food => {
      if(user && user.email){
          // todo
          console.log(user.email, food)
          const cartItem = {
            menuId: _id,
            email: user.email,
            name,
            image,
            price 
          }
          axiosSecure.post('/carts', cartItem)
          .then(res => {
            console.log(res.data)
            if(res.data.insertedId){
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${name} added to the cart`,
                showConfirmButton: false,
                timer: 1500
              });
              refetch()
            }
          })
      }
      else{
        Swal.fire({
          title: "You are not loggedin",
          text: "Please login for adding to cart",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, login!"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login',{state:{from:location}})
          }
        });
      }
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl relative">
  <figure><img src={image} alt="Shoes" /></figure>
  <p className="absolute top-0 right-0 bg-black text-white"> {price} </p>
  <div className="card-body">
    <h2 className="card-title"> {name} </h2>
    <p>
        {recipe}
    </p>
    <div className="card-actions justify-end">
      <button 
      onClick={ handleAddToCart }
      className="btn btn-outline bg-slate-100 border-0 border-b-4
       border-orange-400 mt-4">
        Add to Cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodCard;