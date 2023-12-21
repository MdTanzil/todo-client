import { Link, useNavigate } from "react-router-dom";
import useAuth from './../hooks/useAuth';
// import axios from "axios";

const Register = () => {
    const {register:reg,updateUserData} = useAuth()
    const navigate = useNavigate()
    const handleSubmit =(e)=>{
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        const imageUrl = e.target.imageUrl.value
        const name = e.target.name.value
        // console.log(email,password,imageUrl);
        reg(email,password).then(()=>{
            if (name && imageUrl) {
                updateUserData(name, name);
              } else if (name) {
                updateUserData(name, "");
              } else if (imageUrl) {
                updateUserData("", imageUrl);
              }
            //   axios.post('/users', {name,email})
            //   .then(res =>{
            //       console.log(res.data);
                  
          
            //   })
              
              navigate("/");
      
        })
        
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.warn(errorMessage, errorCode);
        console.log(" register error ");
        // toast.error(errorCode);

        // ..
      });
    }
  return (
    <div>
      <section className="bg-gray-50 ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Register Here
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900   "
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                    placeholder="Jon due"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900   "
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900   "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900   "
                  >
                    Profile Url
                  </label>
                  <input
                    type="text"
                    name="imageUrl"
                    id="imageUrl"
                    placeholder="https://www.imagebb.com/abc"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    
                  />
                </div>

                <button
                  type="submit"
                  className="w-full   f font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-accent"
                >
                  Create an account
                </button>
                <p className="text-sm font-light  ">
                  Already have an account?{" "}
                  <Link to={"/login"} className="text-accent font-semibold ">
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
