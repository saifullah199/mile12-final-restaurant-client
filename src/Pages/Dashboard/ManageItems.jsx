import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../Components/SectionTitle";
import useMenu from "../../Hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {

    const [menu,loading,refetch] = useMenu()
    const axiosSecure = useAxiosSecure()
    const handleDeleteItem = (item) =>{
        
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async (result) => {
            if (result.isConfirmed) {

                // axiosSecure.delete(`/menu/${item._id}`)
                //   .then(res => {
                //       if (res.data.deletedCount > 0) {
                //           refetch();
                //           Swal.fire({
                //               title: "Deleted!",
                //               text: "Menu has been deleted.",
                //               icon: "success"
                //           });
                //       }
                //   })

                 const res = await axiosSecure.delete(`/menu/${item._id}`)
                  console.log(res.data)
                 if(res.data.deletedCount > 0){
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Menu has been deleted.",
                        icon: "success"
                      });
                }
                
                
              
            }
          });
    }
    return (
        <div>
            <SectionTitle heading="Manage All Items" subHeading="Hurry up">

            </SectionTitle>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>Item Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th> Update</th>
        <th> Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        menu.map((item,index) => <tr key={item._id}>
            <th>
              {index +1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} />
                  </div>
                </div>
               
              </div>
            </td>
            <td>
              {item.name}
              
            </td>
            <td> {item.price} </td>
            <td>
            <Link to={`updateItem/${item._id}`}>
            <button
                                  
                                  className="btn btn-md bg-orange-500">
                                 <FaEdit className="text-white 
                                 text-2xl"></FaEdit>
                                 </button>
            </Link>
            </td>
            <td>
            <button
                onClick={() => handleDeleteItem(item)}
                className="btn btn-ghost btn-lg">
                <FaTrashAlt className="text-red-600"></FaTrashAlt>
                </button>
            </td>
          </tr>)
      }
      
      
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default ManageItems;