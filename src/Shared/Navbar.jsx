import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../Hooks/useCart";

const Navbar = () => {
  const {user,logOut}= useContext(AuthContext)
  const [cart] = useCart()
  const handleLogout = () =>{
    logOut()
    .then()
    .catch()
  }
  const navLinks = <>
  <li><NavLink className={({isActive}) =>
      isActive ? 'btn btn-outline  font-bold' : 'font-bold'
      }  to='/'>
              Home
          </NavLink></li>
  <li><NavLink className={({isActive}) =>
      isActive ? 'btn btn-outline  font-bold' : 'font-bold'
      }  to='/menu'>
              Menu
          </NavLink></li>
  <li><NavLink className={({isActive}) =>
      isActive ? 'btn btn-outline  font-bold' : 'font-bold'
      }  to='/order/salad'>
              Order Now
          </NavLink></li>
  <li><NavLink className={({isActive}) =>
      isActive ? 'btn btn-outline  font-bold' : 'font-bold'
      }  to='/secret'>
              Secret
          </NavLink></li>
   <li>
      <Link to="/dashboard/cart">
          <button className="flex"> <FaShoppingCart className="" /> 
            <div className="badge badge-secondary"> +{cart.length} </div>
          </button>
      </Link>
    </li>       
  
  </>
    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
        
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Healthy Restaurant</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
      
    </ul>
  </div>
  <div className="navbar-end">
  {
    user ?
    <div className="flex gap-2">
      
      <Link >
         <img className="w-[50px] rounded-full" 
           title={user?.displayName} src={user?.photoURL} alt="" /> 
      </Link>
      
      
      <button onClick={handleLogout} className="btn btn-outline btn-secondary"> Sign Out </button>
    </div>
    :
    <div className="flex gap-4">
        <Link to='/login'>
          <button className="btn btn-outline btn-success"> Login</button>
        </Link>
        
    </div>
  }
  </div>
</div>
    );
};

export default Navbar;