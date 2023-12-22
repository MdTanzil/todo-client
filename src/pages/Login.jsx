/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
const Login = () => {
  const {login,setUser ,signInWithGoogle} = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value
    login(email, password)
    .then((userCredential)=>{
      const user = userCredential.user;
      setUser(user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Successfully",
        showConfirmButton: false,
        timer: 1500
      });
      navigate(location?.state ? location.state : "/");
    })
  }
  const handleGoogleLogin = ()=>{
    signInWithGoogle()
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
   
     
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Success",
        showConfirmButton: false,
        timer: 1500
      });
      navigate("/");
    })
    .catch((error) => {
      // Handle Errors here.
      // // The email of the user's account used.
      // const email = error.customData.email;
      // // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
     


    });
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className=" ">
        <div
          className="card shrink-0  w-[500px]   shadow-2xl  "
        >
          <h1 className="text-4xl font-bold text-center pt-5">Log In</h1>
          <form className="card-body card-normal" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                name="password"
              />
              <label className="label">
              
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-accent" type="submit">Login</button>
            </div>
          </form>
          <button className="btn  btn-info w-2/3 mx-auto" onClick={() =>handleGoogleLogin()}> <FaGoogle /> LogIn With Google</button>
          <p className="text-center my-4"> Don't have an account <Link to={'/register'} className="text-accent font-semibold ">Register  now</Link>  </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
