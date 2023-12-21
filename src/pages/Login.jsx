import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const {login,setUser} = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value
    login(email, password)
    .then((userCredential)=>{
      const user = userCredential.user;
      setUser(user);
      navigate(location?.state ? location.state : "/");
    })




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
              <button className="btn btn-primary" type="submit">Login</button>
            </div>
          </form>
          <p className="text-center my-4"> Don't have an account <Link to={'/register'} className="text-accent font-semibold ">Register  now</Link>  </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
