import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";


const Register = () => {
    const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm()
    
      const {createUser} = useContext(AuthContext)
      const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
        })
      }
    return (
        <div>
            <Helmet>
                <title> Healthy Restaurant | Register</title>
        
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" {...register("name",{ required: true })} placeholder="name" name='name' className="input input-bordered" required />
          {errors.name && <span>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email",{ required: true })} placeholder="email" name='email' className="input input-bordered" required />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password",{ required: true,maxLength: 20, minLength:6 })} placeholder="password" name='password' className="input input-bordered" required />
          {errors.password && <span>This field is required</span>}
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary"> Register </button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;